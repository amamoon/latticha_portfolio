import {
   CaseStudyBody,
   CaseStudyBulletList,
   CaseStudyCallout,
   CaseStudyIssuesTable,
   CaseStudyPillLink,
   CaseStudyPlaceholder,
   QuoteBulletList,
   QuoteText,
   type BulletListItem,
   type IssuesTableRow,
   type QuoteListItem,
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

const COMMUNICATION_FLOW_BULLETS: readonly BulletListItem[] = [
   {
      segments: [
         { text: 'Real-Time Updates:', bold: true },
         {
            text: ' Providing customers with instant notifications about changes to their case status through text message, email or the portal.',
         },
      ],
   },
   {
      segments: [
         { text: 'Milestone Tracking:', bold: true },
         {
            text: " Displaying clear stages of the process (e.g., 'Case Received,' 'In Progress,' 'Completed') so customers always know where their case stands.",
         },
      ],
   },
   {
      segments: [{ text: 'Customer self-service features', marker: true }],
   },
   {
      segments: [
         { text: 'Centralised Communication Hub:', bold: true },
         {
            text: ' A dedicated section in the portal where customers can view all communications and updates related to their case in one place.',
         },
      ],
   },
]

const DOCUMENT_COMPLEXITY_BULLETS: readonly BulletListItem[] = [
   { segments: [{ text: 'Digital Form Creation', marker: true }] },
   { segments: [{ text: 'Secure Submission', marker: true }] },
   { segments: [{ text: 'Automatic Acknowledgment', marker: true }] },
   { segments: [{ text: 'Unified Document Repository', marker: true }] },
   { segments: [{ text: 'Search and retrieval' }] },
]

const STAKEHOLDER_NOTICED: readonly QuoteListItem[] = [
   { text: 'COMPLETELY DIGITISED PROCESS' },
   {
      text: 'LESS JARGON, MAKING IT EASY AND EMPATHETIC FOR THE BEREAVED INDIVIDUALS',
   },
   {
      text: 'TRANSPARENCY ON CURRENT AND FUTURE STEPS TO THE PROCESS',
      subItems: [
         "'JUST SIT BACK AND LET US HANDLE THINGS UNTIL WE REACH OUT THROUGH AN EMAIL/SMS ETC'",
         'PROVIDING GENERAL TIMELINE BASED ON ASSETS OF THE DECEASED. (E.G. MORTGAGE + SAVINGS ACCOUNT WILL TAKE LONGER THAN SAVINGS ACCOUNT - SO THIS NEEDS TO BE TAKEN IN MIND)',
         'CLARIFICATION/ASSISTANCE FOR OVERSEAS DOCUMENTATION AND TRANSLATION ETC.',
      ],
   },
   {
      text: 'INTEGRATING THE CASE MANAGER PIPELINE WITH DOCUMENT SUBMISSION SO THEIR TIME CAN BE FULLY UTILISED',
   },
]

const HEURISTIC_ISSUES: readonly IssuesTableRow[] = [
   {
      issue: 'Clarifying between steps and additional information',
      solution: 'Include a detailed FAQ section',
   },
   {
      issue: 'Journey requires greater empathy',
      solution:
         'Considerate verbiage and generosity should be a tone maintained throughout the experience',
   },
   {
      issue: 'Remove extra steps within the current online form',
      solution:
         'Ability to update + view information that should simultaneously notify the case officer. Things such as email change or inclusion of additional estate assets.',
   },
   {
      issue: 'Thick walls of text',
      solution:
         'Status Updates are present on the home page so immediate action is apparent',
   },
]

const META: readonly CaseStudyMetaItem[] = [
   { label: 'Client', value: 'HSBC' },
   { label: 'Timeline', value: 'Jan 2024 - Mar 2024' },
   { label: 'Team', value: 'Harness Project' },
   { label: 'Activities', value: 'UX Design' },
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
         { id: 'base-insights', label: 'Base Insights' },
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
      children: [
         { id: 'wireframe', label: 'Wireframe' },
         { id: 'lo-fi-design', label: 'Lo-Fi Design' },
         { id: 'final-design', label: 'Final Design' },
      ],
   },
]

