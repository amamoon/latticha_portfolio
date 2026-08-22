import { useActiveSection } from '@/components/case-study/useActiveSection'

/** Entry in the case-study section nav; `children` renders as an indented sub-list. */
export type CaseStudyNavItem = {
   /** Target element id on the page (without `#`). */
   id: string
   label: string
   children?: readonly CaseStudyNavItem[]
}

export type CaseStudyNavProps = {
   items: readonly CaseStudyNavItem[]
   className?: string
}

/** Flattens nav items to a document-order list of ids for scroll tracking. */
function flattenIds(items: readonly CaseStudyNavItem[]): string[] {
   return items.flatMap((item) => [item.id, ...flattenIds(item.children ?? [])])
}

const linkClass =
   'block font-italic text-[16px] font-normal italic leading-[1.18] tracking-[-0.176px] no-underline transition-colors'

/**
 * Right-rail contents list. Highlights the section nearest the top of the viewport and
 * scrolls to a section on click.
 */
export function CaseStudyNav({ items, className = '' }: CaseStudyNavProps) {
   const ids = flattenIds(items)
   const activeId = useActiveSection(ids)

   return (
      <nav
         aria-label="On this page"
         className={`flex flex-col gap-[9px] ${className}`.trim()}
      >
         {items.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
               <a
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  className={`${linkClass} ${
                     activeId === item.id ? 'text-brand-blue' : 'text-base hover:text-brand-blue'
                  }`}
               >
                  {item.label}
               </a>

               {item.children?.length ? (
                  <div className="flex flex-col gap-2 pl-[22.5px]">
                     {item.children.map((child) => (
                        <a
                           key={child.id}
                           href={`#${child.id}`}
                           aria-current={activeId === child.id ? 'true' : undefined}
                           className={`${linkClass} ${
                              activeId === child.id
                                 ? 'text-brand-blue'
                                 : 'text-base/50 hover:text-brand-blue'
                           }`}
                        >
                           {child.label}
                        </a>
                     ))}
                  </div>
               ) : null}
            </div>
         ))}
      </nav>
   )
}
