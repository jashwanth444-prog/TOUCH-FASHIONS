import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { IconWhatsApp } from './Icons'
import { brand, navigation } from '../data/brand'
import { contact } from '../data/contact'

// WhatsApp destination comes from the single contact config — no number is
// invented here. Falls back to the configured href if the number is empty.
const whatsappDigits = String(contact.whatsappNumber || '').replace(/[^\d]/g, '')
const whatsappHref = whatsappDigits ? `https://wa.me/${whatsappDigits}` : contact.whatsapp.href

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu with Escape.
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Close the menu if the viewport grows into the desktop layout.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1201px)')
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="announcement-bar">
        <p className="announcement-text">
          <span>{brand.name}</span>
          <span className="announcement-dot" aria-hidden="true">
            &bull;
          </span>
          <span>Premium Men&rsquo;s Fashion Collection</span>
        </p>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link
            className="brand-link"
            to="/"
            onClick={closeMenu}
            aria-label={`${brand.name} — back to top`}
          >
            <Logo className="brand-logo" />
          </Link>

          <nav
            id="primary-navigation"
            className={`primary-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Primary"
          >
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link className="nav-link" to={item.to} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a
              className="header-whatsapp"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <IconWhatsApp size={17} />
              <span>Chat with us</span>
            </a>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className={`menu-icon ${menuOpen ? 'is-open' : ''}`} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
