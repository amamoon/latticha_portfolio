import type { ReactNode } from 'react'
import arrowDown from '@/assets/shared/arrow-down.svg'
import arrowExternal from '@/assets/shared/arrow-external.svg'
import paperBand from '@/assets/shared/paper-band.webp'
import { RichText, type TextSegment } from '@/components/RichText'

export type QuoteBlockProps = {
   children: ReactNode
   /** Space between the rule and the copy: `tight` for bio lines, `wide` for case-study lists. */
   gap?: 'tight' | 'wide'
   className?: string
}

/**
 * Content block framed by a light-blue rule. Used for quoted findings and outcome lists on
 * case-study pages, and for the highlight lines on the About page.
 */
export function QuoteBlock({
   children,
   gap = 'tight',
   className = '',
}: QuoteBlockProps) {
   return (
      <div className={`flex items-stretch pl-6 ${className}`.trim()}>
         <div
            className="w-1 shrink-0 rounded-[37px] bg-light-blue"
            aria-hidden={true}
         />
         <div
            className={`min-w-0 flex-1 p-2.5 ${gap === 'wide' ? 'pl-6' : ''}`.trimEnd()}
         >
            {children}
         </div>
      </div>
   )
}

export type CaseStudyBodyProps = {
   /** Plain string, or segments when parts of the line need emphasis. */
   children: string | readonly TextSegment[]
}

/** Body paragraph (Figma `Body`): 17px with generous leading. */
export function CaseStudyBody({ children }: CaseStudyBodyProps) {
   return (
      <p className="m-0 font-body text-[17px] font-normal leading-[1.6] text-base">
         {typeof children === 'string' ? (
            children
         ) : (
            <RichText segments={children} />
         )}
      </p>
   )
}

/** Numbered outcome, ordered by document position; `subItems` render as a lettered list. */
export type QuoteListItem = {
   text: string
   subItems?: readonly string[]
}

/**
 * Uppercase numbered list inside a `QuoteBlock`, used for problems and design outcomes.
 */
export function QuoteList({ items }: { items: readonly QuoteListItem[] }) {
   return (
      <QuoteBlock gap="wide">
         <ol className="m-0 flex list-decimal flex-col gap-1 pl-6 font-ui text-[16px] font-medium uppercase leading-[1.8] text-light-blue">
            {items.map((item, index) => (
               <li key={index}>
                  {item.text}
                  {item.subItems?.length ? (
                     <ol className="m-0 flex list-[lower-alpha] flex-col pl-6">
                        {item.subItems.map((subItem, subIndex) => (
                           <li key={subIndex}>{subItem}</li>
                        ))}
                     </ol>
                  ) : null}
               </li>
            ))}
         </ol>
      </QuoteBlock>
   )
}

/**
 * Uppercase bulleted list inside a `QuoteBlock`, used for stakeholder interview findings.
 */
export function QuoteBulletList({ items }: { items: readonly QuoteListItem[] }) {
   return (
      <QuoteBlock gap="wide">
         <ul className="m-0 flex list-disc flex-col gap-1 pl-6 font-ui text-[16px] uppercase leading-[1.8] text-light-blue">
            {items.map((item, index) => (
               <li key={index}>
                  {item.text}
                  {item.subItems?.length ? (
                     <ul className="m-0 flex list-[circle] flex-col pl-6">
                        {item.subItems.map((subItem, subIndex) => (
                           <li key={subIndex}>{subItem}</li>
                        ))}
                     </ul>
                  ) : null}
               </li>
            ))}
         </ul>
      </QuoteBlock>
   )
}

/**
 * Checklist with small outlined squares, used for stakeholder focus areas.
 */
export function CaseStudyCheckList({
   items,
}: {
   items: ReadonlyArray<readonly TextSegment[]>
}) {
   return (
      <ul className="m-0 flex list-none flex-col gap-3 p-0">
         {items.map((segments, index) => (
            <li key={index} className="flex items-start gap-2.5">
               <span
                  className="mt-2 size-3 shrink-0 border-[0.857px] border-light-blue"
                  aria-hidden={true}
               />
               <span className="min-w-0 flex-1 font-body text-[17px] font-normal leading-[1.6] text-base">
                  <RichText segments={segments} />
               </span>
            </li>
         ))}
      </ul>
   )
}

