import { contact, contactLinks } from '../data/contact'
import { contactIcons } from './Icons'

export default function ContactSection() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">We&rsquo;re Happy To Help</p>
          <h2 className="section-title" id="contact-title">
            Contact Us
          </h2>
          <p className="lede">
            Reach us on WhatsApp or Instagram, call the store, or find us on the map.
          </p>
        </header>

        <div className="contact-grid">
          {contactLinks.map((link) => {
            const Icon = contactIcons[link.key]
            return (
              <a
                className="contact-tile"
                key={link.key}
                href={link.href}
                target={link.key === 'phone' ? undefined : '_blank'}
                rel={link.key === 'phone' ? undefined : 'noreferrer'}
                aria-label={`${link.label}: ${link.value}`}
              >
                <span className="contact-tile-icon">
                  <Icon size={24} />
                </span>
                <span className="contact-tile-text">
                  <span className="contact-tile-label">{link.label}</span>
                  <span className="contact-tile-value">{link.value}</span>
                </span>
              </a>
            )
          })}
        </div>

        <p className="contact-note">{contact.placeholderNote}</p>
      </div>
    </section>
  )
}
