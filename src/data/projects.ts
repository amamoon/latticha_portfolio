import glitchWebsiteCover from '@/assets/homepage/ux_design/glitchstore.webp'
import hsbcDeceasedEstateCover from '@/assets/homepage/ux_design/hsbcdeceased.png'
import glitchShowHomepageCover from '@/assets/homepage/ux_design/merchhomepage.webp'
import nontreRedesignCover from '@/assets/homepage/ux_design/nontre.webp'
import taidoWebsiteCover from '@/assets/homepage/ux_design/taidowebsite.webp'
import rspcaEdmEnhancementCover from '@/assets/homepage/ux_design/rspca.webp'
import brandingBibleCover from '@/assets/homepage/brandingbiblecover.webp'
import glitchMerchandiseCover from '@/assets/homepage/proj_design/glitchmerchandise.webp'
import kogCover from '@/assets/homepage/proj_design/kogbook.webp'

/**
 * Image asset referenced from a project section.
 */
export type ProjectImage = {
   /** Public URL or Vite-resolved module path. */
   src: string
   alt: string
   caption?: string
}

/**
 * A single block of content on a project detail or case-study page.
 * Use `kind` to narrow the union when rendering.
 */
export type ProjectContentBlock =
   | {
        kind: 'lede'
        /** Short opening copy under the title. */
        body: string
     }
   | {
        kind: 'rich-text'
        /** Plain text or HTML; render strategy lives in the UI layer. */
        body: string
     }
   | {
        kind: 'media-row'
        images: ProjectImage[]
     }
   | {
        kind: 'pull-quote'
        quote: string
        attribution?: string
     }
   | {
        kind: 'key-facts'
        /** Label/value rows (role, year, stack, client, etc.). */
        facts: ReadonlyArray<{ label: string; value: string }>
     }
   | {
        kind: 'links'
        links: ReadonlyArray<{
           label: string
           href: string
           /** When true, use `rel="noopener noreferrer"` and `target="_blank"`. */
           external?: boolean
        }>
     }

/**
 * Site grouping for listings and filters (matches primary nav areas).
 */
export type ProjectSection = 'projects' | 'personal-work'

/**
 * Sub-listing under Projects in the primary nav (`/projects/ux-design`, etc.).
 */
export type ProjectsNavKey =
   | 'ux-design'
   | 'project-design'
   | 'merchandise-design'
   | 'branding'

/**
 * Portfolio project shown in listings and optional detail routes.
 */
export type Project = {
   /** Stable identifier for keys and analytics. */
   id: string
   /** URL segment, e.g. `/projects/:slug`. */
   slug: string
   title: string
   tagline?: string
   summary: string
   /** Nav / catalog section used by `getProjectsBySection`. */
   section: ProjectSection
   /** When set, project appears in that Projects sub-nav listing (e.g. home UX grid). */
   projectsNav?: ProjectsNavKey
   /** Sort order in grids (ascending). */
   order?: number
   coverSrc?: string
   coverAlt?: string
   year?: string
   tags?: string[]
   /** Case-study body; omit for teaser-only cards. */
   sections?: ProjectContentBlock[]
}

/**
 * All portfolio projects in display order (`order` ascending).
 */
