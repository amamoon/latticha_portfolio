/**
 * Inline run of copy with optional emphasis. Compose an array of these to mix plain and
 * emphasised text inside one paragraph.
 */
export type TextSegment = {
   text: string
   /** Brand-blue emphasis, used for project, studio, and client names. */
   accent?: boolean
   /** Yellow highlighter band behind the text (case-study body copy). */
   marker?: boolean
   /** Semibold emphasis for inline labels inside lists. */
   bold?: boolean
   underline?: boolean
}

export type RichTextProps = {
   segments: readonly TextSegment[]
}

/**
 * Renders segments as one continuous run of text, applying accent colour, marker
 * highlight, and underline per segment.
 */
export function RichText({ segments }: RichTextProps) {
   return (
      <>
         {segments.map((segment, index) => {
            const className = [
               segment.accent ? 'text-brand-blue' : '',
               segment.marker ? 'bg-marker box-decoration-clone' : '',
               segment.bold ? 'font-bold' : '',
               segment.underline ? 'underline decoration-from-font' : '',
            ]
               .filter(Boolean)
               .join(' ')

            return (
               <span key={index} className={className || undefined}>
                  {segment.text}
               </span>
            )
         })}
      </>
   )
}
