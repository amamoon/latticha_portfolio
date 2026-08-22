import { Link } from 'react-router-dom'
import { TagPill, type TagPillVariant } from '@/components/TagPill'

/** Tag row entry: label plus optional pill colour variant. */
export type ProjectCardTag = {
   label: string
   variant?: TagPillVariant
}

export type ProjectCardProps = {
   slug: string
   title: string
   /** Shown under the title (e.g. client or organisation). */
   client: string
   description: string
   coverSrc: string
   coverAlt: string
   tags: ReadonlyArray<ProjectCardTag>
   className?: string
   /**
    * `compact` uses a narrower max width, shorter cover, and smaller type—intended for
    * stacked list layouts (e.g. home list toggle).
    * `split` places copy on the left and the cover on the right from `md` up (stacked on small screens).
    * `textCell` / `imageCell` render only copy or cover for ruled home grids (pair with the same slug).
    */
   variant?: 'default' | 'compact' | 'split' | 'textCell' | 'imageCell'
}

/**
 * Project teaser card: cover image, typography stack, tag pills, and navigation to the case study route.
 * Pass `variant="compact"` for a narrower, shorter card in list-style layouts.
 * Pass `variant="split"` for text leading and image trailing in a horizontal band.
 */
export function ProjectCard({
   slug,
   title,
   client,
   description,
   coverSrc,
   coverAlt,
   tags,
   className = '',
   variant = 'default',
}: ProjectCardProps) {
   const headingId = `project-card-${slug}-title`
   const compact = variant === 'compact'
   const split = variant === 'split'
   const textCell = variant === 'textCell'
   const imageCell = variant === 'imageCell'

   const titleClass = `font-body font-normal text-balance text-brand-blue ${
      compact ? 'text-[1.0625rem] sm:text-[1.125rem]' : 'text-card-title'
   }`.trim()

   const clientClass = `font-italic font-normal italic leading-snug tracking-wide text-light-blue ${
      compact ? 'text-[13px]' : 'text-[15px]'
   }`.trim()

   const bodyClass = `font-body font-normal text-base/90 ${
      compact ? 'text-sm leading-snug' : 'text-card-body'
   }`.trim()

   const tagRowClass = `flex flex-wrap ${compact ? 'mt-0.5 gap-1.5' : 'mt-1 gap-2'}`.trim()

   const textColumnGap = split ? 'gap-3 md:gap-3.5' : compact ? 'gap-2 pt-3' : 'gap-3 pt-4'

   const textBlock = (
      <div className={`flex flex-col text-left ${textColumnGap}`.trim()}>
         <h3 id={headingId} className={titleClass}>
            {title}
         </h3>
         <p className={clientClass}>{client}</p>
         <p className={bodyClass}>{description}</p>
         <div className={tagRowClass}>
            {tags.map((tag, index) => (
               <TagPill key={`${tag.label}-${index}`} variant={tag.variant}>
                  {tag.label}
               </TagPill>
            ))}
         </div>
      </div>
   )

   const coverBlock = (
      <div
         className={
            split
               ? 'relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-lg bg-white md:aspect-auto md:h-full md:min-h-0 md:w-[42%] md:max-w-[min(22rem,48%)] md:self-stretch lg:w-[40%]'
               : `w-full overflow-hidden rounded-card bg-white shadow-card transition-shadow duration-300 group-hover:shadow-md ${
                    compact ? 'aspect-video max-h-44' : 'aspect-4/3'
                 }`.trim()
         }
      >
         <img
            src={coverSrc}
            alt={coverAlt}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="h-full min-h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] md:min-h-0"
         />
      </div>
   )

   const linkFocus =
      'no-underline outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background'

   if (textCell) {
      return (
         <Link
            to={`/projects/${slug}`}
            className={`group block h-full min-h-0 ${linkFocus} ${className}`.trim()}
         >
            <div className="flex h-full min-h-0 flex-col justify-center gap-3 text-left">
               <h3 id={headingId} className={titleClass}>
                  {title}
               </h3>
               <p className={clientClass}>{client}</p>
               <p className={bodyClass}>{description}</p>
               <div className={tagRowClass}>
                  {tags.map((tag, index) => (
                     <TagPill key={`${tag.label}-${index}`} variant={tag.variant}>
                        {tag.label}
                     </TagPill>
                  ))}
               </div>
            </div>
         </Link>
      )
   }

   if (imageCell) {
      return (
         <Link
            to={`/projects/${slug}`}
            aria-labelledby={headingId}
            className={`group block h-full min-h-0 ${linkFocus} ${className}`.trim()}
         >
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-white">
               <img
                  src={coverSrc}
                  alt={coverAlt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
               />
            </div>
         </Link>
      )
   }

   const linkShell = `group block w-full no-underline outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
      !split && compact ? 'mx-auto max-w-xl lg:max-w-lg' : ''
   } ${className}`.trim()

   if (split) {
      return (
         <Link to={`/projects/${slug}`} aria-labelledby={headingId} className={linkShell}>
            <div className="flex h-full min-h-0 flex-col gap-4 overflow-hidden rounded-card bg-white p-4 shadow-card transition-shadow duration-300 group-hover:shadow-md sm:p-5 md:flex-row md:items-stretch md:gap-6 md:p-6 lg:gap-8">
               <div className="flex min-h-0 min-w-0 flex-1 flex-col md:justify-center md:pr-1 lg:pr-2">
                  {textBlock}
               </div>
               {coverBlock}
            </div>
         </Link>
      )
   }

   return (
      <Link to={`/projects/${slug}`} aria-labelledby={headingId} className={linkShell}>
         {coverBlock}
         {textBlock}
      </Link>
   )
}
