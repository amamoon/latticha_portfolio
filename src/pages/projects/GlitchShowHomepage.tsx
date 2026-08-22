import welcomeHomeHomepage from '@/assets/homepage/ux_design/merchhomepage.webp'
import {
   CaseStudyBody,
   CaseStudyFigure,
   CaseStudyPillLink,
   CaseStudyPlaceholder,
} from '@/components/case-study/CaseStudyBlocks'
import { CaseStudyLayout } from '@/components/case-study/CaseStudyLayout'
import type { CaseStudyMetaItem } from '@/components/case-study/CaseStudyMetaBar'
import type { CaseStudyNavItem } from '@/components/case-study/CaseStudyNav'
import {
   CaseStudyDivider,
   CaseStudyHeading,
   CaseStudySection,
} from '@/components/case-study/CaseStudySection'

const OFFICIAL_SITE_URL = 'https://store.glitchproductions.com/'

const META: readonly CaseStudyMetaItem[] = [
   { label: 'Client', value: 'Glitch Shows & Welcome Home' },
   { label: 'Timeline', value: 'Throughout 2024–2025' },
   { label: 'Team', value: 'Lattisha, Ben Mitchell (graphic design)' },
   { label: 'Activities', value: 'UX Design, Graphic Design' },
]

const NAV: readonly CaseStudyNavItem[] = [
   {
      id: 'overview',
      label: 'Overview',
      children: [
         { id: 'background', label: 'Background' },
         { id: 'my-role', label: 'My Role' },
      ],
   },
   {
      id: 'design',
      label: 'Design',
      children: [
         { id: 'show-homepages', label: 'Show Homepages' },
         { id: 'style-guide', label: 'Style Guide' },
      ],
   },
]

/**
 * Glitch Show Homepage case study. Overview and design deliverables for the Gaslight
 * District, Knights of Guinevere, and Welcome Home campaign landing pages.
 */
export default function GlitchShowHomepage() {
   return (
      <CaseStudyLayout
         title="Glitch Show Homepage"
         heroAlt="Glitch Show Homepage title banner"
         meta={META}
         nav={NAV}
      >
         <CaseStudySection eyebrow="Overview" id="overview">
            <CaseStudyHeading id="background">Background</CaseStudyHeading>
            <CaseStudyBody>
               Glitch Productions is an animation company based in Australia
               with over 1 Billion views on their animated shows. Their main
               source of income is revenue from their merchandise store. It is
               home to all their shows with a diverse audience and unique
               aesthetic to suit each one.
            </CaseStudyBody>
            <CaseStudyBody>
               As of October 2023, each show&apos;s unique homepage were
               integrated into uniform catalogue system. The Knights of
               Guinevere store and Gaslight District store are no longer live
               but can be accessed through the wayback machine.
            </CaseStudyBody>

            <CaseStudyHeading id="my-role">My Role</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  { text: 'I was ' },
                  {
                     text: "tasked with creating the new homepage for three of Glitch's upcoming shows and partnerships.",
                     marker: true,
                  },
                  {
                     text: ' The Gaslight District, Knights of Guinevere and Welcome Home (an FFP partnership). ',
                  },
                  {
                     text: 'I designed all of the components and banners of these sites.',
                     marker: true,
                  },
                  {
                     text: ' They encouraged having a unique style to showcase each shows personality with the capacity to place Easter eggs/hidden messages for some sites. ',
                  },
                  {
                     text: 'The main constraint was having the website adhere to the pre-existing Shopify template as we had no programmer at the time to implement more complex front-end development.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyPillLink href={OFFICIAL_SITE_URL} external={true}>
            See Official Site
         </CaseStudyPillLink>

         <CaseStudyDivider />

         <CaseStudySection eyebrow="Design" id="design">
            <div
               id="show-homepages"
               className="scroll-mt-24 flex flex-col gap-8"
            >
               <div className="relative mx-auto flex w-full max-w-[36rem] items-end justify-center px-2 py-4 sm:max-w-none sm:px-0">
                  <div className="relative z-10 w-[28%] shrink-0 -rotate-2 shadow-[0_8px_24px_rgb(0_0_0/0.12)] sm:w-[26%]">
                     <CaseStudyPlaceholder
                        label="Gaslight District show homepage"
                        ratio="9 / 16"
                     />
                  </div>
                  <div className="relative z-20 w-[38%] shrink-0 shadow-[0_12px_32px_rgb(0_0_0/0.16)] sm:w-[34%]">
                     <CaseStudyPlaceholder
                        label="Knights of Guinevere show homepage"
                        ratio="9 / 16"
                     />
                  </div>
                  <div className="relative z-10 w-[28%] shrink-0 rotate-2 shadow-[0_8px_24px_rgb(0_0_0/0.12)] sm:w-[26%]">
                     <CaseStudyFigure
                        src={welcomeHomeHomepage}
                        alt="Welcome Home merch homepage"
                        width={400}
                        height={711}
                     />
                  </div>
               </div>

               <CaseStudyPlaceholder
                  label="Knights of Guinevere logo lockup"
                  ratio="16 / 5"
               />
            </div>

            <div
               id="style-guide"
               className="scroll-mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
               <CaseStudyPlaceholder
                  label="Knights of Guinevere style guide: colours, buttons, banners, and assets"
                  ratio="3 / 5"
               />
               <CaseStudyPlaceholder
                  label="Gaslight District style guide: colours, buttons, frames, and banners"
                  ratio="3 / 5"
               />
            </div>
         </CaseStudySection>
      </CaseStudyLayout>
   )
}
