import competitor1Src from '@/assets/projects/nontre-redesign/competitor-1.webp'
import competitor2Src from '@/assets/projects/nontre-redesign/competitor-2.webp'
import competitor3Src from '@/assets/projects/nontre-redesign/competitor-3.webp'
import personaSrc from '@/assets/projects/nontre-redesign/Frame 362.png'
import desktopNavSrc from '@/assets/projects/nontre-redesign/Frame 370.png'
import mobileNavSrc from '@/assets/projects/nontre-redesign/Frame 371.png'
import usabilityFirstImpressionSrc from '@/assets/projects/nontre-redesign/Group 51.png'
import usabilityUspSrc from '@/assets/projects/nontre-redesign/Group 51-1.png'
import ideationBoardSrc from '@/assets/projects/nontre-redesign/Group 57.png'
import annotatedWireframeSrc from '@/assets/projects/nontre-redesign/Group 59.png'
import wireframeDirectionsSrc from '@/assets/projects/nontre-redesign/Group 60.png'
import loFiDesignsSrc from '@/assets/projects/nontre-redesign/Group 61.png'
import solutionHomepageSrc from '@/assets/projects/nontre-redesign/Group 62.png'
import solutionProductSrc from '@/assets/projects/nontre-redesign/Group 63.png'
import breakdownHeroSrc from '@/assets/projects/nontre-redesign/Group 64.png'
import breakdownScreen2Src from '@/assets/projects/nontre-redesign/Group 64-1.png'
import breakdownScreen3Src from '@/assets/projects/nontre-redesign/Group 64-2.png'
import breakdownDesktopSrc from '@/assets/projects/nontre-redesign/Group 64-3.png'
import heroSrc from '@/assets/projects/nontre-redesign/hero.webp'
import overviewSiteSrc from '@/assets/projects/nontre-redesign/overview-site.webp'
import solutionMockupsSrc from '@/assets/projects/nontre-redesign/solution-mockups.webp'
import {
   CaseStudyBody,
   CaseStudyBulletList,
   CaseStudyCheckList,
   CaseStudyFigure,
   CaseStudyImageRow,
   CaseStudyInsightList,
   CaseStudyJourneyMap,
   CaseStudyPillLink,
   CaseStudyPlaceholder,
   CaseStudyThemeGrid,
   QuoteList,
   QuoteText,
   type BulletListItem,
   type JourneyRow,
   type LabelledImage,
   type NumberedInsight,
   type ThemeCard,
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
   { label: 'Client', value: 'Nontre' },
   { label: 'Timeline', value: 'May 2024 - Jul 2024' },
   { label: 'Team', value: 'Harness Project' },
   { label: 'Activities', value: 'UX Design, UX Research' },
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
         { id: 'user-interviews', label: 'User Interviews' },
         { id: 'persona-journey-map', label: 'Persona & Customer Journey' },
         { id: 'defined-design-goals', label: 'Defined Design Goals' },
      ],
   },
   {
      id: 'design',
      label: 'Design',
      children: [
         { id: 'ideation', label: 'Ideation' },
         { id: 'wireframes', label: 'Wireframes' },
         { id: 'lo-fidelity-designs', label: 'Lo-Fidelity Designs' },
         { id: 'navigation', label: 'Navigation' },
         { id: 'design-solution', label: 'Solution' },
         { id: 'breakdown', label: 'Breakdown' },
      ],
   },
   {
      id: 'evaluation',
      label: 'Evaluation',
      children: [
         { id: 'usability-test', label: 'Usability Test' },
         { id: 'takeaways', label: 'Takeaways' },
      ],
   },
]

/** Stakeholder focus areas; marked runs carry the highlighter band from the design. */
const FOCUS_AREAS = [
   [
      { text: 'Improve product details', marker: true },
      { text: ' display: descriptions, ingredients, and images.' },
   ],
   [
      { text: 'Optimise for increased sales, including ' },
      { text: 'cross-selling strategies.', marker: true },
   ],
   [
      { text: 'Align content with ' },
      { text: 'brand', marker: true },
      { text: ' essence and values.' },
   ],
   [
      { text: 'Highlight ' },
      { text: 'sustainability efforts', marker: true },
      { text: ' (eco-friendly packaging, carbon neutrality, refills etc)' },
   ],
   [
      { text: 'Emphasise ' },
      { text: 'premium product positioning', marker: true },
      { text: ' and distribution channels.' },
   ],
] as const

