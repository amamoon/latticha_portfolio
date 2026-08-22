import competitor1Src from '@/assets/projects/nontre-redesign/competitor-1.webp'
import competitor2Src from '@/assets/projects/nontre-redesign/competitor-2.webp'
import competitor3Src from '@/assets/projects/nontre-redesign/competitor-3.webp'
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
   CaseStudyPersona,
   CaseStudyPillLink,
   CaseStudyThemeGrid,
   QuoteList,
   QuoteText,
   type BulletListItem,
   type JourneyRow,
   type LabelledImage,
   type NumberedInsight,
   type PersonaFact,
   type PersonaParagraph,
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
         { id: 'persona-journey-map', label: 'Persona & Journey Map' },
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

/** Quick facts for the interview persona, shown at the top of her card. */
const ADINA_FACTS: readonly PersonaFact[] = [
   { label: 'Age', value: '43' },
   { label: 'Occupation', value: 'Marketing Manager' },
   { label: 'Location', value: 'Perth, Aus' },
   { label: 'Type', value: '“Full time working Mum”' },
]

/** Named paragraphs (About / Goals / Frustrations) for the interview persona. */
const ADINA_PARAGRAPHS: readonly PersonaParagraph[] = [
   {
      label: 'About',
      text: 'Wife of two kids who loves pilates and walking her dog. As soon as she comes home after work, she does the chores for her whole family.',
   },
   {
      label: 'Goals',
      text: 'She is looking for things to elevate her home and give it the luxury feel that she’s been missing. She’s also been noticing a need to maintain her skin. Adina is always looking for a time to relax.',
   },
   {
      label: 'Frustrations',
      text: 'She can never quite get the same feel, or close to the same feel of ambiance and relaxation that you get at a spa, in her home. Nor does she have the time.',
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

            <CaseStudyPersona
               name="Adina"
               facts={ADINA_FACTS}
               paragraphs={ADINA_PARAGRAPHS}
            />

            <CaseStudyJourneyMap
               scenario="First time seeing Nontre.co"
               phases={JOURNEY_PHASES}
               rows={JOURNEY_ROWS}
            />
         </CaseStudySection>

         <CaseStudySection>
            <CaseStudySubHeading>
               Our findings were sorted into 4 key themes:
            </CaseStudySubHeading>
            <CaseStudyThemeGrid items={THEMES} />
            <CaseStudyInsightList items={INSIGHTS} />
         </CaseStudySection>
      </CaseStudyLayout>
   )
}
