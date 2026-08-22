import type { ReactNode } from 'react'

export type CaseStudySectionProps = {
   /** Uppercase gutter label, e.g. `Overview`. Omit to continue a section below a figure. */
   eyebrow?: string
   /** Anchor id used by the contents rail. */
   id?: string
   children: ReactNode
   className?: string
}

/**
 * Section row: a fixed gutter holding the eyebrow, plus a measured body column.
 * Sections without an eyebrow keep the gutter so body copy stays aligned.
 */
export function CaseStudySection({
   eyebrow,
   id,
   children,
   className = '',
}: CaseStudySectionProps) {
   return (
      <section
         id={id}
         className={`flex scroll-mt-24 flex-col gap-4 lg:flex-row lg:gap-0 ${className}`.trim()}
      >
         <div className="flex shrink-0 lg:w-38 lg:justify-end">
            {eyebrow ? (
               <p className="m-0 py-2 pl-2.5 font-ui text-[18px] font-normal uppercase leading-normal text-brand-blue lg:pr-5">
                  {eyebrow}
               </p>
            ) : null}
         </div>

         <div className="flex min-w-0 flex-1 flex-col gap-8 lg:max-w-[39.875rem]">
            {children}
         </div>
      </section>
   )
}

export type CaseStudyHeadingProps = {
   children: ReactNode
   /** Anchor id used by the contents rail. */
   id?: string
}

/** Body-column heading (Figma `Heading 3`). */
export function CaseStudyHeading({ children, id }: CaseStudyHeadingProps) {
   return (
      <h2
         id={id}
         className="m-0 scroll-mt-24 font-body text-[clamp(1.5rem,3vw,1.875rem)] font-normal leading-tight text-base"
      >
         {children}
      </h2>
   )
}

/** Blue-ruled sub-heading (Figma `Subheading 1`), e.g. `Design Outcomes:`. */
export type CaseStudySubHeadingProps = {
   children: ReactNode
   /** `light` matches research insight theme titles. */
   tone?: 'brand' | 'light'
   bold?: boolean
   /** Font size in pixels. Defaults to 20. */
   size?: number
}

export function CaseStudySubHeading({
   children,
   tone = 'brand',
   bold = false,
   size = 20,
}: CaseStudySubHeadingProps) {
   return (
      <div className="flex items-stretch pl-6">
         <div
            className={`w-1 shrink-0 rounded-[37px] ${
               tone === 'light' ? 'bg-light-blue' : 'bg-brand-blue'
            }`}
            aria-hidden={true}
         />
         <p
            style={{ fontSize: size }}
            className={`m-0 pl-2 font-body leading-normal ${
               bold ? 'font-bold' : 'font-semibold'
            } ${tone === 'light' ? 'text-light-blue' : 'text-brand-blue'}`}
         >
            {children}
         </p>
      </div>
   )
}

/** Thin rule separating top-level case-study sections. */
export function CaseStudyDivider() {
   return (
      <hr className="m-0 h-px w-full border-0 bg-[rgb(121_109_98/0.4)]" aria-hidden={true} />
   )
}