/** Findings from the stakeholder interview. */
const STAKEHOLDER_FINDINGS: readonly BulletListItem[] = [
   {
      segments: [
         { text: 'Really getting customers at the ' },
         { text: '‘beginning of the funnel’', marker: true },
         { text: '.' },
      ],
      subItems: [
         [{ text: '10% off Pop-up, Promotions, Referrals work quite well.' }],
      ],
   },
   {
      segments: [
         {
            text: 'Informing Customers on their brand. To reinvigorate life back into the home.',
         },
      ],
      subItems: [
         [
            { text: 'Brand: Nontre’s key tenants are ' },
            { text: 'Australian Made, eco-friendly and Luxury.', marker: true },
         ],
      ],
   },
   {
      segments: [
         { text: 'Educate customers on Nontre’s ' },
         { text: 'sustainability efforts.', marker: true },
      ],
   },
   {
      segments: [
         { text: 'Emphasise Nontre’s ' },
         {
            text: 'extensive catalogue and spotlight particular items',
            marker: true,
         },
         { text: ', e.g. Wool balls, fragrance oils.' },
      ],
   },
]

/** Australian home-care stores reviewed in the competitive analysis. */
const COMPETITORS: readonly LabelledImage[] = [
   {
      label: 'Likens themselves to:',
      src: competitor1Src,
      alt: 'Competitor storefront Nontre likens itself to',
   },
   {
      label: 'Appreciates\nenvironmental focus of:',
      src: competitor2Src,
      alt: 'Competitor praised for its environmental focus',
   },
   {
      label: 'Competitor:',
      src: competitor3Src,
      alt: 'Direct competitor in the Australian home-care market',
   },
]

/** Secondary findings from the competitive analysis. */
const ANALYSIS_POINTS: readonly BulletListItem[] = [
   {
      segments: [
         {
            text: 'The way the brand presents itself on their websites speaks to its greater interaction with the Australian Market and this can affect how users will observe the product.',
         },
      ],
   },
   {
      segments: [
         {
            text: 'Tone of voice across websites can impact the feeling customers have when reading the copy as well as what design choices can be utilised from the voice.',
         },
      ],
   },
]

/** Lo-fi critique: strengths carried into later iterations. */
const WHAT_WORKS: readonly BulletListItem[] = [
   {
      segments: [{ text: 'Proportions adjusted to fit mobile UI' }],
   },
   {
      segments: [
         {
            text: 'Fragrance collection was an interesting way of capturing nontre scent ‘moments’ as a unique selling point.',
         },
      ],
   },
   {
      segments: [
         {
            text: 'Advertising Nontre’s hidden offers of sustainability in ‘Earth-wise’ and prompting them with a ‘Get started’ kit.',
         },
      ],
      subItems: [
         [
            {
               text: 'This was something I didn’t continue with as Nontre didn’t have enough products to justify a ‘get started’ kit section.',
               marker: true,
            },
         ],
      ],
   },
]

/** Lo-fi critique: feedback that reshaped the next pass. */
const WHAT_DOESNT: readonly BulletListItem[] = [
   {
      segments: [
         {
            text: 'Some teammates didn’t like having a video in hero image',
         },
      ],
   },
   {
      segments: [
         {
            text: 'Including all product options on the homepage seemed too overwhelming on mobile.',
         },
      ],
   },
   {
      segments: [
         {
            text: 'Separating Best Seller sections for Laundry, Home Care and Hand & Body was difficult to achieve as there wasn’t even distribution of products across categories',
         },
      ],
   },
]

