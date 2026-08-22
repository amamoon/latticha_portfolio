# Latticha Portfolio

A portfolio site built with React, TypeScript, Vite, and Tailwind CSS. The site
is fully static: it has no backend, no API calls, and no environment variables.

## Requirements

- Node.js 22 (see `.nvmrc`)
- npm

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

| Script                          | Purpose                                               |
| ------------------------------- | ----------------------------------------------------- |
| `npm run dev`                   | Starts the Vite dev server with hot module reloading. |
| `npm run build`                 | Type-checks the project and builds to `dist/`.        |
| `npm run preview`               | Serves the production build locally.                  |
| `npm run lint`                  | Runs ESLint and checks formatting.                    |
| `npm run format`                | Rewrites files with Prettier.                         |
| `npm run optimize:images`       | Re-encodes source images to WebP.                     |
| `npm run optimize:images:check` | Reports image savings without writing files.          |

## Images

Source images live in `src/assets` as PNG or SVG masters.
`npm run optimize:images` re-encodes them to WebP next to the original, and
components import the `.webp` file. Vite bundles only imported files, so the
masters stay in the repository without being served.

The script raises encoder quality per image until the measured difference from
the master falls below the threshold of visibility, so grainy sources keep their
texture instead of being smoothed away. Run it after you add an image, then
update the import to point at the generated `.webp`.

## Deployment

The site deploys to Cloudflare Pages as a static build.

### Build settings

| Setting          | Value           |
| ---------------- | --------------- |
| Framework preset | None            |
| Build command    | `npm run build` |
| Output directory | `dist`          |

Cloudflare reads the Node version from `.nvmrc`.

### Client-side routing

The app uses `BrowserRouter`, so the host must serve `index.html` for paths that
do not match a file. Without this, loading or refreshing a case study URL such
as `/projects/nontre-redesign` returns a 404.

`public/_redirects` handles this. Vite copies the file to the root of `dist`
during the build, and Cloudflare applies it automatically:

```
/*    /index.html    200
```
