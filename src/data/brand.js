/**
 * Central brand configuration.
 *
 * ============================================================
 *  LOGO - THE ORIGINAL UPLOADED FILE MUST BE USED UNCHANGED
 * ============================================================
 * The logo image is displayed exactly as supplied: no redesign,
 * no text recreation, no cropping, no stretching. Its natural
 * aspect ratio is preserved by CSS (height fixed, width auto).
 *
 * The untouched original file stays at public/assets/logo/logo.jpg.
 * The site displays logo-transparent.png: the same artwork, trimmed of its
 * empty white margins and saved with a transparent background so it sits
 * cleanly on the white header. Neither version is redrawn or stretched.
 */
export const brand = {
  // Brand name used for the link label, page title and footer wordmark.
  name: 'SHOPPING FASHIONS',
  // Logo shown on the site: the original artwork, tightly cropped and with
  // its white background removed (transparent PNG). The untouched original
  // stays at public/assets/logo/logo.jpg.
  logo: '/assets/logo/logo-transparent.png',
  // Alt text for the logo image.
  logoAlt: 'Touch Fashions shop logo',
  description:
    'Shopping Fashions brings together classic designs, comfortable fits and fashionable collections for everyday wear, professional occasions and active lifestyles.',
  copyright: '© 2026 Shopping Fashions. All Rights Reserved.',
}

/**
 * Primary header / footer navigation.
 * Category links open real category pages; the two section links return to the
 * homepage and scroll to that section.
 */
export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Casual Wear', to: '/casual-wear' },
  { label: 'Formal Wear', to: '/formal-wear' },
  { label: 'Sports Wear', to: '/sports-wear' },
  { label: 'About Us', to: '/#about' },
  { label: 'Contact Us', to: '/#contact' },
]
