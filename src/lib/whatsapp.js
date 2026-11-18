import { contact } from '../data/contact'
import { formatPrice } from '../data/products'

/**
 * Builds the enquiry message exactly as specified, with the real product,
 * category, collection, size and colour filled in.
 */
export function buildEnquiryMessage({ product, categoryName, subcategoryName, size, colour }) {
  return [
    'Hello Shopping Fashions!',
    '',
    'I am interested in purchasing this product.',
    '',
    `Product Name: ${product.name}`,
    `Price: ${formatPrice(product.price)}`,
    `Category: ${categoryName}`,
    `Collection: ${subcategoryName}`,
    `Size: ${size}`,
    `Colour: ${colour}`,
    '',
    'Please confirm whether this product is available.',
    '',
    'Thank you!',
  ].join('\n')
}

/**
 * https://wa.me/<number>?text=<url-encoded message>
 * The number lives in src/data/contact.js and is a placeholder for now.
 */
export function buildWhatsAppUrl(message) {
  const number = String(contact.whatsappNumber || '').replace(/[^\d]/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
