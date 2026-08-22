import { Fragment, useMemo, useState } from 'react'
import headerSrc from '@/assets/homepage/header.svg'
import heroCover from '@/assets/hero.png'
import { ProjectCard, type ProjectCardProps } from '@/components/ProjectCard'
import { LayoutToggle, SectionHeader, type SectionLayoutMode } from '@/components/SectionHeader'
import {
   getProjectsByProjectsNav,
   type Project,
} from '@/data/projects'

/** Internal table strokes (cells share `border-r` / `border-b`). */
const WORK_GRID_LINE = 'border-[rgb(121_109_98/0.4)]'

/**
 * Pads a project list to `slotCount` slots (multiple of row width); empty slots render
 * as bordered placeholders in the grid.
 */
function padProjectsToSlotCount(
   projects: readonly Project[],
   slotCount: number,
): (Project | undefined)[] {
   const out: (Project | undefined)[] = projects.slice() as Project[]
   while (out.length < slotCount) out.push(undefined)
   return out.slice(0, slotCount)
}

/**
 * Subtitle line for `ProjectCard` from catalog fields until a dedicated client exists.
 */
function projectCardClient(p: Project): string {
   const parts = [p.year, p.tags?.[0]].filter(Boolean) as string[]
   return parts.join(' · ') || 'Case study'
}

type WorkSectionGridProps = {
   /** Lowercase heading with period, e.g. `ux design.` */
   heading: string
   /**
    * Padded slots (`cardColumns` per row, up to two card rows), unless `splitProjectCells` is
    * set—then each entry is one project row (copy cell + image cell).
    */
   slots: readonly (Project | undefined)[]
   /** Data columns in the card area (UX 3; project design 2; branding split cells uses 2). */
   cardColumns: 1 | 2 | 3
   /** When true, header row includes spacer + layout toggle; otherwise one wide empty cell. */
   showLayoutToggle: boolean
   /** Each project spans two ruled cells (text | image); `cardVariant` is ignored. */
   splitProjectCells?: boolean
   cardVariant?: ProjectCardProps['variant']
   layout: SectionLayoutMode
   onLayoutChange: (mode: SectionLayoutMode) => void
}

/**
 * Ruled grid: label column, header row, and up to two rows of `cardColumns` cards.
 */
