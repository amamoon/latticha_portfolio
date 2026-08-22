import type { ReactNode } from 'react'
import {
   CaseStudyMetaBar,
   type CaseStudyMetaItem,
} from '@/components/case-study/CaseStudyMetaBar'
import { CaseStudyNav, type CaseStudyNavItem } from '@/components/case-study/CaseStudyNav'
import { CaseStudyTitle } from '@/components/case-study/CaseStudyTitle'

export type CaseStudyLayoutProps = {
   title: string
   /** Banner artwork shown above the title. Omit to reserve the space with a placeholder. */
   heroSrc?: string
   heroAlt: string
   meta: readonly CaseStudyMetaItem[]
   /** Contents list for the right rail; shown from `xl` up. */
   nav: readonly CaseStudyNavItem[]
   /** Section blocks, typically `CaseStudySection` and `CaseStudyFigure`. */
   children: ReactNode
}

/**
 * Shared shell for project content pages: hero banner, title, meta strip, body column,
 * and a sticky contents rail. The body column carries the design's left indent so section
 * eyebrows sit in their own gutter.
 */
export function CaseStudyLayout({
   title,
   heroSrc,
   heroAlt,
   meta,
   nav,
   children,
}: CaseStudyLayoutProps) {
   return (
      <main className="min-h-dvh bg-background pb-24 pt-6 md:pt-10">
         <div className="mx-auto w-full max-w-340 px-4 md:px-6">
            {heroSrc ? (
               <img
                  src={heroSrc}
                  alt={heroAlt}
                  width={1356}
                  height={578}
                  loading="eager"
                  decoding="async"
                  className="block h-auto w-full rounded-xl object-cover"
               />
            ) : (
               <div className="flex aspect-1356/578 w-full items-center justify-center rounded-xl border-2 border-dashed border-light-blue/60 bg-light-blue/5 p-6">
                  <p className="m-0 max-w-md text-center font-ui text-[13px] font-normal uppercase leading-[1.8] tracking-wide text-light-blue">
                     {heroAlt}
                  </p>
               </div>
            )}

            <CaseStudyTitle className="pt-8 md:pt-10">{title}</CaseStudyTitle>

            <div className="pt-6 md:pt-8 lg:pl-34">
               <CaseStudyMetaBar items={meta} />
            </div>

            <div className="flex items-start gap-10 pt-12 md:pt-16 xl:gap-14">
               <div className="flex min-w-0 flex-1 flex-col gap-12 md:gap-16 lg:pl-34">
                  {children}
               </div>

               <CaseStudyNav
                  items={nav}
                  className="sticky top-10 hidden w-47.75 shrink-0 xl:flex"
               />
            </div>
         </div>
      </main>
   )
}