/** IA notes from reworking the storefront navigation. */
const NAVIGATION_NOTES: readonly BulletListItem[] = [
   {
      segments: [
         { text: 'Subheadings', bold: true },
         {
            text: ' - simplified the subheadings since the website ones were too long and headings are meant to be simple',
         },
      ],
   },
   {
      segments: [
         { text: 'Shop all', bold: true },
         { text: " - Don't see the point of having this button" },
      ],
   },
   {
      segments: [
         {
            text: "Removed 'car diffuser' subheading as it stuck out quite a bit",
            bold: true,
         },
         {
            text: ' - however, if further items are added to this section. A car + Travel section could definitely be created.',
         },
      ],
   },
   {
      segments: [
         { text: "Decluttering 'home' section", bold: true },
         { text: ' - placing hand wash in hand and body care' },
      ],
   },
   {
      segments: [
         { text: 'Refills', bold: true },
         {
            text: " - there is enough product to justify a refill and to emphasise the sustainability image you uphold, it's good to showcase this",
         },
      ],
   },
   {
      segments: [
         { text: 'Kits', bold: true },
         {
            text: ' - there are enough kits in your product range to highlight it alongside gifting',
         },
      ],
   },
]

/** Customer-journey-map columns: the funnel stages walked through in the scenario. */
const JOURNEY_PHASES = [
   'Awareness',
   'Searching',
   'Consideration',
   'Purchase',
] as const

/** Customer-journey-map rows for the "first time seeing Nontre.co" scenario. */
const JOURNEY_ROWS: readonly JourneyRow[] = [
   {
      label: 'Touch Point',
      cells: [
         'Homepage (mobile)',
         'Top bar, hamburger menu',
         'Product Page',
         'Subscribe and Save button',
      ],
   },
   {
      label: 'Doing',
      cells: [
         'Scrolls down and views webpage. Looks for brand information',
         'Browses page and is trying to understand Nontre and their catalogue',
         'Observes product and scrolls down page to see what else is offered',
         'Wants to see prices for subscription service',
      ],
   },
   {
      label: 'Thinking',
      variant: 'quote',
      cells: [
         '“Very luxurious” “I wonder what they sell”',
         '“They sell a lot of things. More than I thought” “I don’t know what this brand is”',
         '“Why is it this price” “What makes this worth buying”',
         '“This button is slow” “Is it working”',
      ],
   },
   {
      label: 'Feeling',
      cells: [
         'Curious 🤔',
         'Overwhelmed, still curious 😶',
         'Confused 🤨',
         'Neutral 😐',
      ],
   },
   {
      label: 'Opportunities',
      variant: 'opportunity',
      cells: [
         'Tell brand story',
         'Clarify navigation and show catalogue',
         'Provide a purchase incentive',
         'Clarify Subscribe & Save button',
      ],
   },
]

/** The four research themes distilled from user interviews. */
const THEMES: readonly ThemeCard[] = [
   {
      number: 1,
      title: 'Brand Identities Mixed Messaging',
      body: `There is confusion from potential customers around Nontre’s branding and what they stand for. Are they sustainable? Are they Australian made? Are they luxury? The luxury vibe is the only one resonating with people at the moment. Potential customers want to understand why they are paying a premium for Nontre’s products. What’s unique about Nontre’s product range that justifies the premium price tag?`,
   },
   {
      number: 2,
      title: 'Difference on product expense',
      body: 'Most customers prefer to pay more for body care/fragrance products over home appliances as it’s something that makes direct contact with their skin. This is problematic as laundry/home care are the key tenants of Nontre.',
   },
   {
      number: 3,
      title: 'Lack of external validation',
      body: 'Customers want to know more about Nontre and their story. They want to see reviews and testimonials, and be vouched for by influencers on social media. They need to build trust with Nontre in order to become customers.',
   },
   {
      number: 4,
      title: 'Mobile Preference',
      body: 'Mobile is definitely the preferred platform yet customers encountered multiple usability/UX issues whilst navigating the website on mobile.',
   },
]

