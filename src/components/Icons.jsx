/**
 * Simple, elegant line icons used across the interface.
 * They inherit colour from their parent and never affect photography.
 */

function Svg({ size = 24, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export function IconWhatsApp(props) {
  return (
    <Svg {...props}>
      <path d="M20.5 11.6a8.4 8.4 0 0 1-.72 3.36 8.5 8.5 0 0 1-7.62 4.72 8.4 8.4 0 0 1-3.48-.78L3.5 20.5l1.62-5.02a8.4 8.4 0 0 1-.78-3.5 8.5 8.5 0 0 1 4.62-7.6 8.4 8.4 0 0 1 3.6-.8h.5a8.5 8.5 0 0 1 7.44 7.44z" />
      <path d="M9.2 8.6c.28.02.6.04.82.5l.56 1.24c.1.24.06.38-.1.58l-.42.5c-.14.16-.16.3-.06.5.4.76 1.5 2.02 2.9 2.7.22.1.34.06.48-.1l.5-.54c.16-.18.3-.2.5-.12l1.2.6c.22.12.34.16.4.28.06.14.06.72-.34 1.24-.4.52-1.1.86-1.7.78-1.1-.14-2.6-.94-3.96-2.24-1.3-1.28-2.14-2.5-2.28-3.4-.08-.6.28-1.3.8-1.7.2-.16.5-.22.7-.22z" />
    </Svg>
  )
}

export function IconInstagram(props) {
  return (
    <Svg {...props}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </Svg>
  )
}

export function IconPhone(props) {
  return (
    <Svg {...props}>
      <path d="M21 16.5v2.6a1.8 1.8 0 0 1-2 1.8 17.6 17.6 0 0 1-7.7-2.74 17.4 17.4 0 0 1-5.35-5.35A17.6 17.6 0 0 1 3.2 5.1a1.8 1.8 0 0 1 1.8-2h2.6a1.8 1.8 0 0 1 1.8 1.55c.12.9.34 1.78.66 2.62a1.8 1.8 0 0 1-.4 1.9l-1.1 1.1a14.2 14.2 0 0 0 5.5 5.5l1.1-1.1a1.8 1.8 0 0 1 1.9-.4c.84.32 1.72.54 2.62.66A1.8 1.8 0 0 1 21 16.5z" />
    </Svg>
  )
}

export function IconMapPin(props) {
  return (
    <Svg {...props}>
      <path d="M20 10.4c0 5.4-8 11.6-8 11.6s-8-6.2-8-11.6a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10.2" r="2.9" />
    </Svg>
  )
}

export function IconStar(props) {
  return (
    <Svg {...props}>
      <path d="M12 3.2l2.72 5.63 6.08.86-4.44 4.3 1.08 6.07L12 17.2l-5.44 2.86 1.08-6.07-4.44-4.3 6.08-.86z" />
    </Svg>
  )
}

export function IconShirt(props) {
  return (
    <Svg {...props}>
      <path d="M8.6 3.4 12 5.3l3.4-1.9 5.1 3.2-2.1 3.5-1.9-1v11.3H6.5V9.1l-1.9 1L2.5 6.6z" />
    </Svg>
  )
}

export function IconLayers(props) {
  return (
    <Svg {...props}>
      <path d="M12 2.9l9.2 4.8-9.2 4.8L2.8 7.7z" />
      <path d="M2.8 12.2 12 17l9.2-4.8" />
      <path d="M2.8 16.4 12 21.2l9.2-4.8" />
    </Svg>
  )
}

export function IconArrowLeft(props) {
  return (
    <Svg {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </Svg>
  )
}

export function IconChevronLeft(props) {
  return (
    <Svg {...props}>
      <path d="M15 4.5 7.5 12l7.5 7.5" />
    </Svg>
  )
}

export function IconChevronRight(props) {
  return (
    <Svg {...props}>
      <path d="M9 4.5 16.5 12 9 19.5" />
    </Svg>
  )
}

/** Icon lookup for the contact links defined in src/data/contact.js */
export const contactIcons = {
  whatsapp: IconWhatsApp,
  instagram: IconInstagram,
  phone: IconPhone,
  location: IconMapPin,
}
