import { brand } from '../data/brand'

/**
 * Displays the ORIGINAL uploaded logo file exactly as supplied.
 *
 * Nothing here redraws, retypes, recolours, crops or stretches the logo:
 * the image is rendered at a fixed height with `width: auto` and
 * `object-fit: contain`, so its natural proportions are always preserved.
 */
export default function Logo({ className = '' }) {
  return (
    <img
      className={`logo-img ${className}`.trim()}
      src={brand.logo}
      alt={brand.logoAlt}
      width={3071}
      height={2413}
      decoding="async"
    />
  )
}