function WorkSectionGrid({
   heading,
   slots,
   cardColumns,
   showLayoutToggle,
   splitProjectCells = false,
   cardVariant = 'default',
   layout,
   onLayoutChange,
}: WorkSectionGridProps) {
   const line = WORK_GRID_LINE

   if (splitProjectCells) {
      const gridColsLg =
         'lg:grid-cols-[minmax(5.75rem,9rem)_repeat(2,minmax(0,1fr))]'

      return (
         <div
            className={`mt-4 grid grid-cols-1 sm:mt-6 ${gridColsLg}`}
         >
            <div
               className={`border-r ${line} p-4 sm:p-5 max-lg:border-r-0 lg:border-b lg:flex lg:items-center lg:px-3 lg:py-2`}
            >
               <h2 className="font-display text-[clamp(1.35rem,3vw,1.75rem)] font-normal lowercase leading-[1.08] tracking-[0.03em] text-base/50 lg:text-[clamp(1.05rem,2.2vw,1.35rem)] lg:leading-tight">
                  {heading}
               </h2>
            </div>

            {showLayoutToggle ? (
               <>
                  <div
                     className={`hidden border-r border-b ${line} lg:col-span-1 lg:block lg:min-h-12`}
                     aria-hidden={true}
                  />
                  <div
                     className={`flex items-center justify-end border-r border-b ${line} p-3 sm:p-4 max-lg:border-r-0 lg:min-h-12 lg:border-r-0 lg:px-3 lg:py-2`}
                  >
                     <LayoutToggle layout={layout} onLayoutChange={onLayoutChange} />
                  </div>
               </>
            ) : (
               <div
                  className={`hidden border-r border-b ${line} lg:col-span-2 lg:block lg:min-h-12`}
                  aria-hidden={true}
               />
            )}

            {slots.map((p, rowIdx) => (
               <Fragment key={p?.id ?? `branding-row-${rowIdx}`}>
                  <div
                     className={`hidden border-r border-b ${line} lg:block`}
                     aria-hidden={true}
                  />
                  <div
                     className={`border-r border-b ${line} p-4 sm:p-5 max-lg:border-r-0 lg:p-6`}
                  >
                     {p ? (
                        <ProjectCard
                           slug={p.slug}
                           title={p.title}
                           client={projectCardClient(p)}
                           description={p.summary}
                           coverSrc={p.coverSrc ?? heroCover}
                           coverAlt={p.coverAlt ?? `${p.title} — preview`}
                           tags={(p.tags ?? []).map((label) => ({ label }))}
                           variant="textCell"
                           className="h-full min-h-0"
                        />
                     ) : (
                        <div className="min-h-48" aria-hidden={true} />
                     )}
                  </div>
                  <div
                     className={`border-r border-b ${line} p-4 sm:p-5 max-lg:border-r-0 lg:border-r-0 lg:p-6`}
                  >
                     {p ? (
                        <ProjectCard
                           slug={p.slug}
                           title={p.title}
                           client={projectCardClient(p)}
                           description={p.summary}
                           coverSrc={p.coverSrc ?? heroCover}
                           coverAlt={p.coverAlt ?? `${p.title} — preview`}
                           tags={(p.tags ?? []).map((label) => ({ label }))}
                           variant="imageCell"
                           className="h-full min-h-0"
                        />
                     ) : (
                        <div className="min-h-48" aria-hidden={true} />
                     )}
                  </div>
               </Fragment>
            ))}
         </div>
      )
   }

   const firstRow = slots.slice(0, cardColumns)
   const secondRow = slots.slice(cardColumns, cardColumns * 2)
   const hasSecondCardRow = secondRow.some((p) => p !== undefined)
   const lastColIdx = cardColumns - 1

   const spacerSpanClass =
      cardColumns === 3 ? 'lg:col-span-2' : 'lg:col-span-1'
   const emptyHeaderSpanClass =
      cardColumns === 1
         ? 'lg:col-span-1'
         : cardColumns === 2
           ? 'lg:col-span-2'
           : 'lg:col-span-3'
   const gridColsLg =
      cardColumns === 1
         ? 'lg:grid-cols-[minmax(5.75rem,9rem)_minmax(0,1fr)]'
         : cardColumns === 2
           ? 'lg:grid-cols-[minmax(5.75rem,9rem)_repeat(2,minmax(0,1fr))]'
           : 'lg:grid-cols-[minmax(5.75rem,9rem)_repeat(3,minmax(0,1fr))]'

   return (
      <div
         className={`mt-4 grid grid-cols-1 sm:mt-6 ${gridColsLg}`}
      >
         <div
            className={`border-r ${line} p-4 sm:p-5 max-lg:border-r-0 lg:border-b lg:flex lg:items-center lg:px-3 lg:py-2`}
         >
            <h2 className="font-display text-[clamp(1.35rem,3vw,1.75rem)] font-normal lowercase leading-[1.08] tracking-[0.03em] text-base/50 lg:text-[clamp(1.05rem,2.2vw,1.35rem)] lg:leading-tight">
               {heading}
            </h2>
         </div>

         {showLayoutToggle ? (
            <>
               <div
                  className={`hidden border-r border-b ${line} ${spacerSpanClass} lg:block lg:min-h-12`}
                  aria-hidden={true}
               />
               <div
                  className={`flex items-center justify-end border-r border-b ${line} p-3 sm:p-4 max-lg:border-r-0 lg:min-h-12 lg:border-r-0 lg:px-3 lg:py-2`}
               >
                  <LayoutToggle layout={layout} onLayoutChange={onLayoutChange} />
               </div>
            </>
         ) : (
            <div
               className={`hidden border-r border-b ${line} ${emptyHeaderSpanClass} lg:block lg:min-h-12`}
               aria-hidden={true}
            />
         )}

         <div className={`hidden border-r border-b ${line} lg:block`} aria-hidden={true} />

         {firstRow.map((p, i) => (
            <div
               key={p?.id ?? `row2-empty-${i}`}
               className={`border-r border-b ${line} p-4 sm:p-5 max-lg:border-r-0 lg:p-6 ${i === lastColIdx ? 'lg:border-r-0' : ''}`.trim()}
            >
               {p ? (
                  <ProjectCard
                     slug={p.slug}
                     title={p.title}
                     client={projectCardClient(p)}
                     description={p.summary}
                     coverSrc={p.coverSrc ?? heroCover}
                     coverAlt={p.coverAlt ?? `${p.title} — preview`}
                     tags={(p.tags ?? []).map((label) => ({ label }))}
                     variant={cardVariant}
                     className="h-full min-h-0"
                  />
               ) : (
                  <div className="min-h-48" aria-hidden={true} />
               )}
            </div>
         ))}

         {hasSecondCardRow ? (
            <>
               <div className={`hidden border-r border-b ${line} lg:block`} aria-hidden={true} />

               {secondRow.map((p, i) => (
                  <div
                     key={p?.id ?? `row3-empty-${i}`}
                     className={`border-r border-b ${line} p-4 sm:p-5 max-lg:border-r-0 lg:p-6 ${i === lastColIdx ? 'lg:border-r-0' : ''}`.trim()}
                  >
                     {p ? (
                        <ProjectCard
                           slug={p.slug}
                           title={p.title}
                           client={projectCardClient(p)}
                           description={p.summary}
                           coverSrc={p.coverSrc ?? heroCover}
                           coverAlt={p.coverAlt ?? `${p.title} — preview`}
                           tags={(p.tags ?? []).map((label) => ({ label }))}
                           variant={cardVariant}
                           className="h-full min-h-0"
                        />
                     ) : (
                        <div className="min-h-48" aria-hidden={true} />
                     )}
                  </div>
               ))}
            </>
         ) : null}
      </div>
   )
}

