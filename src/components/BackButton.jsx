import { Link } from 'react-router-dom'
import { IconArrowLeft } from './Icons'

/**
 * Shared back navigation.
 *
 * Always links to the real parent page, so it keeps working after a refresh,
 * on a direct URL and in a new tab — it never relies on browser history.
 *
 * - to:    parent route, e.g. "/" or "/casual-wear/shirts"
 * - label: contextual wording, e.g. "Back to Shirts"
 */
export default function BackButton({ to, label }) {
  return (
    <Link className="back-button" to={to}>
      <IconArrowLeft size={18} />
      <span>{label}</span>
    </Link>
  )
}