export type CaseStudyPlaceholderProps = {
   /** Describes the artwork still to be exported, shown inside the frame. */
   label: string
   /** CSS aspect ratio for the reserved space, e.g. `'16 / 9'`. */
   ratio?: string
   caption?: string
}

/**
 * Reserved space for artwork that has not been exported yet. Keeps section rhythm and
 * anchor positions realistic while a case study is still being assembled.
 */
export function CaseStudyPlaceholder({
   label,
   ratio = '16 / 9',
   caption,
}: CaseStudyPlaceholderProps) {
   return (
      <figure className="m-0 flex flex-col gap-2">
         <div
            style={{ aspectRatio: ratio }}
            className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-light-blue/60 bg-light-blue/5 p-6"
         >
            <p className="m-0 max-w-md text-center font-ui text-[13px] font-normal uppercase leading-[1.8] tracking-wide text-light-blue">
               {label}
            </p>
         </div>
         {caption ? (
            <figcaption className="font-italic text-[13px] font-normal italic leading-snug tracking-wide text-base/60">
               {caption}
            </figcaption>
         ) : null}
      </figure>
   )
}

export type CaseStudyFigureProps = {
   src: string
   alt: string
   caption?: string
   /** Intrinsic pixel size of the exported artwork, for layout stability. */
   width: number
   height: number
}

/** Full-width artwork inside the body column (mockups, research boards, screenshots). */
export function CaseStudyFigure({
   src,
   alt,
   caption,
   width,
   height,
}: CaseStudyFigureProps) {
   return (
      <figure className="m-0 flex flex-col gap-2">
         <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full rounded-lg object-contain"
         />
         {caption ? (
            <figcaption className="font-italic text-[13px] font-normal italic leading-snug tracking-wide text-base/60">
               {caption}
            </figcaption>
         ) : null}
      </figure>
   )
}

export type CaseStudyPillLinkProps = {
   href: string
   children: string
   /** Opens in a new tab and swaps the arrow for the outbound mark. */
   external?: boolean
}

/**
 * Pill link used both to jump further down the page and to open a supporting document.
 */
export function CaseStudyPillLink({
   href,
   children,
   external = false,
}: CaseStudyPillLinkProps) {
   return (
      <div className="flex justify-center">
         <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={`${caseStudyPillClass} ${
               external ? 'underline decoration-from-font' : 'no-underline'
            }`}
         >
            {children}
            <img
               src={external ? arrowExternal : arrowDown}
               alt=""
               width={external ? 17 : 15}
               height={external ? 25 : 22}
               className={
                  external ? 'h-6.25 w-4.25 shrink-0' : 'h-5.5 w-3.75 shrink-0'
               }
               aria-hidden={true}
            />
         </a>
      </div>
   )
}

const caseStudyPillClass =
   'inline-flex items-center gap-4 rounded-full border-[1.81px] border-light-blue bg-[rgb(190_251_255/0.18)] px-8 py-2 font-display text-[19.67px] leading-[1.8] text-light-blue shadow-[2.413px_2.413px_3.378px_0_rgb(0_0_0/0.18)] transition-colors hover:bg-[rgb(190_251_255/0.32)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue'

/**
 * Pill-shaped disclosure control that expands inline copy or artwork beneath the trigger.
 */
export function CaseStudyExpandable({
   label,
   children,
}: {
   label: string
   children: ReactNode
}) {
   return (
      <details className="group flex flex-col gap-6">
         <summary className="flex cursor-pointer list-none justify-center [&::-webkit-details-marker]:hidden">
            <span className={caseStudyPillClass}>{label}</span>
         </summary>
         <div className="flex flex-col gap-6">{children}</div>
      </details>
   )
}

