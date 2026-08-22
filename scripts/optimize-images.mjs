/**
 * Re-encodes source images to WebP for delivery.
 *
 * Originals stay in `src/assets` as masters. Vite only bundles files that are
 * imported, so leaving them in place costs repo size but not bandwidth.
 *
 * Run with `npm run optimize:images`. Pass `--check` to report what would
 * change without writing files.
 */
import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

/** Starting quality. Grainy or dithered sources escalate from here. */
const WEBP_QUALITY = 90

/** Quality ceiling before falling back to lossless. */
const WEBP_QUALITY_MAX = 97

/**
 * Mean absolute error, in 0-255 units, treated as the threshold of visibility.
 *
 * Chosen empirically: flat artwork and screenshots land near 0.5 at q90, while
 * grainy sources climb past 3 as the encoder smooths texture away.
 */
const MAE_BUDGET = 2

/** Slowest/best encoder search. Build-time cost only. */
const WEBP_EFFORT = 6

/** Files below this size are already cheap; re-encoding them adds churn for no gain. */
const MIN_SOURCE_BYTES = 20 * 1024

/** Widest the header is ever painted (max-h-400px at its 1251x537 ratio), doubled for retina. */
const HEADER_TARGET_WIDTH = 1864

const ROOTS = ['src/assets']

/**
 * Collects every file under `dir` matching `extensions`.
 *
 * @param dir - Directory to walk.
 * @param extensions - Lowercase extensions to keep, including the dot.
 * @returns Absolute-ish paths relative to the process cwd.
 */
const collectFiles = async (dir, extensions) => {
   const entries = await readdir(dir, { withFileTypes: true })
   const files = await Promise.all(
      entries.map(async (entry) => {
         const entryPath = path.join(dir, entry.name)
         if (entry.isDirectory()) return collectFiles(entryPath, extensions)
         return extensions.includes(path.extname(entry.name).toLowerCase())
            ? [entryPath]
            : []
      }),
   )
   return files.flat()
}

/**
 * Mean absolute error per channel between two same-sized images, in 0-255 units.
 *
 * Values under ~1.5 are imperceptible; this is the guard against quality loss.
 *
 * @param originalBuffer - Source image bytes.
 * @param encodedBuffer - Re-encoded image bytes.
 * @returns Mean absolute error, or `null` if the images cannot be compared.
 */
const meanAbsoluteError = async (originalBuffer, encodedBuffer) => {
   const toPixels = (buffer) =>
      sharp(buffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true })

   const [original, encoded] = await Promise.all([
      toPixels(originalBuffer),
      toPixels(encodedBuffer),
   ])

   if (original.data.length !== encoded.data.length) return null

   let total = 0
   for (let i = 0; i < original.data.length; i += 1) {
      total += Math.abs(original.data[i] - encoded.data[i])
   }
   return total / original.data.length
}

/** Formats a byte count as a short human-readable string. */
const formatBytes = (bytes) =>
   bytes >= 1024 * 1024
      ? `${(bytes / 1024 / 1024).toFixed(1)}MB`
      : `${Math.round(bytes / 1024)}KB`

/**
 * Longest edge kept for rasters embedded inside the header SVG.
 *
 * Only an intermediate: librsvg refuses to parse the original because a single
 * base64 attribute blows past libxml's buffer limit, so the payload must shrink
 * before the SVG can be rendered at all. Sized with headroom over the final
 * output so the downscale never becomes the limiting factor.
 */
const EMBEDDED_RASTER_MAX_EDGE = 2400

/**
 * Shrinks oversized base64 rasters embedded in an SVG, leaving the surrounding
 * markup untouched.
 *
 * Each `<image>` carries explicit `width`/`height` attributes that the pattern
 * transform matrices are expressed in, so replacing the payload with a smaller
 * raster resamples the fill without shifting its placement.
 *
 * @param svg - SVG markup containing base64 data URIs.
 * @returns Markup with lighter payloads.
 */
const shrinkEmbeddedRasters = async (svg) => {
   const matches = [
      ...svg.matchAll(/data:image\/png;base64,([A-Za-z0-9+/=]+)/g),
   ]
   let result = svg

   for (const match of matches) {
      const buffer = Buffer.from(match[1], 'base64')
      const { width, height } = await sharp(buffer).metadata()
      if (Math.max(width, height) <= EMBEDDED_RASTER_MAX_EDGE) continue

      const { isOpaque } = await sharp(buffer).stats()
      const resized = sharp(buffer).resize({
         width: width >= height ? EMBEDDED_RASTER_MAX_EDGE : undefined,
         height: height > width ? EMBEDDED_RASTER_MAX_EDGE : undefined,
         withoutEnlargement: true,
      })

      // JPEG only where there is no alpha to lose; q95 keeps this stage well
      // clear of visible loss before the final WebP pass.
      const [payload, mime] = isOpaque
         ? [await resized.jpeg({ quality: 95 }).toBuffer(), 'image/jpeg']
         : [await resized.png({ compressionLevel: 9 }).toBuffer(), 'image/png']

      result = result.replace(
         match[0],
         `data:${mime};base64,${payload.toString('base64')}`,
      )
   }

   return result
}