export const projects: readonly Project[] = [
   {
      id: 'proj-glitch-website',
      slug: 'glitch-website',
      title: 'Glitch Website',
      section: 'projects',
      projectsNav: 'ux-design',
      coverSrc: glitchWebsiteCover,
      coverAlt: 'Glitch Website',
      order: 1,
      summary:
         'End-to-end commerce experience refresh: IA, UI system, and rollout for the flagship retail channel.',
      year: '2024',
      tags: ['Retail', 'UX'],
   },
   {
      id: 'proj-hsbc-deceased-estate',
      slug: 'hsbc-deceased-estate',
      title: 'HSBC Deceased Estate',
      section: 'projects',
      projectsNav: 'ux-design',
      coverSrc: hsbcDeceasedEstateCover,
      coverAlt: 'HSBC Deceased Estate',
      order: 2,
      summary:
         'Sensitive journeys simplified—forms, eligibility, and comms design for bereavement services.',
      year: '2023',
      tags: ['Finance', 'Service design'],
   },
   {
      id: 'proj-glitch-show-homepage',
      slug: 'glitch-show-homepage',
      title: 'Glitch Show Homepage',
      section: 'projects',
      projectsNav: 'ux-design',
      coverSrc: glitchShowHomepageCover,
      coverAlt: 'Glitch Show Homepage',
      order: 3,
      summary:
         'Campaign-led landing system for drops, bundles, and artist collaborations with modular blocks.',
      year: '2024',
      tags: ['E-commerce', 'Brand'],
   },
   {
      id: 'proj-nontre-redesign',
      slug: 'nontre-redesign',
      title: 'Nontre Redesign',
      section: 'projects',
      projectsNav: 'ux-design',
      coverSrc: nontreRedesignCover,
      coverAlt: 'Nontre Redesign',
      order: 4,
      summary:
         'Natural home-care brand repositioning: packaging, digital storefront, and sustainability story.',
      year: '2023',
      tags: ['CPG', 'Web'],
   },
   {
      id: 'proj-taido-website',
      slug: 'taido-website',
      title: 'Taido Website',
      section: 'projects',
      projectsNav: 'ux-design',
      coverSrc: taidoWebsiteCover,
      coverAlt: 'Taido Website',
      order: 5,
      summary:
         'Product storytelling and conversion paths for a martial-arts inspired fitness platform.',
      year: '2024',
      tags: ['Fitness', 'Marketing site'],
   },
   {
      id: 'proj-rspca-edm-enhancement',
      slug: 'rspca-edm-enhancement',
      title: 'RSPCA EDM Enhancement',
      section: 'projects',
      projectsNav: 'ux-design',
      coverSrc: rspcaEdmEnhancementCover,
      coverAlt: 'RSPCA EDM Enhancement',
      order: 6,
      summary:
         'Lifecycle email redesign: modular templates, accessibility, and donor segmentation.',
      year: '2023',
      tags: ['Non-profit', 'CRM'],
   },
   {
      id: 'proj-glitch-merchandise',
      slug: 'glitch-merchandise',
      title: 'Glitch Merchandise',
      coverSrc: glitchMerchandiseCover,
      coverAlt: 'Glitch Merchandise',
      section: 'projects',
      projectsNav: 'project-design',
      order: 7,
      summary:
         'Limited-run apparel and accessories with glitch-forward art direction and production specs.',
      year: '2024',
      tags: ['Merch', 'Print'],
   },
   {
      id: 'proj-knights-of-guinevere-artbook',
      slug: 'knights-of-guinevere-artbook',
      title: 'Knights of Guinevere Artbook',
      section: 'personal-work',
      projectsNav: 'project-design',
      coverSrc: kogCover,
      coverAlt: 'Knights of Guinevere Artbook',
      order: 8,
      summary:
         'Editorial layout, chapter rhythm, and print finishing notes for an illustrated companion volume.',
      year: '2022',
      tags: ['Editorial', 'Print'],
   },
   {
      id: 'proj-branding-bible',
      slug: 'branding-bible',
      title: 'Branding Bible',
      section: 'personal-work',
      projectsNav: 'branding',
      coverSrc: brandingBibleCover,
      coverAlt: 'Branding Bible',
      order: 9,
      summary:
         'Single-source brand manual: voice, colour, typography, and component usage for a creative studio.',
      year: '2023',
      tags: ['Brand', 'Documentation'],
   },
]

/**
 * Returns projects belonging to a site section, sorted by `order` then title.
 *
 * @param section - `'projects'` or `'personal-work'`.
 */
export function getProjectsBySection(section: ProjectSection): Project[] {
   return projects
      .filter((p) => p.section === section)
      .slice()
      .sort((a, b) => {
         const ao = a.order ?? Number.MAX_SAFE_INTEGER
         const bo = b.order ?? Number.MAX_SAFE_INTEGER
         if (ao !== bo) return ao - bo
         return a.title.localeCompare(b.title)
      })
}

/**
 * Returns projects tagged for a Projects sub-nav area, sorted by `order` then title.
 *
 * @param nav - Sub-nav key (e.g. `'ux-design'`).
 */
export function getProjectsByProjectsNav(nav: ProjectsNavKey): Project[] {
   return projects
      .filter((p) => p.projectsNav === nav)
      .slice()
      .sort((a, b) => {
         const ao = a.order ?? Number.MAX_SAFE_INTEGER
         const bo = b.order ?? Number.MAX_SAFE_INTEGER
         if (ao !== bo) return ao - bo
         return a.title.localeCompare(b.title)
      })
}