/** Bulleted list item; `subItems` render as an indented second level. */
export type BulletListItem = {
   segments: readonly TextSegment[]
   subItems?: ReadonlyArray<readonly TextSegment[]>
}

/** Body-copy bullet list with one optional level of nesting. */
export function CaseStudyBulletList({
   items,
}: {
   items: readonly BulletListItem[]
}) {
   return (
      <ul className="m-0 flex list-disc flex-col gap-2 pl-6 font-body text-[17px] font-normal leading-[1.6] text-base">
         {items.map((item, index) => (
            <li key={index}>
               <RichText segments={item.segments} />
               {item.subItems?.length ? (
                  <ul className="m-0 flex list-[circle] flex-col gap-1 pl-6 pt-2">
                     {item.subItems.map((subSegments, subIndex) => (
                        <li key={subIndex}>
                           <RichText segments={subSegments} />
                        </li>
                     ))}
                  </ul>
               ) : null}
            </li>
         ))}
      </ul>
   )
}

/** Single quoted insight inside the light-blue rule. */
export function QuoteText({ children }: { children: string }) {
   return (
      <QuoteBlock gap="wide">
         <p className="m-0 font-ui text-[16px] font-medium uppercase leading-[1.8] text-light-blue">
            {children}
         </p>
      </QuoteBlock>
   )
}

/**
 * Side-by-side competitor screenshot and uppercase insight, used in expanded case-study
 * write-ups. Optional `footnote` sits beneath the quote column (e.g. before/after mockups).
 */
export type CaseStudyInsightRowProps = {
   quote: string
   children: ReactNode
   footnote?: ReactNode
}

export function CaseStudyInsightRow({
   quote,
   children,
   footnote,
}: CaseStudyInsightRowProps) {
   return (
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
         <div className="min-w-0 flex-[1.4]">{children}</div>
         <div className="flex min-w-0 flex-1 flex-col gap-4">
            <QuoteText>{quote}</QuoteText>
            {footnote}
         </div>
      </div>
   )
}

/**
 * Numbered focus-area callout with a light-blue rule, bold title on its own line, and body
 * copy below.
 */
export type CaseStudyCalloutProps = {
   title: string
   children: ReactNode
}

export function CaseStudyCallout({ title, children }: CaseStudyCalloutProps) {
   return (
      <QuoteBlock gap="wide">
         <div className="flex flex-col">
            <p className="m-0 font-body text-[20px] font-bold leading-[1.6] text-light-blue">
               {title}
            </p>
            <p className="m-0 font-body text-[18px] font-normal leading-[1.6] text-light-blue">
               {children}
            </p>
         </div>
      </QuoteBlock>
   )
}

/** One row pairing a research issue with its proposed solution. */
export type IssuesTableRow = {
   issue: string
   solution: string
}

/**
 * Two-column issues/solutions table with display-font headers and italic light-blue
 * solutions, used after heuristic or competitive analysis write-ups.
 */
