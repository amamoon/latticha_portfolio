import type { ReactNode } from 'react'

/** Background tint: darker vs lighter semi-transparent blue. */
export type TagPillVariant = 'dark-blue' | 'light-blue'

export type TagPillProps = {
   children: ReactNode
   /** Pill background; both use the semi-transparent blues from `@theme`. */
   variant?: TagPillVariant
   className?: string
}

const variantClass: Record<TagPillVariant, string> = {
   'dark-blue': 'bg-tag-blue',
   'light-blue': 'bg-tag-light-blue',
}

/**
 * Rounded tag: frosted blue pill, Vollkorn italic (`font-italic` + `italic`), white label text.
 */
export function TagPill({
   children,
   variant = 'dark-blue',
   className = '',
}: TagPillProps) {
   return (
      <span
         className={`inline-flex max-w-full items-center rounded-full px-3 py-1 text-tag font-italic italic text-white antialiased ${variantClass[variant]} ${className}`.trim()}
      >
         {children}
      </span>
   )
}
