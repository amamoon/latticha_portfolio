export type CaseStudyTitleProps = {
   /** Plain title text, e.g. `Nontre Redesign`. */
   children: string
   className?: string
}

/**
 * Case-study page title. Capitals are set in the display face and everything else in the
 * body face, matching the mixed lettering used in the designs. Acronyms such as `HSBC`
 * therefore render entirely in the display face.
 */
export function CaseStudyTitle({ children, className = '' }: CaseStudyTitleProps) {
   const runs = children.match(/[A-Z]+|[^A-Z]+/g) ?? []

   return (
      <h1
         className={`m-0 font-body text-[clamp(2.25rem,5.5vw,3.25rem)] font-normal leading-none text-brand-blue ${className}`.trim()}
      >
         {runs.map((run, index) =>
            /^[A-Z]+$/.test(run) ? (
               <span key={index} className="font-display">
                  {run}
               </span>
            ) : (
               <span key={index}>{run}</span>
            ),
         )}
      </h1>
   )
}
