import { useCallback, useEffect, useRef, useState } from 'react'
import { videos } from '../data/videos'
import { IconChevronLeft, IconChevronRight } from './Icons'

const TOTAL = videos.length

const pad = (value) => String(value).padStart(2, '0')

/**
 * Position of a slide relative to the active one, with looping:
 * -1 = left panel, 0 = centre panel, 1 = right panel.
 */
function relativePosition(index, active) {
  const distance = (index - active + TOTAL) % TOTAL
  if (distance === 0) return 0
  return distance === 1 ? 1 : -1
}

export default function VideoCarousel() {
  const [active, setActive] = useState(0)
  const [failed, setFailed] = useState({})
  const [inView, setInView] = useState(false)
  const videoRefs = useRef([])
  const sectionRef = useRef(null)

  const goTo = useCallback((index) => {
    setActive(((index % TOTAL) + TOTAL) % TOTAL)
  }, [])

  const step = useCallback((direction) => {
    setActive((current) => (current + direction + TOTAL) % TOTAL)
  }, [])

  // Run the three clips only while the carousel is on screen, so the page
  // stays light when the visitor is reading other sections.
  useEffect(() => {
    const section = sectionRef.current
    if (!section || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px 0px', threshold: 0.1 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Every slide plays its own video (muted + loop); all pause when off screen.
  // Mobile browsers and power-saving modes can pause a muted inline video on
  // their own, so playback is also retried when the page or the visitor
  // becomes active again.
  useEffect(() => {
    const playAll = () => {
      videoRefs.current.forEach((element) => {
        if (!element || !element.paused) return
        const playback = element.play()
        if (playback && typeof playback.catch === 'function') playback.catch(() => {})
      })
    }

    if (!inView) {
      videoRefs.current.forEach((element) => {
        if (element) element.pause()
      })
      return undefined
    }

    playAll()

    const onVisibility = () => {
      if (!document.hidden) playAll()
    }

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pointerdown', playAll)
    window.addEventListener('keydown', playAll)
    window.addEventListener('touchstart', playAll, { passive: true })

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointerdown', playAll)
      window.removeEventListener('keydown', playAll)
      window.removeEventListener('touchstart', playAll)
    }
  }, [inView])

  // Stop playback when the section unmounts.
  useEffect(
    () => () => {
      videoRefs.current.forEach((element) => {
        if (element) element.pause()
      })
    },
    [],
  )

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      step(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      step(1)
    }
  }

  return (
    <section
      className="section carousel-section"
      id="videos"
      aria-labelledby="videos-title"
      ref={sectionRef}
    >
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Casual &middot; Formal &middot; Sports</p>
          <h2 className="section-title" id="videos-title">
            Explore The Style
          </h2>
          <p className="lede">
            Discover men&rsquo;s fashion for every moment, every occasion and every
            lifestyle.
          </p>
        </header>

        <div
          className="carousel"
          role="group"
          aria-roledescription="carousel"
          aria-label="Men's fashion videos"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <button
            type="button"
            className="carousel-arrow carousel-arrow--prev"
            onClick={() => step(-1)}
            aria-label="Previous video"
          >
            <IconChevronLeft size={22} />
          </button>

          <div className="carousel-stage">
            {videos.map((video, index) => {
              const position = relativePosition(index, active)
              const state = position === 0 ? 'center' : position === 1 ? 'right' : 'left'
              const isActive = position === 0
              const showVideo = Boolean(video.src) && !failed[video.id]

              return (
                <div
                  className={`carousel-slide carousel-slide--${state}`}
                  key={video.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${TOTAL}: ${video.name}`}
                  aria-hidden={!isActive}
                >
                  {showVideo ? (
                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element
                      }}
                      className="carousel-video"
                      src={video.src}
                      poster={video.poster}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      aria-label={video.description}
                      onError={() => setFailed((prev) => ({ ...prev, [video.id]: true }))}
                    />
                  ) : (
                    <>
                      <img
                        className="carousel-poster"
                        src={video.poster}
                        alt={video.description}
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                      <span className="carousel-badge">Video coming soon</span>
                    </>
                  )}

                  <div className="carousel-caption">
                    <p className="carousel-index">{pad(index + 1)}</p>
                    <h3 className="carousel-label">{video.name}</h3>
                  </div>

                  {!isActive && (
                    <button
                      type="button"
                      className="carousel-hit"
                      onClick={() => goTo(index)}
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <span className="visually-hidden">{`Show ${video.name}`}</span>
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow--next"
            onClick={() => step(1)}
            aria-label="Next video"
          >
            <IconChevronRight size={22} />
          </button>

          <div className="carousel-meta">
            <p className="carousel-counter" aria-live="polite" aria-atomic="true">
              <span className="visually-hidden">Video </span>
              <span className="counter-current">{pad(active + 1)}</span>
              <span className="counter-sep" aria-hidden="true">
                &mdash;
              </span>
              <span className="counter-total">{pad(TOTAL)}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
