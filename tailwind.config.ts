import type { Config } from 'tailwindcss'

/**
 * Tailwind v4 loads design tokens from `@theme` in `src/index.css`.
 * This file keeps the content globs used to scan class names in markup.
 */
const config: Config = {
   content: ['./index.html', './src/**/*.{ts,tsx}'],
}

export default config
