import { useEffect, useState } from 'react'

/** Distance from the viewport top (px) where a heading counts as the current section. */
const ACTIVE_OFFSET_PX = 160

/**
 * Tracks which anchor is currently in view so the section nav can highlight it.
 *
 * @param ids - Element ids to watch, in document order.
 * @returns The id nearest the top of the viewport, or the first id before any scrolling.
 */
export function useActiveSection(ids: readonly string[]): string | undefined {
   const [activeId, setActiveId] = useState<string | undefined>(ids[0])

   useEffect(() => {
      if (ids.length === 0) return

      let frame = 0

      const update = () => {
         frame = 0
         let current = ids[0]

         for (const id of ids) {
            const element = document.getElementById(id)
            if (!element) continue
            if (element.getBoundingClientRect().top <= ACTIVE_OFFSET_PX) current = id
         }

         setActiveId(current)
      }

      const onScroll = () => {
         if (frame !== 0) return
         frame = window.requestAnimationFrame(update)
      }

      update()
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll)

      return () => {
         if (frame !== 0) window.cancelAnimationFrame(frame)
         window.removeEventListener('scroll', onScroll)
         window.removeEventListener('resize', onScroll)
      }
   }, [ids])

   return activeId
}