/** Elaborated design implications for each of the four research themes. */
const INSIGHTS: readonly NumberedInsight[] = [
   {
      number: 1,
      eyebrow: 'Brand Identities Mixed Messaging',
      title: 'Two Unique Selling Points',
      body: 'We needed to simplify Nontre’s brand into something digestible for the competitive market. This involved putting a spin on their three values — luxury, sustainability and Australian-made — into two USPs. The first selling point was ‘Sparking joy’ through sensory and wellbeing items. This defines Nontre as experience curators who design fragrant laundry balls or calming balms to create moments of happiness. In terms of UX, the scent aspect of their products had to be emphasised to a greater degree. The second selling point was premium products that were Australian-made. Luxury for home care products never clicked for the audience, so this rebrand would help paint a clearer picture of Nontre.',
   },
   {
      number: 2,
      eyebrow: 'Difference on product expense',
      title: 'Premium Laundry that Sparks Joy',
      body: 'The laundry care products of Nontre were a lot higher than their counterparts and interviewees had trouble imagining buying such products, despite them being the target demographic. The stakeholders wished to emphasise how the price was worth it as these products ‘sparked joy’, and this was a great angle to justify the premium of laundry products through their scent/wellbeing USP. Scent and wellbeing became an important aspect to showcase in the website redesign.',
   },
   {
      number: 3,
      eyebrow: 'Lack of external validation',
      title: 'Customer Trust',
      body: 'Our interviewees reported having a higher sense of trust and willingness to purchase from a brand that was well known and recommended by others. Including customer reviews and a social media presence builds that trust within the brand and products.',
   },
   {
      number: 4,
      eyebrow: 'Mobile Preference',
      title: 'Mobile First Mentality',
      body: 'More obviously, our redesign should start with a mobile screen, as the majority of customers performed their e-commerce nowadays on their hand-held device.',
   },
]

/**
 * Nontre Redesign case study. Content pages share their chrome and blocks with
 * `@/components/case-study`, so sibling projects only supply copy and artwork.
 */
