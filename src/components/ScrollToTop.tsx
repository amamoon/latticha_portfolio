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
         document.getElementById(hash.slice(1))?.scrollIntoView()
         return
      }

      window.scrollTo(0, 0)
   }, [pathname, hash])

   return null
}
