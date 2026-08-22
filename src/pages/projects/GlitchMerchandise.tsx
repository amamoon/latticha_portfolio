import {
   CaseStudyBody,
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

const GLITCH_STORE_URL = 'https://store.glitchproductions.com/'

const META: readonly CaseStudyMetaItem[] = [
   { label: 'Client', value: 'Glitch Productions' },
   { label: 'Timeline', value: '2022 - present' },
   { label: 'Team', value: 'Consumer Products' },
   { label: 'Activities', value: 'Research, Product Design, Tech Specs' },
]

const PRODUCT_GALLERY_COUNT = 16

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
      children: [{ id: 'product-gallery', label: 'Product Gallery' }],
   },
]

/**
 * Glitch Merchandise case study. Overview of product development work across Glitch
 * Productions, SMG4, and FFP clientele, with a showcase of store catalogue items.
 */
export default function GlitchMerchandise() {
   return (
      <CaseStudyLayout
         title="Glitch Merchandise"
         heroAlt="Glitch Merchandise title banner"
         meta={META}
         nav={NAV}
      >
         <CaseStudySection eyebrow="Overview" id="overview">
            <CaseStudyHeading id="background">Background</CaseStudyHeading>
            <CaseStudyBody>
               Glitch Productions is an animation company based in Australia
               with over 1 billion views on their animated shows. Their main
               source of income is revenue from their merchandise store. It is
               home to all their shows with a diverse audience and unique
               aesthetics to suit each one.
            </CaseStudyBody>

            <CaseStudyHeading id="my-role">My Role</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'I was the Creative Development Officer across all Glitch shows,',
                     marker: true,
                  },
                  {
                     text: ' SMG4 and FFP clientele (a Glitch\u2019s branch that lended their merchandise capabilities to indie talent). I was at the start of the pipeline for the development for all of these items and provided QA alongside the department lead all the way to production. ',
                  },
                  {
                     text: 'I have contributed to over 100 products on the Glitch Productions store page.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyPillLink href={GLITCH_STORE_URL} external={true}>
            See Glitch Merchandise
         </CaseStudyPillLink>

         <CaseStudyDivider />

         <CaseStudySection eyebrow="Design" id="design">
            <div
               id="product-gallery"
               className="scroll-mt-24 grid grid-cols-4 gap-2 sm:gap-3"
            >
               {Array.from({ length: PRODUCT_GALLERY_COUNT }, (_, index) => (
                  <CaseStudyPlaceholder
                     key={index}
                     label={`Product ${index + 1}`}
                     ratio="1 / 1"
                  />
               ))}
            </div>
         </CaseStudySection>
      </CaseStudyLayout>
   )
}
