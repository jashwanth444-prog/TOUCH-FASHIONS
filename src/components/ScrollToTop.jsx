import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Sends every new page to the top, except when the URL carries a section hash
 * (for example the homepage "About Us" link), where it scrolls to that section.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