export function CaseStudyIssuesTable({ rows }: { rows: readonly IssuesTableRow[] }) {
   return (
      <div className="overflow-x-auto rounded-lg border border-[rgb(121_109_98/0.25)]">
         <table className="w-full min-w-[320px] border-collapse">
            <thead>
               <tr className="bg-base text-white">
                  <th
                     scope="col"
                     className="w-1/2 p-3 text-left font-display text-[20px] font-normal leading-normal"
                  >
                     Issues
                  </th>
                  <th
                     scope="col"
                     className="w-1/2 p-3 text-left font-display text-[20px] font-normal leading-normal"
                  >
                     Solutions
                  </th>
               </tr>
            </thead>
            <tbody>
               {rows.map((row, index) => (
                  <tr key={index} className="border-t border-light-blue/40">
                     <td className="p-3 align-top font-body text-[15px] font-normal leading-[1.6] text-base">
                        {row.issue}
                     </td>
                     <td className="p-3 align-top font-italic text-[15px] font-normal italic leading-[1.6] text-light-blue">
                        {row.solution}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

/** Labelled image, e.g. one competitor in a comparison row. */
export type LabelledImage = {
   label: string
   src: string
   alt: string
}

/**
 * Row of labelled logos or screenshots on a paper band, used for competitor comparisons.
 * Stacks to one column on small screens.
 */
export function CaseStudyImageRow({
   items,
}: {
   items: readonly LabelledImage[]
}) {
   return (
      <div className="flex flex-col gap-2">
         <div className="grid grid-cols-1 gap-4 px-5 sm:grid-cols-3 sm:gap-10">
            {items.map((item) => (
               <p
                  key={item.label}
                  className="m-0 whitespace-pre-line text-center font-body text-[16px] font-normal leading-[1.57] text-brand-blue sm:first:text-left"
               >
                  {item.label}
               </p>
            ))}
         </div>

         <div
            className="grid grid-cols-1 items-end gap-5 bg-cover bg-center p-5 sm:grid-cols-3"
            style={{ backgroundImage: `url(${paperBand})` }}
         >
            {items.map((item) => (
               <img
                  key={item.label}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full bg-white object-contain"
               />
            ))}
         </div>
      </div>
   )
}

/** Quick fact shown in a persona card header, e.g. `Age` / `43`. */
export type PersonaFact = {
   label: string
   value: string
}

/** Named paragraph inside a persona card, e.g. `About`, `Goals`, `Frustrations`. */
export type PersonaParagraph = {
   label: string
   text: string
}

export type CaseStudyPersonaProps = {
   name: string
   facts: readonly PersonaFact[]
   paragraphs: readonly PersonaParagraph[]
}

/**
 * Research persona card: name, a row of quick facts, and named paragraphs (About / Goals /
 * Frustrations) summarising a target user surfaced during interviews.
 */
export function CaseStudyPersona({
   name,
   facts,
   paragraphs,
}: CaseStudyPersonaProps) {
   return (
      <div className="flex flex-col gap-6 rounded-lg border border-[rgb(121_109_98/0.25)] bg-white/40 p-6 sm:p-10">
         <div className="flex flex-col gap-3">
            <p className="m-0 font-display text-[clamp(1.75rem,4vw,2.25rem)] leading-[1.8] text-base">
               {name}
            </p>
            <dl className="m-0 grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2">
               {facts.map((fact) => (
                  <div
                     key={fact.label}
                     className="flex gap-1 font-body text-[16px] font-normal leading-[1.57]"
                  >
                     <dt className="text-brand-blue">{fact.label}:</dt>
                     <dd className="m-0 text-base">{fact.value}</dd>
                  </div>
               ))}
            </dl>
         </div>

         <div className="flex flex-col gap-3">
            {paragraphs.map((paragraph) => (
               <p
                  key={paragraph.label}
                  className="m-0 font-body text-[17px] font-normal leading-[1.6] text-base"
               >
                  <span className="font-semibold">{paragraph.label}</span>:{' '}
                  {paragraph.text}
               </p>
            ))}
         </div>
      </div>
   )
}

/** How a customer-journey-map row's cells should read: plain, quoted thought, or opportunity. */
export type JourneyRowVariant = 'default' | 'quote' | 'opportunity'

/** One row of a customer journey map, e.g. `Doing` across every phase column. */
export type JourneyRow = {
   label: string
   cells: readonly string[]
   variant?: JourneyRowVariant
}

export type CaseStudyJourneyMapProps = {
   /** Short scenario framing the journey, e.g. `First time seeing Nontre.co`. */
   scenario: string
   /** Column headers, e.g. `Awareness`, `Searching`, `Consideration`, `Purchase`. */
   phases: readonly string[]
   rows: readonly JourneyRow[]
}

const journeyCellClass: Record<JourneyRowVariant, string> = {
   default: 'text-base',
   quote: 'text-light-blue',
   opportunity:
      'text-base underline decoration-marker decoration-4 underline-offset-2',
}

const journeyHeadingClass =
   'font-display text-[15px] font-normal uppercase leading-[1.8] text-brand-blue underline decoration-from-font'

/**
 * Research customer-journey map: phase columns crossed with rows of touchpoints,
 * behaviour, thoughts, feelings, and opportunities for a given scenario.
 */
export function CaseStudyJourneyMap({
   scenario,
   phases,
   rows,
}: CaseStudyJourneyMapProps) {
   return (
      <div className="flex flex-col gap-6 rounded-lg border border-[rgb(121_109_98/0.25)] bg-white/40 p-6 sm:p-10">
         <p className="m-0 text-center font-display text-[clamp(1.25rem,3vw,1.75rem)] leading-normal text-brand-blue">
            Scenario: {scenario}
         </p>

         <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center">
               <thead>
                  <tr>
                     <th className="w-32 p-2 text-right" aria-hidden={true} />
                     {phases.map((phase) => (
                        <th
                           key={phase}
                           className={`border-l border-[rgb(121_109_98/0.25)] p-2 ${journeyHeadingClass}`}
                        >
                           {phase}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {rows.map((row) => (
                     <tr
                        key={row.label}
                        className="border-t border-[rgb(121_109_98/0.25)]"
                     >
                        <th
                           scope="row"
                           className={`whitespace-nowrap p-2 text-right ${journeyHeadingClass}`}
                        >
                           {row.label}
                        </th>
                        {row.cells.map((cell, index) => (
                           <td
                              key={index}
                              className={`border-l border-[rgb(121_109_98/0.25)] p-2 font-body text-[15px] font-normal leading-[1.6] ${
                                 journeyCellClass[row.variant ?? 'default']
                              }`}
                           >
                              {cell}
                           </td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   )
}

/** Research theme summary card: a numbered title plus a short description. */
export type ThemeCard = {
   number: number
   title: string
   body: string
}

/**
 * Grid of the research themes surfaced from interviews (title + short summary), on the
 * same paper-band texture used for competitor comparisons.
 */
export function CaseStudyThemeGrid({ items }: { items: readonly ThemeCard[] }) {
   return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
         {items.map((item) => (
            <div
               key={item.number}
               className="flex flex-col gap-2 rounded-lg bg-cover bg-center p-5"
               style={{ backgroundImage: `url(${paperBand})` }}
            >
               <p className="m-0 font-ui text-[13px] font-medium uppercase leading-normal tracking-wide text-light-blue/70">
                  Theme {item.number}
               </p>
               <p className="m-0 font-body text-[18px] font-semibold leading-normal text-light-blue">
                  {item.title}
               </p>
               <p className="m-0 font-body text-[16px] font-normal leading-[1.6] text-base-dark">
                  {item.body}
               </p>
            </div>
         ))}
      </div>
   )
}

/** Elaborated write-up of one research theme: an index, its label, and a titled paragraph. */
export type NumberedInsight = {
   number: number
   eyebrow: string
   title: string
   body: string
}

/**
 * Numbered elaboration of each research theme: a large index and theme label beside a
 * paragraph that opens with a bold design-implication title.
 */
export function CaseStudyInsightList({
   items,
}: {
   items: readonly NumberedInsight[]
}) {
   return (
      <div className="flex flex-col gap-8">
         {items.map((item) => (
            <div
               key={item.number}
               className="flex flex-col gap-2 sm:flex-row sm:gap-8"
            >
               <div className="flex shrink-0 items-baseline gap-3 sm:w-40 sm:flex-col sm:items-start sm:gap-1">
                  <p className="m-0 font-display text-[28px] leading-none text-light-blue/60">
                     {item.number}
                  </p>
                  <p className="m-0 font-body text-[16px] font-normal leading-tight text-light-blue">
                     {item.eyebrow}
                  </p>
               </div>
               <p className="m-0 min-w-0 flex-1 font-body text-[17px] font-normal leading-[1.6] text-base">
                  <span className="font-semibold">{item.title}</span>{' '}
                  {item.body}
               </p>
            </div>
         ))}
      </div>
   )
}
