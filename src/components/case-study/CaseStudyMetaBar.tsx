import paperStrip from '@/assets/shared/paper-strip.webp'

/** Label / value pair in the case-study meta strip (client, timeline, team, activities). */
export type CaseStudyMetaItem = {
   label: string
   value: string
}

export type CaseStudyMetaBarProps = {
   items: readonly CaseStudyMetaItem[]
   className?: string
}

/**
 * Torn-paper strip under the title holding project facts. Falls back to two columns on
 * small screens and spreads to one column per item from `md` up.
 */
export function CaseStudyMetaBar({ items, className = '' }: CaseStudyMetaBarProps) {
   return (
      <dl
         className={`grid grid-cols-2 gap-x-6 gap-y-5 bg-cover bg-center px-6 py-6 sm:px-10 md:flex md:items-start md:justify-between md:gap-8 md:px-16 ${className}`.trim()}
         style={{ backgroundImage: `url(${paperStrip})` }}
      >
         {items.map((item) => (
            <div key={item.label} className="flex min-w-0 flex-col">
               <dt className="font-display text-[16px] font-normal leading-[1.8] text-brand-blue">
                  {item.label}
               </dt>
               <dd className="m-0 font-display text-[14px] font-normal leading-[1.4] text-base">
                  {item.value}
               </dd>
            </div>
         ))}
      </dl>
   )
}