export default function NontreRedesign() {
   return (
      <CaseStudyLayout
         title="Nontre Redesign"
         heroSrc={heroSrc}
         heroAlt="nontre.co website redesign shown on desktop and mobile"
         meta={META}
         nav={NAV}
      >
         <CaseStudySection eyebrow="Overview" id="overview">
            <CaseStudyHeading id="background">Background</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  { text: 'Nontre.co is dedicated to crafting ' },
                  {
                     text: 'premium, earth-wise products that blend luxury with sustainability.',
                     marker: true,
                  },
                  {
                     text: ' Their Australian-inspired range, from home care to personal care, is designed with the planet and your wellbeing in mind. ',
                  },
                  {
                     text: 'Committed to eco-friendly practices, they offer solutions that are as kind to the earth as they are to you.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>

            <CaseStudyHeading id="problem">Problem</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'Nontre had the issues of many successful businesses. They started on shopify but their needs as a store had expanded beyond the basic templates capabilities. ',
                  },
                  {
                     text: 'Their website was out of sync with the brand and this would only grow as time went on.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>

            <QuoteList
               items={[
                  {
                     text: 'Categorisation was limited and made navigation difficult',
                  },
                  {
                     text: 'UI was out-dated compared to the rest of the home goods market',
                  },
                  { text: 'Poor messaging led to lack of brand presence.' },
               ]}
            />
         </CaseStudySection>

         <CaseStudyFigure
            src={overviewSiteSrc}
            alt="The original nontre.co Shopify storefront before the redesign"
            width={966}
            height={778}
            caption="The original storefront: template-bound layout and limited categorisation."
         />

         <CaseStudySection>
            <CaseStudyBody>
               We had a basic list of focus areas from the stakeholders:
            </CaseStudyBody>

            <CaseStudyCheckList items={FOCUS_AREAS} />

            <CaseStudyHeading id="solution">Solution</CaseStudyHeading>
            <CaseStudyBody>
               We created a range of alternative homepages that sought to
               enhance user experience and presentation of products. Our
               priority was maintaining brand identity, aesthetics and to
               enhance education. Leading to increased basket size, CLV,
               visibility, user retention and CTR.
            </CaseStudyBody>

            <CaseStudySubHeading>Design Outcomes:</CaseStudySubHeading>
            <QuoteList
               items={[
                  { text: 'Emphasise scent/wellbeing to justify premium' },
                  {
                     text: 'Update the website to market standard.',
                     subItems: ['Emphasise social media & mobile first.'],
                  },
                  { text: 'Focus on a Unique Selling Point' },
               ]}
            />
         </CaseStudySection>

         <CaseStudyPillLink href="#solution">
            Jump to Solution
         </CaseStudyPillLink>

         <CaseStudyFigure
            src={solutionMockupsSrc}
            alt="Alternative homepage directions explored for the redesign"
            width={944}
            height={512}
         />

         <CaseStudySection>
            <CaseStudyHeading id="my-contribution">
               My Contribution
            </CaseStudyHeading>
            <CaseStudyBody>
               I was in a team of 12 people who worked in parallel through each
               step of the design process to come up with unique interpretations
               of the homepage in the hopes of being chosen as the final design
               to be implemented.
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyDivider />

         <CaseStudySection eyebrow="Research" id="research">
            <CaseStudyHeading id="stakeholder-interview">
               Stakeholder Interview
            </CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'Whilst our solution could have been thorough with all appropriate amendments from a UX designer’s perspective. This website will ultimately be used by Nontre’s team. So on the outset, ',
                  },
                  {
                     text: 'we took time to comprehend the brand and align with the business owners priorities.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>
            <CaseStudyBody>
               {[
                  {
                     text: 'We began with an interview with the stakeholders. Ascertaining their mission as a company, existing metrics and desired experience for their website. ',
                  },
                  {
                     text: 'Questions were garnered through assumptions from preliminary research on the brand and a basic heuristic analysis of the website’s user experience at the time.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>

            <CaseStudySubHeading>What we found out was...</CaseStudySubHeading>
            <CaseStudyBulletList items={STAKEHOLDER_FINDINGS} />
            <CaseStudyBody>
               {[
                  {
                     text: 'These insights helped define Nontre’s wants and key opportunities to guide our research efforts moving forward.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>

            <CaseStudyPlaceholder
               label="Stakeholder kickoff board / workshop artifacts"
               ratio="16 / 9"
            />

            <CaseStudyHeading id="competitive-analysis">
               Competitive Analysis
            </CaseStudyHeading>
            <CaseStudyBody>
               To better understand the problem space, we conducted a
               competitive analysis. We focused on similar Australian-based
               e-commerce websites selling home-based cleaning products. This
               included:
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudySection>
            <CaseStudyImageRow items={COMPETITORS} />
         </CaseStudySection>

         <CaseStudySection>
            <CaseStudySubHeading>Key Insight</CaseStudySubHeading>
            <QuoteText>
               Each company has a clear brand identity with at least 2 strong
               Unique Selling Points besides their emphasis on luxury.
            </QuoteText>

            <CaseStudyBody>
               {[
                  { text: 'This highlighted ' },
                  {
                     text: 'a noticeable gap in Nontre due to their mixed messaging between luxury, sustainability and Australian-Made.',
                     marker: true,
                  },
                  { text: ' The former two presenting a contradiction.' },
               ]}
            </CaseStudyBody>
            <CaseStudyBody>Additional points included:</CaseStudyBody>
            <CaseStudyBulletList items={ANALYSIS_POINTS} />

            <CaseStudyPillLink
               href="https://docs.google.com/document/d/1X8ucrMzH8yNqdV4dJRvv7pjef4yGjOzDNkxmBZWbAyU/edit?tab=t.0"
               external={true}
            >
               Read Competitive Analysis Breakdown
            </CaseStudyPillLink>

            <CaseStudyBody>
               {[
                  {
                     text: 'These results fuelled the direction for our User Interviews.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudySection>
            <CaseStudyHeading id="user-interviews">
               User Interviews
            </CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'We continued with structured user interviews that sought to analyse the prescribed target demographics’ ',
                  },
                  {
                     text: 'household chore habits and observe their interaction with the current website as existing buyers of home cleaning goods.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>
            <CaseStudyBody>
               We interviewed at least 2 people per persona, with a total of 24
               participants. Aimed to be middle-aged women who were the primary
               home carers.
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudySection>
            <CaseStudyHeading id="persona-journey-map">
               Persona &amp; Customer Journey Map
            </CaseStudyHeading>
            <CaseStudyBody>
               To synthesise our ideas, we performed a persona and customer
               journey map that allowed us to brainstorm a clearer understanding
               of the customer issues and how this could be solved through the
               website.
            </CaseStudyBody>

            <CaseStudyFigure
               src={personaSrc}
               alt="Adina persona card: full-time working mum from Perth"
               width={1931}
               height={983}
            />

            <CaseStudyJourneyMap
               scenario="First time seeing Nontre.co"
               phases={JOURNEY_PHASES}
               rows={JOURNEY_ROWS}
            />
         </CaseStudySection>

         <CaseStudySection>
            <CaseStudyHeading id="defined-design-goals">
               Defined Design Goals
            </CaseStudyHeading>
            <CaseStudySubHeading>
               Our findings were sorted into 4 key themes:
            </CaseStudySubHeading>
            <CaseStudyThemeGrid items={THEMES} />
            <CaseStudyInsightList items={INSIGHTS} />
         </CaseStudySection>

         <CaseStudyDivider />

         <CaseStudySection eyebrow="Design" id="design">
            <CaseStudyHeading id="ideation">Ideation</CaseStudyHeading>
            <CaseStudyBody>
               With that inspiration i was able to brainstorm key features I
               wanted in the redesign. Also aspects that I would later push onto
               the product page.
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyFigure
            src={ideationBoardSrc}
            alt="Ideation board of homepage priorities for the Nontre redesign"
            width={1931}
            height={970}
         />

         <CaseStudySection>
            <CaseStudyHeading id="wireframes">Wireframes</CaseStudyHeading>
            <CaseStudyBody>
               With that inspiration i was able to brainstorm key features I
               wanted in the redesign. Also aspects that I would later push onto
               the product page.
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyFigure
            src={annotatedWireframeSrc}
            alt="Annotated sketch of the existing Nontre homepage with emphasis and move-up notes"
            width={1317}
            height={1052}
         />

         <CaseStudyFigure
            src={wireframeDirectionsSrc}
            alt="Three mobile wireframe directions explored for the homepage"
            width={914}
            height={1557}
         />

         <CaseStudySection>
            <CaseStudySubHeading tone="light">Homepage</CaseStudySubHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'Most of the changes were updating the design to a more modern layout that aligns with the user’s current experience of e-commerce websites. ',
                  },
                  {
                     text: 'The main points of interest on the Home Page was emphasising “Scent Profiles” and “Earth-wise” (re-fills) that justifies Nontre’s product premium and their sustainability goals.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>

            <CaseStudySubHeading tone="light">Product Page</CaseStudySubHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'The product page required a few changes to become more intuitive as a regular e-commerce website and ',
                  },
                  {
                     text: 'I placed an emphasis on the use of fragrance within their products and their ‘subscribe & save’ feature.',
                     marker: true,
                  },
                  {
                     text: ' A note from the interviews included emphasising this subscribe and save option.',
                  },
               ]}
            </CaseStudyBody>
            <CaseStudyBody>
               {[
                  {
                     text: 'These two features were implemented in the redesign of their 2025 website.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>
            <CaseStudyBody>
               After showcasing my wireframes to the class I got some good
               feedback that helped me narrow down the designs.
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudySection>
            <CaseStudyHeading id="lo-fidelity-designs">
               Lo-Fidelity Design
            </CaseStudyHeading>
            <CaseStudyBody>
               With that inspiration, I was able to brainstorm key features I
               wanted in the redesign. As well as aspects that I would later
               push onto the product page.
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyFigure
            src={loFiDesignsSrc}
            alt="Lo-fidelity mobile screens for homepage categories, best sellers, and fragrance collection"
            width={1320}
            height={1949}
         />

         <CaseStudySection>
            <CaseStudySubHeading tone="light">What Works</CaseStudySubHeading>
            <CaseStudyBulletList items={WHAT_WORKS} />

            <CaseStudySubHeading tone="light">What Doesn’t</CaseStudySubHeading>
            <CaseStudyBulletList items={WHAT_DOESNT} />
         </CaseStudySection>

         <CaseStudySection>
            <CaseStudyHeading id="navigation">Navigation</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'The navigation bar of the website was very wordy and complex providing a difficult user experience. ',
                  },
                  {
                     text: 'Categorising the items into manageable mental chunks was key in allowing users to have a mental model of what Nontre provided as a company and pinpointing their specific USPs',
                     marker: true,
                  },
                  { text: '.' },
               ]}
            </CaseStudyBody>
            <CaseStudyBody>
               A spreadsheet of all the items into fragrance, use and the rooms
               they’re used within assisted in ascertaining hierarchy.
            </CaseStudyBody>

            <CaseStudyBulletList items={NAVIGATION_NOTES} />

            <CaseStudySubHeading tone="light">
               Final Version
            </CaseStudySubHeading>
            <CaseStudyBody>
               Mobile and desktop navigation after the information architecture
               pass.
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyFigure
            src={mobileNavSrc}
            alt="Final mobile navigation: top-level categories and laundry submenu"
            width={1938}
            height={1051}
         />

         <CaseStudyFigure
            src={desktopNavSrc}
            alt="Final desktop navigation with laundry dropdown open"
            width={1936}
            height={883}
         />

         <CaseStudySection>
            <CaseStudyHeading id="design-solution">Solution</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'The final homepage and product page brought the research goals into a cohesive mobile-first storefront: ',
                  },
                  {
                     text: 'scent as a primary selling point, clearer category entry points, and sustainability surfaced through Earth-wise and refills.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyFigure
            src={solutionHomepageSrc}
            alt="Final hi-fi mobile homepage: joyful moments hero, categories, fragrance, and earth-wise sections"
            width={1940}
            height={1755}
         />

         <CaseStudyFigure
            src={solutionProductSrc}
            alt="Final hi-fi mobile product page for Royal Blossom hand wash with subscribe and save"
            width={1936}
            height={899}
         />

         <CaseStudySection>
            <CaseStudyHeading id="breakdown">Breakdown</CaseStudyHeading>
            <CaseStudyBody>
               A closer look at the key screens that carried the design
               outcomes: hero storytelling, category discovery, and the refined
               storefront header.
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyFigure
            src={breakdownHeroSrc}
            alt="Hero breakdown: joyful moments lifestyle shot with Australian-made and cruelty-free badges"
            width={718}
            height={1231}
         />

         <CaseStudyFigure
            src={breakdownScreen2Src}
            alt="Homepage breakdown screen highlighting category and product storytelling"
            width={718}
            height={1211}
         />

         <CaseStudyFigure
            src={breakdownScreen3Src}
            alt="Homepage breakdown screen highlighting fragrance and earth-wise modules"
            width={718}
            height={1211}
         />

         <CaseStudyFigure
            src={breakdownDesktopSrc}
            alt="Desktop homepage breakdown: header, joyful moments hero, and World of Nontre categories"
            width={748}
            height={775}
         />

         <CaseStudyDivider />

         <CaseStudySection eyebrow="Evaluation" id="evaluation">
            <CaseStudyHeading id="usability-test">
               Usability Test
            </CaseStudyHeading>
            <CaseStudyBody>
               After the redesign directions were in place, we ran usability
               sessions to check first impressions of the catalogue and which
               brand values were landing with the target audience.
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyFigure
            src={usabilityFirstImpressionSrc}
            alt="Usability test first impression results: laundry/home and beauty each at 40%"
            width={1267}
            height={716}
         />

         <CaseStudyFigure
            src={usabilityUspSrc}
            alt="Usability test USP results: wellbeing 60%, premium 30%, sustainable 10%"
            width={1267}
            height={718}
         />

         <CaseStudySection>
            <CaseStudyHeading id="takeaways">Takeaways</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'Participants recognised Nontre most clearly through ',
                  },
                  {
                     text: 'laundry/home care and beauty, with wellbeing as the strongest USP signal.',
                     marker: true,
                  },
                  {
                     text: ' Sustainability still needed more deliberate surface area on the storefront — which reinforced keeping Earth-wise and refills visible in the final IA.',
                  },
               ]}
            </CaseStudyBody>
            <CaseStudyBody>
               {[
                  {
                     text: 'Mobile-first layout, scent-led merchandising, and a simpler navigation model were the changes most aligned with both stakeholder priorities and what testers could parse quickly.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>
         </CaseStudySection>
      </CaseStudyLayout>
   )
}