/**
 * Rasterizes the homepage header SVG, which wraps a 3000x4000 photo, down to
 * the largest size it is ever displayed at.
 *
 * @param dryRun - When true, reports the result without writing.
 * @returns A conversion record for reporting.
 */
const convertHeader = async (dryRun) => {
   const source = 'src/assets/homepage/header.svg'
   const target = 'src/assets/homepage/header.webp'
   const original = await readFile(source)

   const svg = await shrinkEmbeddedRasters(original.toString('utf8'))
   const naturalWidth = Number(svg.match(/<svg[^>]*\swidth="(\d+)"/)?.[1] ?? 0)
   if (!naturalWidth)
      throw new Error(`Cannot read natural width from ${source}`)

   const encoded = await sharp(Buffer.from(svg), {
      density: Math.ceil((72 * HEADER_TARGET_WIDTH) / naturalWidth),
   })
      .resize({ width: HEADER_TARGET_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT, alphaQuality: 100 })
      .toBuffer()

   if (!dryRun) await writeFile(target, encoded)

   const { width, height } = await sharp(encoded).metadata()
   return {
      source,
      target,
      sourceBytes: original.length,
      targetBytes: encoded.length,
      dimensions: `${width}x${height}`,
      mae: null,
   }
}

/**
 * Encodes to WebP, raising quality until the error falls inside `MAE_BUDGET`.
 *
 * Flat artwork settles at the first attempt. Grainy sources, where the encoder
 * spends its bit budget smoothing texture, climb until they either measure
 * clean or exhaust the ceiling and fall back to lossless.
 *
 * @param buffer - Source image bytes.
 * @returns The encoded bytes plus the settings and error that produced them.
 */
const encodeWithinBudget = async (buffer) => {
   let attempt = null

   for (let quality = WEBP_QUALITY; quality <= WEBP_QUALITY_MAX; quality += 3) {
      const encoded = await sharp(buffer)
         .webp({ quality, effort: WEBP_EFFORT, alphaQuality: 100 })
         .toBuffer()
      const mae = await meanAbsoluteError(buffer, encoded)
      attempt = { encoded, mae, quality }
      if (mae === null || mae <= MAE_BUDGET) return attempt
   }

   const lossless = await sharp(buffer)
      .webp({ lossless: true, effort: WEBP_EFFORT })
      .toBuffer()

   // Lossless WebP still beats PNG, but not always the lossy attempt it replaces.
   return lossless.length < attempt.encoded.length
      ? { encoded: lossless, mae: 0, quality: 'lossless' }
      : attempt
}

/**
 * Re-encodes a single raster to WebP at its original dimensions.
 *
 * @param source - Path of the file to convert.
 * @param dryRun - When true, reports the result without writing.
 * @returns A conversion record, or `null` when the source is too small to bother with.
 */
const convertRaster = async (source, dryRun) => {
   const { size: sourceBytes } = await stat(source)
   if (sourceBytes < MIN_SOURCE_BYTES) return null

   const buffer = await readFile(source)
   const { encoded, mae, quality } = await encodeWithinBudget(buffer)

   const target = source.replace(/\.png$/i, '.webp')
   if (!dryRun) await writeFile(target, encoded)

   const { width, height } = await sharp(buffer).metadata()
   return {
      source,
      target,
      sourceBytes,
      targetBytes: encoded.length,
      dimensions: `${width}x${height}`,
      mae,
      quality,
   }
}

const dryRun = process.argv.includes('--check')

const pngFiles = (
   await Promise.all(ROOTS.map((root) => collectFiles(root, ['.png'])))
).flat()

const results = [
   await convertHeader(dryRun),
   ...(await Promise.all(pngFiles.map((file) => convertRaster(file, dryRun)))),
].filter(Boolean)

results.sort((a, b) => b.sourceBytes - a.sourceBytes)

let totalBefore = 0
let totalAfter = 0

for (const result of results) {
   totalBefore += result.sourceBytes
   totalAfter += result.targetBytes
   const saved = 1 - result.targetBytes / result.sourceBytes
   const fidelity =
      result.mae === null
         ? 'resized'
         : `MAE ${result.mae.toFixed(2)} @q${result.quality}`
   console.log(
      `${path.basename(result.target).padEnd(28)} ${result.dimensions.padEnd(11)} ` +
         `${formatBytes(result.sourceBytes).padStart(7)} -> ${formatBytes(result.targetBytes).padStart(7)} ` +
         `(-${(saved * 100).toFixed(0)}%)  ${fidelity}`,
   )
}

console.log(
   `\n${results.length} images: ${formatBytes(totalBefore)} -> ${formatBytes(totalAfter)} ` +
      `(-${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)${dryRun ? ' [check only, nothing written]' : ''}`,
)
