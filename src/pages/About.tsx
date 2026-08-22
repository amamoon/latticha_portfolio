import paperTexture from '@/assets/about/paper-texture.webp'
import portraitSrc from '@/assets/about/portrait.webp'
import starIcon from '@/assets/homepage/staricon.svg'
import { QuoteBlock } from '@/components/case-study/CaseStudyBlocks'
import { RichText, type TextSegment } from '@/components/RichText'

/** Contact address shown in the sign-off line. */
const CONTACT_EMAIL = 'l.witchandguls@gmail.com'

/** Opening line under the title. */
const INTRO_SEGMENTS: readonly TextSegment[] = [
   {
      text: 'A multi-disciplinary product designer based in Sydney with experience in ',
   },
   { text: 'Consumer Products', underline: true },
   { text: ' and ' },
   { text: 'UX Design', underline: true },
   { text: '.' },
]

/** Quoted highlights, each rendered against a light-blue rule. */
const HIGHLIGHTS: ReadonlyArray<readonly TextSegment[]> = [
   [
      { text: 'I designed the website for ' },
      { text: 'ATA', accent: true },
      { text: ', ' },
      { text: 'WELCOME HOME MERCH STORE', accent: true },
      { text: ' and the website you’re on right now' },
   ],
   [
      { text: 'I’ve contributed to the development of over 100 consumer products at ' },
      { text: 'GLITCH PRODUCTIONS', accent: true },
   ],
   [
      { text: 'I was the main editor and layout artist for the ' },
      { text: 'KNIGHTS OF GUINEVERE ARTBOOK', accent: true },
   ],
]

/** Personal aside beside the star. */
const ASIDE_TEXT =
   'I have two cats Merlin & Dante, I love peppermint tea and I’m really into bookbinding at the moment.'

/**
 * About page: introduction, career highlights, personal aside, and contact line,
 * with the portrait mounted on a textured paper mat.
 */
export default function About() {
   return (
      <main className="min-h-dvh bg-background px-4 pb-16 pt-8 md:px-6 md:pt-14">
         <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14 xl:gap-20">
            <div className="flex min-w-0 flex-1 flex-col lg:max-w-152.5">
               <h1 className="m-0 font-display text-[clamp(1.75rem,4vw,2.25rem)] font-normal leading-normal text-brand-blue">
                  Hi, I’m Latticha.
               </h1>

               <div className="flex flex-col gap-5.75 pt-8 md:pt-10">
                  <p className="m-0 font-display text-[clamp(1.0625rem,1.6vw,1.25rem)] font-normal leading-[1.3] text-base-dark">
                     <RichText segments={INTRO_SEGMENTS} />
                  </p>

                  <ul className="m-0 flex list-none flex-col gap-5.75 p-0">
                     {HIGHLIGHTS.map((segments, index) => (
                        <li key={index}>
                           <QuoteBlock>
                              <p className="m-0 font-body text-[clamp(1.0625rem,1.6vw,1.25rem)] font-normal leading-[1.6] text-base-dark">
                                 <RichText segments={segments} />
                              </p>
                           </QuoteBlock>
                        </li>
                     ))}
                  </ul>

                  <div className="flex items-center gap-5.75">
                     <img
                        src={starIcon}
                        alt=""
                        width={33}
                        height={33}
                        className="size-8.25 shrink-0"
                        aria-hidden={true}
                     />
                     <p className="m-0 min-w-0 flex-1 font-body text-[clamp(1.0625rem,1.6vw,1.25rem)] font-normal leading-[1.6] text-light-blue">
                        {ASIDE_TEXT}
                     </p>
                  </div>

                  <div className="flex flex-col gap-2">
                     <p className="m-0 font-display text-[clamp(1.0625rem,1.6vw,1.25rem)] font-normal leading-[1.8] text-base-dark">
                        Feel free to contact me at{' '}
                        <a
                           href={`mailto:${CONTACT_EMAIL}`}
                           className="text-brand-blue underline decoration-from-font transition-colors hover:text-light-blue focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                        >
                           {CONTACT_EMAIL}
                        </a>
                     </p>
                     <p className="m-0 font-display text-[clamp(1.0625rem,1.6vw,1.25rem)] font-normal leading-[1.8] text-base/50">
                        (Resume is given upon request)
                     </p>
                  </div>
               </div>
            </div>

            <div
               className="w-full max-w-120.75 shrink-0 self-center bg-cover bg-center p-4.5 lg:mt-18 lg:w-[42%] lg:self-start"
               style={{ backgroundImage: `url(${paperTexture})` }}
            >
               <img
                  src={portraitSrc}
                  alt="Latticha smiling in front of a wall covered in handwritten notes"
                  width={762}
                  height={762}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-square w-full object-cover"
               />
            </div>
         </div>
      </main>
   )
}