/**
 * Home shell: hero header art (logo lives in `SideNav`), then UX, project design, and branding tables.
 */
export default function Home() {
   const [layout, setLayout] = useState<SectionLayoutMode>('grid')

   const uxProjects = useMemo(() => getProjectsByProjectsNav('ux-design'), [])
   const projectDesignProjects = useMemo(
      () => getProjectsByProjectsNav('project-design'),
      [],
   )
   const brandingProjects = useMemo(() => getProjectsByProjectsNav('branding'), [])

   const uxSlots = useMemo(() => padProjectsToSlotCount(uxProjects, 6), [uxProjects])
   const projectDesignSlots = useMemo(
      () => padProjectsToSlotCount(projectDesignProjects, 4),
      [projectDesignProjects],
   )
   /** Up to two branding rows on the home grid (each row = text cell + image cell). */
   const brandingSplitRows = useMemo(() => brandingProjects.slice(0, 2), [brandingProjects])

   return (
      <main className="min-h-dvh bg-background">
         <header className="flex justify-center px-6 pt-2 md:px-8 md:pt-4">
            <img
               src={headerSrc}
               alt=""
               width={1251}
               height={537}
               loading="eager"
               decoding="async"
               className="h-auto max-h-[min(50vh,400px)] w-auto max-w-full object-contain"
            />
         </header>

         <section aria-label="UX Design" className="px-4 pb-0 pt-2 md:px-6">
            {layout === 'grid' ? (
               <WorkSectionGrid
                  heading="ux design."
                  slots={uxSlots}
                  cardColumns={3}
                  showLayoutToggle={true}
                  layout={layout}
                  onLayoutChange={setLayout}
               />
            ) : (
               <>
                  <SectionHeader
                     label="ux design."
                     layout={layout}
                     onLayoutChange={setLayout}
                  />
                  <div className="relative z-1 mx-auto flex w-full max-w-2xl flex-col gap-5 pt-6">
                     {uxProjects.map((p) => (
                        <ProjectCard
                           key={p.id}
                           variant="compact"
                           slug={p.slug}
                           title={p.title}
                           client={projectCardClient(p)}
                           description={p.summary}
                           coverSrc={p.coverSrc ?? heroCover}
                           coverAlt={p.coverAlt ?? `${p.title} — preview`}
                           tags={(p.tags ?? []).map((label) => ({ label }))}
                        />
                     ))}
                  </div>
               </>
            )}
         </section>

         <section aria-label="Project design" className="px-4 pb-0 pt-10 md:px-6 md:pt-12">
            {layout === 'grid' ? (
               <WorkSectionGrid
                  heading="project design."
                  slots={projectDesignSlots}
                  cardColumns={2}
                  showLayoutToggle={false}
                  layout={layout}
                  onLayoutChange={setLayout}
               />
            ) : (
               <>
                  <SectionHeader
                     label="project design."
                     layout={layout}
                     onLayoutChange={setLayout}
                  />
                  <div className="relative z-1 mx-auto flex w-full max-w-2xl flex-col gap-5 pt-6">
                     {projectDesignProjects.map((p) => (
                        <ProjectCard
                           key={p.id}
                           variant="compact"
                           slug={p.slug}
                           title={p.title}
                           client={projectCardClient(p)}
                           description={p.summary}
                           coverSrc={p.coverSrc ?? heroCover}
                           coverAlt={p.coverAlt ?? `${p.title} — preview`}
                           tags={(p.tags ?? []).map((label) => ({ label }))}
                        />
                     ))}
                  </div>
               </>
            )}
         </section>

         <section aria-label="Branding" className="px-4 pb-12 pt-10 md:px-6 md:pt-12">
            {layout === 'grid' ? (
               <WorkSectionGrid
                  heading="branding."
                  slots={brandingSplitRows}
                  cardColumns={2}
                  showLayoutToggle={false}
                  splitProjectCells={true}
                  layout={layout}
                  onLayoutChange={setLayout}
               />
            ) : (
               <>
                  <SectionHeader
                     label="branding."
                     layout={layout}
                     onLayoutChange={setLayout}
                  />
                  <div className="relative z-1 mx-auto flex w-full max-w-3xl flex-col gap-5 pt-6">
                     {brandingProjects.map((p) => (
                        <ProjectCard
                           key={p.id}
                           variant="split"
                           slug={p.slug}
                           title={p.title}
                           client={projectCardClient(p)}
                           description={p.summary}
                           coverSrc={p.coverSrc ?? heroCover}
                           coverAlt={p.coverAlt ?? `${p.title} — preview`}
                           tags={(p.tags ?? []).map((label) => ({ label }))}
                        />
                     ))}
                  </div>
               </>
            )}
         </section>
      </main>
   )
}
