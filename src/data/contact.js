/**
 * ============================================================
 *  CONTACT DETAILS - TEMPORARY PLACEHOLDERS
 * ============================================================
 * Every value below is a clear placeholder. No real phone number,
 * handle, address or map location is invented anywhere on the site.
 *
 * Replace these values with your real details. Nothing else in the
 * project needs to be edited - the header, contact section and the
 * footer all read from this single file.
 */
export const contact = {
  // Shown as a small note under the contact icons.
  placeholderNote:
    'Temporary placeholder contact details. Replace them in src/data/contact.js.',

  /* ==========================================================
     >>> ENTER YOUR REAL WHATSAPP NUMBER HERE <<<
     International format, digits only - no +, spaces or dashes.
     Example: an Indian number 98765 43210 becomes '919876543210'.
     This single value is used by every "WhatsApp Enquiry" button.
     ========================================================== */
  whatsappNumber: '000000000000',

  whatsapp: {
    label: 'WhatsApp',
    value: '+00 00000 00000',
    // Replace with your number, international format, digits only.
    href: 'https://wa.me/000000000000',
  },
  instagram: {
    label: 'Instagram',
    value: '@your_instagram_handle',
    href: 'https://instagram.com/your_instagram_handle',
  },
  phone: {
    label: 'Phone',
    value: '+00 00000 00000',
    href: 'tel:+00000000000',
  },
  location: {
    label: 'Location',
    value: 'Your store address',
    href: 'https://www.google.com/maps/search/?api=1&query=your+store+address',
  },
}

/** Ordered list used by the contact section and the footer icon row. */
export const contactLinks = [
  { key: 'whatsapp', ...contact.whatsapp },
  { key: 'instagram', ...contact.instagram },
  { key: 'phone', ...contact.phone },
  { key: 'location', ...contact.location },
]