/**
 * HSBC Deceased Estate case study. Written sections run through Final Design; research
 * subsections after Competitive Analysis remain scaffolded until their copy is ready.
 */
export default function HsbcDeceasedEstate() {
   return (
      <CaseStudyLayout
         title="HSBC Deceased Estate"
         heroAlt="HSBC Deceased Estate title banner"
         meta={META}
         nav={NAV}
      >
         <CaseStudySection eyebrow="Overview" id="overview">
            <CaseStudyHeading id="background">Background</CaseStudyHeading>
            <CaseStudyBody>
               HSBC is one of the world’s largest banking and financial services
               organizations. They serve more than 40 million customers through our global
               businesses: Wealth and Personal Banking, Commercial Banking, and Global
               Banking &amp; Markets. HSBC’s network covers 64 countries and territories in
               Europe, Asia, the Middle East and Africa, North America and Latin America.
            </CaseStudyBody>

            <CaseStudyHeading id="problem">Problem</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'When a HSBC customer has passed, their Deceased Estate (DE) must be notified to the bank by someone close to them. However, ',
                  },
                  { text: 'the current process is completely offline.', marker: true },
                  {
                     text: ' It relies on Deceased Estate notifiers submitting all required information physically and once submitted they had ',
                  },
                  {
                     text: 'no visibility of their case’s current progress or the timeline till its completion.',
                     marker: true,
                  },
                  {
                     text: ' Oftentimes, these notifiers are not HSBC customers and are thus unfamiliar with this bank but hope for a smooth process.',
                  },
               ]}
            </CaseStudyBody>
            <CaseStudyBody>
               {[
                  {
                     text: 'Depending on the number of assets within the estate, there may be follow up documents or errors with ones that have been submitted. These status updates require constant attention from the notifier who must either phone call or walk to a local branch for information. ',
                  },
                  {
                     text: 'During an arduous time this can be very difficult and frustrating, especially during the handling of a loved one’s passing.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>
            <CaseStudyBody>
               {[
                  {
                     text: 'Internally, the shortsighted-ness of this update halts staff workflow as they wait upon the notifier’s submission. ',
                  },
                  { text: 'Stretching out the process for handling a DE.', marker: true },
                  {
                     text: ' There is no designated case manager to track the status of assets as they are processed in different departments, relying on a network of cross-departmental calls when the notifier asks for an update. On an interpersonal level, ',
                  },
                  {
                     text: 'this leaves the bereaved with no familiar touch point in between each stage.',
                     marker: true,
                  },
                  {
                     text: ' For those within the Deceased Estate team, the lack of a designation for a case means information can be jumbled as it is handled across teams.',
                  },
               ]}
            </CaseStudyBody>

            <QuoteText>Current HSBC deceased customer notification form</QuoteText>
         </CaseStudySection>

         <CaseStudyPlaceholder
            label="Screenshot: current HSBC bereavement support page and notification form"
            ratio="966 / 1200"
         />

         <CaseStudySection>
            <CaseStudyHeading id="solution">Solution</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  { text: 'Through review of research, we decided on ' },
                  {
                     text: 'four focus areas that aimed to create a compassionate and seamless user journey that aligns with the brand.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>

            <CaseStudyCallout title="1. Case Management:">
               It was a system for communicating a case&apos;s current status and its next
               steps &amp; actions.
            </CaseStudyCallout>

            <CaseStudyCallout title="2. Document Management:">
               This aims to simplify submission of documents, increase visibility and
               provide status insights based on progress such as &ldquo;Submitted,
               Reviewed, Approved&rdquo;.
            </CaseStudyCallout>

            <CaseStudyBody>
               {[
                  {
                     text: 'There were two other focus areas (alert systems, digitizing touchpoints). ',
                  },
                  {
                     text: 'I inadvertently included the former alert system as a part of my Case Management System.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>

            <CaseStudyHeading>Design Outcome</CaseStudyHeading>
            <CaseStudyBody>
               The final design was in the form of a webpage which can be accessed via the
               HSBC website and app. It focuses on keeping notifiers informed about the
               timeline of the deceased estate process and being responsive to when document
               submission is required.
            </CaseStudyBody>

            <CaseStudyHeading id="my-contribution">My Contribution</CaseStudyHeading>
            <CaseStudyBody>
               I was in a team of 12 people who worked in parallel through each step of the
               design process to come up with unique interpretations of the solution in the
               hopes of being chosen as the final design to be implemented.
            </CaseStudyBody>
         </CaseStudySection>

         <CaseStudyPillLink href="#solution">Jump to Solution</CaseStudyPillLink>

         <CaseStudyDivider />

         <CaseStudySection eyebrow="Research" id="research">
            <CaseStudyHeading id="base-insights">Base Insights</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'Last year one of our cohort members did a research project that led to ',
                  },
                  {
                     text: 'insights forming the foundation of our solution.',
                     marker: true,
                  },
                  { text: ' These were from an ' },
                  {
                     text: 'internal HSBC UX Research project from JULY 2024.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>

            <CaseStudySubHeading tone="light">
               Inefficient Communication Flow
            </CaseStudySubHeading>
            <p className="m-0 font-body text-[17px] font-bold leading-[1.6] text-base">
               Solution: Customer Portal
            </p>
            <CaseStudyBody>
               Currently, communication relies on phone calls and emails, which can lead to
               delays, miscommunication, and a lack of transparency for customers. While
               these methods allow one-to-one communication, they fall short when it comes
               to providing real-time updates and self-service features.
            </CaseStudyBody>
            <CaseStudyBulletList items={COMMUNICATION_FLOW_BULLETS} />

            <CaseStudySubHeading tone="light">
               Manual Data Handling and Documentation Complexity
            </CaseStudySubHeading>
            <p className="m-0 font-body text-[17px] font-bold leading-[1.6] text-base">
               Solution: Digital form submission
            </p>
            <CaseStudyBody>
               Allow customers to fill out and submit forms digitally through the portal or
               bereavement page, eliminating the need for physical mail.
            </CaseStudyBody>
            <CaseStudyBulletList items={DOCUMENT_COMPLEXITY_BULLETS} />

            <CaseStudyHeading id="stakeholder-interview">
               Stakeholder Interview
            </CaseStudyHeading>
            <CaseStudyBody>
               This was performed to align ourselves with the clients interest and to be
               briefed on their wants out of this design phase.
            </CaseStudyBody>

            <CaseStudySubHeading tone="light" bold>Key Things Noticed</CaseStudySubHeading>
            <QuoteBulletList items={STAKEHOLDER_NOTICED} />

            <CaseStudyPlaceholder
               label="Client Interview Script Miro board"
               ratio="966 / 520"
               caption="Client Interview Script"
            />

            <CaseStudyHeading id="competitive-analysis">
               Heuristic Analysis &amp; Competitive Analysis
            </CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'As a complete design novice at the start of this project, I made sure to complete a Heuristic Analysis on the HSBC bereavement page. From here, ',
                  },
                  {
                     text: 'assessing its tone and contents was a keystone in developing the new process.',
                     marker: true,
                  },
                  { text: ' Furthermore, ' },
                  {
                     text: 'assessing how other companies who deal with people during times of crisis',
                     marker: true,
                  },
                  {
                     text: ' informed a competitive analysis on three existing brands.',
                  },
               ]}
            </CaseStudyBody>

            <CaseStudySubHeading tone="light" bold>
               HSBC Bereavement page
            </CaseStudySubHeading>
            <CaseStudyPlaceholder
               label="Screenshot: existing HSBC bereavement support page"
               ratio="966 / 620"
            />

            <CaseStudySubHeading tone="light" bold>
               Competitive Analysis
            </CaseStudySubHeading>
            <CaseStudyPlaceholder
               label="Competitive analysis chart: HSBC, NRMA, and Medicare"
               ratio="966 / 480"
               caption="Competitive Analysis"
            />

            <CaseStudyBody>
               Analysing the existing bereavement page helped me brainstorm a list of ideas
               on how I want to tackle Case and Document management. These needs were
               translated into potential solutions through the portal creation
            </CaseStudyBody>

            <CaseStudyIssuesTable rows={HEURISTIC_ISSUES} />

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
            <CaseStudyHeading id="wireframe">Wireframe</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  { text: 'The focus was on a ' },
                  {
                     text: 'simple pipeline that would leave users with minimal cognitive load during this time.',
                     marker: true,
                  },
               ]}
            </CaseStudyBody>
            <CaseStudyBody>
               {[
                  { text: 'I began to storyboard pages that would be needed. ' },
                  {
                     text: "Three core features I'd need to ensure are included is an editable notifier's details page, a progress page and a document upload page",
                     marker: true,
                  },
                  {
                     text: ', so clients stay up to date and can easily submit paperwork to a case manager.',
                  },
               ]}
            </CaseStudyBody>

            <CaseStudyPlaceholder
               label="Hand-drawn wireframe storyboards"
               ratio="966 / 720"
            />

            <CaseStudyHeading id="lo-fi-design">Lo-Fi Design</CaseStudyHeading>

            <CaseStudySubHeading tone="light" bold>
               Homepage: Estate Progress
            </CaseStudySubHeading>
            <CaseStudyBody>
               {[
                  {
                     text: 'Feedback for the homepage progress page should include adjusting the progress bar to ',
                  },
                  {
                     text: 'include estimated dates for step completion.',
                     marker: true,
                  },
                  { text: ' The notifier should see ' },
                  { text: 'names of future steps', marker: true },
                  { text: ' and a ' },
                  { text: 'history of past steps already completed.', marker: true },
               ]}
            </CaseStudyBody>

            <CaseStudySubHeading tone="light" bold>
               Document Page
            </CaseStudySubHeading>
            <CaseStudyBody>
               {[
                  { text: 'Users must have the ' },
                  { text: 'capability to delete files', marker: true },
                  {
                     text: ' they have uploaded. The page should allow for ',
                  },
                  {
                     text: 'status feedback from the case manager',
                     marker: true,
                  },
                  {
                     text: ' (e.g., pending, approved, or error notifications with explanations).',
                  },
               ]}
            </CaseStudyBody>

            <CaseStudySubHeading tone="light" bold>
               Settlement
            </CaseStudySubHeading>
            <CaseStudyBody>
               {[
                  { text: 'A ' },
                  { text: "'settlement page' needs to be added", marker: true },
                  { text: ' for when an estate is finalized. This page allows the notifier to ' },
                  {
                     text: "access and handle the deceased's accounts and money.",
                     marker: true,
                  },
               ]}
            </CaseStudyBody>

            <CaseStudyPlaceholder
               label="Lo-fi mobile wireframes: case list, progress, profile, notifier, and documents"
               ratio="966 / 520"
            />

            <CaseStudyHeading id="final-design">Final Design</CaseStudyHeading>
            <CaseStudyBody>
               {[
                  {
                     text: "The Final Design incorporated all the notes from the previous step and included HSBC's branding style. ",
                  },
                  {
                     text: 'This was the prototype I presented to the HSBC stakeholder,',
                     marker: true,
                  },
                  {
                     text: ' although we were unable to find time for an additional usability test.',
                  },
               ]}
            </CaseStudyBody>

            <CaseStudyPlaceholder
               label="Final hi-fi mobile screens: home, documents, progress, notifier, settlement, and quick links"
               ratio="966 / 620"
            />
         </CaseStudySection>
      </CaseStudyLayout>
   )
}
