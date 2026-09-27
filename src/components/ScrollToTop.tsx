import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll position when the route changes, so following a card from part-way down a
 * listing opens the next page at its top. Routes carrying a hash scroll to that anchor
 * instead. Renders nothing.
 */
export function ScrollToTop() {
   const { pathname, hash } = useLocation()

   useEffect(() => {
      if (hash) {
         const id = hash.slice(1)
         const scrollToHash = () => {
            document.getElementById(id)?.scrollIntoView()
         }
         scrollToHash()
         // Home (and other) sections may not be painted on the first tick after route change.
         const frame = window.requestAnimationFrame(scrollToHash)
         return () => window.cancelAnimationFrame(frame)
      }

      window.scrollTo(0, 0)
   }, [pathname, hash])

   return null
}
