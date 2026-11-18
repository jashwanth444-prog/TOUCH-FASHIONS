import { Link } from 'react-router-dom'
import Logo from './Logo'
import { brand, navigation } from '../data/brand'
import { contactLinks } from '../data/contact'
import { contactIcons } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo-plate">
            <Logo />
          </span>
          <p className="footer-name">{brand.name}</p>
          <p className="footer-desc">{brand.description}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <h2 className="footer-title">Explore</h2>
          <ul>
            {navigation.map((item) => (
              <li key={item.label}>
                <Link className="footer-link" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <h2 className="footer-title">Contact</h2>
          <ul className="footer-contact-list">
            {contactLinks.map((link) => {
              const Icon = contactIcons[link.key]
              return (
                <li key={link.key}>
                  <a
                    className="footer-icon"
                    href={link.href}
                    target={link.key === 'phone' ? undefined : '_blank'}
                    rel={link.key === 'phone' ? undefined : 'noreferrer'}
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <Icon size={22} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>{brand.copyright || `© ${year} Shopping Fashions. All Rights Reserved.`}</p>
      </div>
    </footer>
  )
}
