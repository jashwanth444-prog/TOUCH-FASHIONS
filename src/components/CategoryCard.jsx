import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'

/** True when the visitor has asked the system for reduced motion. */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return reduced
}

/**
 * Homepage collection card with cinematic background video.
 *
 * - The video is only loaded once the card is near the viewport, so the
 *   homepage stays light on first paint.
 * - Playback is muted, looping and inline (mobile safe), with no controls.
 * - The still photograph is used when the visitor prefers reduced motion or if
 *   a video file is missing, so the card never appears empty.
 */
export default function CategoryCard({ category }) {
  const videoRef = useRef(null)
  const cardRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()
  const [inView, setInView] = useState(false)
  const [failed, setFailed] = useState(false)

  const hasVideo = Boolean(category.video) && !failed && !reducedMotion
  const shouldLoad = hasVideo && inView

  // Load and play only while the card is close to the viewport.
  useEffect(() => {
    const card = cardRef.current
    if (!card || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '250px 0px', threshold: 0.15 },
    )
    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (shouldLoad) {
      const playback = video.play()
      if (playback && typeof playback.catch === 'function') playback.catch(() => {})
    } else {
      video.pause()
    }
  }, [shouldLoad])

  return (
    <Link className="category-card" id={category.id} to={`/${category.slug}`} ref={cardRef}>
      <div className="category-media">
        {hasVideo ? (
          <>
            <video
              ref={videoRef}
              className="category-video"
              src={shouldLoad ? category.video : undefined}
              poster={category.poster}
              muted
              loop
              playsInline
              autoPlay
              preload={shouldLoad ? 'auto' : 'none'}
              aria-label={category.videoAlt || category.imageAlt || category.shortName}
              onError={() => setFailed(true)}
            />
            <span className="category-shade" aria-hidden="true" />
          </>
        ) : (
          <ProductImage
            className="category-img"
            src={category.image}
            alt={category.imageAlt || category.shortName}
          />
        )}
      </div>
      <div className="category-body">
        <h3 className="category-name">{category.name}</h3>
        <p className="category-desc">{category.description}</p>
        <span className="btn btn--outline btn--sm">Explore Collection</span>
      </div>
    </Link>
  )
}
