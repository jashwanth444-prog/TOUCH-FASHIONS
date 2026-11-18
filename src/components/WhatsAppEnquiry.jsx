import { useState } from 'react'
import { IconWhatsApp } from './Icons'
import { buildEnquiryMessage, buildWhatsAppUrl } from '../lib/whatsapp'

/**
 * WhatsApp enquiry button.
 *
 * Until both a size and a colour are chosen the link is inert: clicking it
 * blocks navigation and asks the customer to complete the selection. Once both
 * are chosen the href is the real, URL-encoded wa.me link with the full product
 * message. The customer still presses Send inside WhatsApp - nothing is sent
 * automatically from this site.
 */
export default function WhatsAppEnquiry({
  product,
  categoryName,
  subcategoryName,
  size,
  colour,
  onValidationError,
}) {
  const [localError, setLocalError] = useState('')
  const ready = Boolean(size && colour)

  const message = ready
    ? buildEnquiryMessage({ product, categoryName, subcategoryName, size, colour })
    : ''
  const href = ready ? buildWhatsAppUrl(message) : '#'

  const handleClick = (event) => {
    if (!ready) {
      event.preventDefault()
      const missing = []
      if (!size) missing.push('size')
      if (!colour) missing.push('colour')
      const text = `Please choose a ${missing.join(' and ')}.`
      setLocalError(text)
      if (onValidationError) onValidationError(text)
    }
  }

  return (
    <div className="enquiry">
      <a
        className="btn btn--solid enquiry-btn"
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        aria-disabled={!ready}
        data-ready={ready ? 'true' : 'false'}
      >
        <IconWhatsApp size={18} />
        <span>WhatsApp Enquiry</span>
      </a>
      {localError ? (
        <p className="enquiry-error" role="alert">
          {localError}
        </p>
      ) : null}
      <p className="enquiry-note">
        Your enquiry opens in WhatsApp with the product details filled in. Press Send
        there to reach the shop.
      </p>
    </div>
  )
}