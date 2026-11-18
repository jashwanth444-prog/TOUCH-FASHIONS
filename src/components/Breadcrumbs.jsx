import { Link } from 'react-router-dom'

/**
 * Breadcrumb trail. Every crumb except the current page is a working link.
 * items: [{ label, to }]
 */
export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`}>
              {isLast || !item.to ? (
                <span className="crumb-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link className="crumb-link" to={item.to}>
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <span className="crumb-sep" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
