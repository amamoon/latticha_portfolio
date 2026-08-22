/** Layout mode driven by the grid / list toggle. */
export type SectionLayoutMode = 'grid' | 'list'

export type SectionHeaderProps = {
   /** Section title shown on the right (e.g. “Selected work”). */
   label: string
   /** Current layout; paired with `onLayoutChange` for controlled usage. */
   layout: SectionLayoutMode
   onLayoutChange: (layout: SectionLayoutMode) => void
   className?: string
}

/**
 * Sticky section chrome: light bar, right-aligned label, grid/list toggle, and a thin
 * bottom rule. (Repeating column guides are omitted here—they read as noise in a short
 * bar; use `SectionColumnGuideBackdrop` on a wider layout when you want blueprint lines.)
 */
export function SectionHeader({
   label,
   layout,
   onLayoutChange,
   className = '',
}: SectionHeaderProps) {
   return (
      <header className={`sticky top-0 z-50 w-full ${className}`.trim()}>
         <div className="relative overflow-hidden bg-background/95 shadow-[0_1px_0_rgb(0_0_0/0.04)] backdrop-blur-sm">
            <div className="relative z-1 flex items-center justify-end gap-4 px-4 py-3 md:gap-5 md:px-6">
               <span className="font-display text-nav font-normal tracking-wide text-base/72">
                  {label}
               </span>
               <LayoutToggle layout={layout} onLayoutChange={onLayoutChange} />
            </div>
            <div
               className="relative z-1 h-px w-full bg-[rgb(121_109_98/0.22)]"
               aria-hidden={true}
            />
         </div>
      </header>
   )
}

/**
 * Repeating vertical column guides (52px rhythm). Use behind section chrome or grids
 * so stripes stay aligned when the parent shares the same width and horizontal padding.
 */
export function SectionColumnGuideBackdrop({ className = '' }: { className?: string }) {
   return (
      <div
         className={`pointer-events-none bg-[repeating-linear-gradient(90deg,transparent_0,transparent_3.25rem,rgb(121_109_98/0.11)_3.25rem,rgb(121_109_98/0.11)_calc(3.25rem+1px))] ${className}`.trim()}
         aria-hidden={true}
      />
   )
}

/** Grid / list control; exported for section layouts that embed the toggle (e.g. ruled grid). */
export function LayoutToggle({
   layout,
   onLayoutChange,
}: Pick<SectionHeaderProps, 'layout' | 'onLayoutChange'>) {
   const baseBtn =
      'inline-flex h-9 w-9 items-center justify-center rounded-md border border-transparent text-[#796d62] transition-colors hover:bg-[rgb(121_109_98/0.08)] hover:text-[#796d62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background'

   const active =
      'border-[rgb(121_109_98/0.22)] bg-[rgb(121_109_98/0.06)] text-[#5c534a]'

   return (
      <div
         className="inline-flex items-center gap-0.5 rounded-lg border border-[rgb(121_109_98/0.15)] bg-[rgb(250_250_247/0.65)] p-0.5"
         role="group"
         aria-label="Result layout"
      >
         <button
            type="button"
            aria-pressed={layout === 'grid'}
            aria-label="Grid layout"
            className={`${baseBtn} ${layout === 'grid' ? active : ''}`.trim()}
            onClick={() => onLayoutChange('grid')}
         >
            <GridIcon className="size-[1.1rem]" />
         </button>
         <button
            type="button"
            aria-pressed={layout === 'list'}
            aria-label="List layout"
            className={`${baseBtn} ${layout === 'list' ? active : ''}`.trim()}
            onClick={() => onLayoutChange('list')}
         >
            <ListIcon className="size-[1.1rem]" />
         </button>
      </div>
   )
}

function GridIcon({ className }: { className?: string }) {
   return (
      <svg
         className={className}
         viewBox="0 0 20 20"
         fill="currentColor"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden={true}
      >
         <path d="M3 3h6v6H3V3zm8 0h6v6h-6V3zM3 11h6v6H3v-6zm8 0h6v6h-6v-6z" />
      </svg>
   )
}

function ListIcon({ className }: { className?: string }) {
   return (
      <svg
         className={className}
         viewBox="0 0 20 20"
         fill="currentColor"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden={true}
      >
         <path d="M4 5.25h12v1.5H4v-1.5zm0 4h12v1.5H4v-1.5zm0 4h12v1.5H4v-1.5z" />
      </svg>
   )
}
