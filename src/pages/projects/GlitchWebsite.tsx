import {
   CaseStudyBody,
   CaseStudyBulletList,
   CaseStudyExpandable,
   CaseStudyInsightRow,
   CaseStudyPillLink,
   CaseStudyPlaceholder,
   type BulletListItem,
} from '@/components/case-study/CaseStudyBlocks'
import { CaseStudyLayout } from '@/components/case-study/CaseStudyLayout'
import type { CaseStudyMetaItem } from '@/components/case-study/CaseStudyMetaBar'
import type { CaseStudyNavItem } from '@/components/case-study/CaseStudyNav'
import {
   CaseStudyDivider,
   CaseStudyHeading,
   CaseStudySection,
   CaseStudySubHeading,
} from '@/components/case-study/CaseStudySection'

const META: readonly CaseStudyMetaItem[] = [
   { label: 'Client', value: 'Glitch' },
   { label: 'Timeline', value: 'Apr 2023 - Oct 2023' },
   { label: 'Team', value: 'Lattisha, Ben Mitchell & SpicyTiger (Developer)' },
   { label: 'Activities', value: 'Research, Brand & UX Design' },
]

const NAV: readonly CaseStudyNavItem[] = [
   {
      id: 'overview',
      label: 'Overview',
      children: [
         { id: 'background', label: 'Background' },
         { id: 'problem', label: 'Problem' },
         { id: 'solution', label: 'Solution' },
         { id: 'my-contribution', label: 'My Contribution' },
      ],
   },
   {
      id: 'research',
      label: 'Research',
      children: [
         { id: 'stakeholder-interview', label: 'Stakeholder Interview' },
         { id: 'competitive-analysis', label: 'Competitive Analysis' },
         { id: 'user-interview', label: 'User Interview' },
         { id: 'persona-customer-journey', label: 'Persona & Customer Journey' },
         { id: 'findings', label: 'Findings' },
      ],
   },
   {
      id: 'design',
      label: 'Design',
      children: [{ id: 'brand-design', label: 'Brand Design' }],
   },
   { id: 'usability-test', label: 'Usability Test' },
   { id: 'future-considerations', label: 'Future Considerations' },
]

const OUTDATED_FEATURES: readonly BulletListItem[] = [
   {
      segments: [
         {
            text: 'Navigation Bar included all the current shows released by the company, ',
         },
         {
            text: 'but with the increasing number of projects in development, the navigation bar had to be reconfigured.',
            marker: true,
         },
      ],
   },
   {
      segments: [
         {
            text: 'Another small detail included having the navigation standard 56 px wide and collapsible upon scrolling (48px for mobile). As ',
         },
         {
            text: 'it took up quite a lot of unnecessary surface area on the browser.',
            marker: true,
         },
      ],
   },
   {
      segments: [
         {
            text: 'Appropriate image size was required so page load is quicker.',
            marker: true,
         },
         {
            text: ' Previously images were uploaded directly and were too large.',
         },
      ],
   },
   {
      segments: [
         { text: 'Decreasing the hero banner height', marker: true },
         {
            text: ' so products can be seen straightaway underneath and fit within the screen upon page load.',
         },
      ],
   },
]

/**
 * Glitch Productions Website case study. Overview and the opening research sections are
 * written; later sections remain scaffolded until their copy and exports are ready.
 */
