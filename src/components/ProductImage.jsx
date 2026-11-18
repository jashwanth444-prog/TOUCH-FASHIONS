import { useState } from 'react'

/**
 * Product photography with a graceful fallback.
 * A missing or broken file shows a clearly marked placeholder instead of a
 * broken image icon. Photographs are never desaturated or filtered.
 */
export default function ProductImage({ src, alt, className = '', priority = false }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className={`image-fallback ${className}`.trim()} role="img" aria-label={`${alt} — photograph coming soon`}>
        <span>Photograph coming soon</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