export default function GlitchWebsite() {
   return (
      <CaseStudyLayout
         title="Glitch Productions Website"
         heroAlt="Glitch Productions Website title banner"
         meta={META}
         nav={NAV}
      >
         <CaseStudySection eyebrow="Overview" id="overview">
            <CaseStudyHeading id="background">Background</CaseStudyHeading>
            <CaseStudyBody>
               Glitch Productions is an Australian animation company. Glitch Productions
               videos have reached over a billion views combined, and merchandise sales are
               the company&apos;s main source of income.
            </CaseStudyBody>

            <CaseStudyHeading id="problem">Problem</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'The previous website version from late 2023 meant that ',
                  },
                  {
                     text: 'various bugs and visual confusions on the website had to be dealt with for both the ease of customer browsing and the merchandising teams back-end.',
                     marker: true,
                  },
                  {
                     text: ' Where every month item descriptions, product assets and prices had to be updated. This was originally done with a Shopify extension that was far outdated to meet the needs of the growing company.',
                  },
               ]}
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyPlaceholder
            label="Screenshot: Glitch Productions storefront with Murder Drones hero and show catalogue"
            ratio="966 / 1400"
         />

         <CaseStudySection>
            <CaseStudyHeading id="solution">Solution</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  { text: 'In October 2023, we launched a ' },
                  {
                     text: "new website that integrated all the separate shows website homepages into a cohesive catalogue that reinforced Glitch's brand identity.",
                     marker: true,
                  },
                  {
                     text: ' I worked alongside developer SpicyTiger to integrate the design into the Shopify back-end, allowing the merchandising team to manage inventory more efficiently.',
                  },
               ]}
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyPillLink href="#solution">Jump to Solution</CaseStudyPillLink>

         <CaseStudySection>
            <CaseStudyHeading id="my-contribution">My Contribution</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'I was the main website designer at Glitch within this time.',
                     marker: true,
                  },
                  {
                     text: ' Whilst Ben Mitchell was the main Creative Director for Glitch, I was ',
                  },
                  {
                     text: 'a key contributor to the initial understanding phase of translating the companies needs for the website to a contractor',
                     marker: true,
                  },
                  { text: '.' },
               ]}
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyDivider />

         <CaseStudySection eyebrow="Research" id="research">
            <span id="stakeholder-interview" className="block scroll-mt-24" />
            <CaseStudyBody>
               {[
                  {
                     text: 'As the Glitch website was more so a collaboration between multiple teams, ',
                  },
                  {
                     text: 'I was the Merchandise team representative and spent time going to other people within my team to see any new features or existing faults they had in mind.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>

            <CaseStudyHeading id="competitive-analysis">
               Competitive Analysis
            </CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'We looked into a number of other merchandise websites that are run by independent media companies and animation studios to see what they were doing well. ',
                  },
                  {
                     text: 'A highlight in the websites shortcomings were made apparent when observing the basics of competitors sites.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>

            <CaseStudyPlaceholder
               label="Competitor logos: Fangamer, YouTooz, and CoolShirtz"
               ratio="966 / 280"
            />

            <CaseStudyExpandable label="Point Breakdown of Findings +">
               <CaseStudyPlaceholder
                  label="Competitive analysis findings breakdown"
                  ratio="966 / 480"
               />
            </CaseStudyExpandable>

            <CaseStudyBody>
               To better my understanding I did an additional Case Study to understand what
               Fangamer was doing differently on their Mobile website compared to
               Glitch&apos;s.
            </CaseStudyBody>

            <CaseStudyExpandable label="Read Case Study +">
               <CaseStudySubHeading tone="light" bold>
                  Homepage
               </CaseStudySubHeading>

               <CaseStudyInsightRow
                  quote="Fangamer indicates which game each of their products originates from in the bottom left of their merchandise. Including an additional badge in the corner could further distinguish this to customers."
                  footnote={
                     <CaseStudyPlaceholder
                        label="Pomni plush comparison: standard layout vs corner show badge"
                        ratio="16 / 7"
                     />
                  }
               >
                  <CaseStudyPlaceholder
                     label="Fangamer product grid with game labels and preorder badge"
                     ratio="4 / 3"
                  />
               </CaseStudyInsightRow>

               <CaseStudyInsightRow quote="Youtooz has the shapes behind the products are dynamic and fit together in an interesting way, looking less like a standard grid.">
                  <CaseStudyPlaceholder
                     label="Youtooz product grid with dynamic background shapes and countdown timers"
                     ratio="4 / 3"
                  />
               </CaseStudyInsightRow>

               <CaseStudyInsightRow quote="Utilise product badges over products to denote status or category of product (e.g. what show it's from).">
                  <CaseStudyPlaceholder
                     label="Product grid with NEW and PREORDER badges"
                     ratio="4 / 3"
                  />
               </CaseStudyInsightRow>

               <CaseStudySubHeading tone="light" bold>
                  Product Page
               </CaseStudySubHeading>

               <CaseStudyInsightRow quote="Cool Shirtz includes an icon next to the product title to reference the main graphic design of the selected apparel. This gives visual reference to the product description and would be a good indicator for the products show origination. I thought another fun inclusion would be an optional textbox beneath the heading to include comedic text - something very on brand for the company.">
                  <CaseStudyPlaceholder
                     label="Cool Shirtz product page with icon, comedic text, and size selectors"
                     ratio="3 / 4"
                  />
               </CaseStudyInsightRow>

               <CaseStudyInsightRow quote="Underneath the main product details and product image, Fangamer has larger feature photos to include things such as the product packaging or bonus features. This would be useful especially for IRL size representations of products - specifically 3D items (plushies, statues etc.).">
                  <CaseStudyPlaceholder
                     label="Fangamer product page with packaging photos and lenticular effect detail"
                     ratio="4 / 3"
                  />
               </CaseStudyInsightRow>

               <CaseStudySubHeading tone="light" bold>
                  Check Out
               </CaseStudySubHeading>

               <CaseStudyInsightRow quote="An industry standard missing from the Glitch website included having the shopping cart as an overlay rather than a separate link. Fangamer was a good example of this whilst showing similar products at checkout to encourage increased basket sizes.">
                  <CaseStudyPlaceholder
                     label="Fangamer cart overlay with checkout actions and you may also like recommendations"
                     ratio="3 / 4"
                  />
               </CaseStudyInsightRow>
            </CaseStudyExpandable>

            <CaseStudyHeading>Outdated Features</CaseStudyHeading>
            <CaseStudyBody>
               Previous to this project, I had worked on one of the new store pages for an
               upcoming show. This led me to encounter the enumerable UI issues with the
               website that was the result of using an outdated Shopify template that could
               not match the companies creative goals for its homepages. These issues were
               small in isolation but accumulated together they made a clunky and
               underdeveloped website.
            </CaseStudyBody>

            <CaseStudySubHeading tone="light">
               Examples for issues I saw <em>only</em> with the homepage:
            </CaseStudySubHeading>

            <CaseStudyBulletList items={OUTDATED_FEATURES} />

            <CaseStudyHeading id="user-interview">User Interview</CaseStudyHeading>
            <CaseStudyPlaceholder label="User interview copy and artwork" />

            <CaseStudyHeading id="persona-customer-journey">
               Persona &amp; Customer Journey
            </CaseStudyHeading>
            <CaseStudyPlaceholder label="Persona card and customer journey map" />

            <CaseStudyHeading id="findings">Findings</CaseStudyHeading>
            <CaseStudyPlaceholder label="Research findings copy and artwork" />
         </CaseStudySection>

         <CaseStudyDivider />

         <CaseStudySection eyebrow="Design" id="design">
            <CaseStudyHeading id="brand-design">Brand Design</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'Whilst reconvening with the other teams on our findings, a team member noticed a ',
                  },
                  {
                     text: 'consistent trend of simplicity in the branding of other websites that allowed them to be versatile whilst still being able to work with their other IPs and their respective colours whilst maintaining the branding.',
                     marker: true,
                  },
                  {
                     text: ' Being part of the branding team, I was paired with another member from marketing to explore possibilities of how we could reconfigure Glitch\u2019s aesthetic into a universal canvas to place our shows on and that still creates space for our characters to shine and take centre stage',
                  },
               ]}
            </CaseStudyBody>

            <CaseStudyExpandable label="Brand Design Journey +">
               <CaseStudyPlaceholder
                  label="Brand design journey process boards and iterations"
                  ratio="966 / 480"
               />
            </CaseStudyExpandable>

            <CaseStudyBody>
               {[
                  {
                     text: 'We settled on a 4x4 grid with a light interior and darker grid outline.',
                     marker: true,
                  },
                  {
                     text: ' It has rounded corner edges and sporadic purple/blue glitches around the main image. ',
                  },
                  {
                     text: 'These will be used for the product image backgrounds and was integrated into Glitch\u2019s official branding',
                     marker: true,
                  },
                  { text: '.' },
               ]}
            </CaseStudyBody>

            <CaseStudyPlaceholder
               label="4x4 glitch grid with product card examples on purple border"
               ratio="966 / 520"
            />
         </CaseStudySection>

         <CaseStudyDivider />

         <CaseStudySection eyebrow="Usability Test" id="usability-test">
            <CaseStudyPlaceholder label="Usability test copy and results" />
         </CaseStudySection>

         <CaseStudyDivider />

         <CaseStudySection eyebrow="Future Considerations" id="future-considerations">
            <CaseStudyPlaceholder label="Future considerations copy" />
         </CaseStudySection>
      </CaseStudyLayout>
   )
}
