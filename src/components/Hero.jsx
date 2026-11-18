import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/heroSlides'

/**
 * Homepage hero slider.
 *
 * Premium black editorial split composition: copy and CTA on the left over a
 * near-black canvas, a large full-body fashion photograph on the right. Nine
 * photographs run in a fixed order, two seconds each, with a 0.5s crossfade.
 *
 * Every slide owns one image file and the same file is shown on every device,
 * so the sequence never repeats a photograph. The photograph is fitted with
 * `object-fit: contain`, which keeps the model visible from head to shoes at
 * any viewport size instead of cropping.
 *
 * The copy belongs to the category, not the photograph, so it stays untouched
 * while a category's three photographs play and swaps only at a boundary.
 *
 * If a photograph has not been supplied yet, that slide shows an explicit
 * placeholder naming the missing file — never a stand-in photograph, so a
 * placeholder can never be mistaken for the final campaign imagery.
 */
const SLIDE_MS = 2000

/** Nine photographs, in order, each carrying its category. */
const photos = heroSlides.flatMap((category, categoryIndex) =>
  category.photos.map((photo) => ({ ...photo, category, categoryIndex })),
)

const TOTAL = photos.length

const pad = (value) => String(value).padStart(2, '0')

export default function Hero() {
  const [position, setPosition] = useState(0)
  // Only the first photograph and its neighbour start out mounted; the rest
  // join as the slider reaches them, so the browser is never asked for all
  // nine large images at once.
  const [mounted, setMounted] = useState(() => new Set([0, 1]))
  const [missing, setMissing] = useState({})
  const [tabHidden, setTabHidden] = useState(false)

  const current = photos[position]
  const category = current.category
  // Kept opaque underneath while the next photograph fades in over it, so the
  // frame never shows through mid-transition.
  const previousPosition = (position - 1 + TOTAL) % TOTAL

  const advance = useCallback(() => {
    setPosition((value) => (value + 1) % TOTAL)
  }, [])

  // One timer at a time: cleared on every change and on unmount.
  useEffect(() => {
    if (tabHidden) return undefined
    const timer = setTimeout(advance, SLIDE_MS)
    return () => clearTimeout(timer)
  }, [position, advance, tabHidden])

  // Preload the photograph that follows the visible one.
  useEffect(() => {
    setMounted((previous) => {
      const next = new Set(previous)
      next.add(position)
      next.add((position + 1) % TOTAL)
      return next.size === previous.size ? previous : next
    })
  }, [position])

  // Decode the next photograph before its turn, so the 500ms crossfade never
  // starts against a half-decoded image and stutters part-way through.
  useEffect(() => {
    const next = photos[(position + 1) % TOTAL]
    if (!next) return
    const image = new Image()
    image.src = next.image
    if (typeof image.decode === 'function') image.decode().catch(() => {})
  }, [position])

  useEffect(() => {
    const sync = () => setTabHidden(document.hidden)
    sync()
    document.addEventListener('visibilitychange', sync)
    return () => document.removeEventListener('visibilitychange', sync)
  }, [])

  const markMissing = (id) => {
    setMissing((value) => (value[id] ? value : { ...value, [id]: true }))
  }

  const frames = useMemo(
    () =>
      photos.map((photo, index) => ({
        photo,
        index,
        active: index === position,
        previous: index === previousPosition && index !== position,
      })),
    [position, previousPosition],
  )

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__label">{category.label}</p>

          <h1 className="hero__title" id="hero-title">
            {category.heading}
          </h1>

          <p className="hero__copy">{category.description}</p>

          <Link className="btn btn--solid hero__cta" to={category.to}>
            <span>{category.cta}</span>
            <span className="hero__cta-arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>

          <div className="hero__progress">
            <p className="hero__counter">
              <span className="hero__counter-current">{pad(position + 1)}</span>
              <span className="hero__counter-sep">/</span>
              <span className="hero__counter-total">{pad(TOTAL)}</span>
              <span className="visually-hidden">
                {category.label}, photograph {position % 3 + 1} of 3
              </span>
            </p>
          </div>
        </div>

        <figure className="hero__media">
          {frames.map(({ photo, index, active, previous }) => {
            if (!mounted.has(index)) return null
            const isMissing = Boolean(missing[photo.id])

            return (
              <div
                key={photo.id}
                className={`hero__frame${active ? ' is-active' : ''}${
                  previous ? ' is-previous' : ''
                }`}
                aria-hidden={active ? undefined : 'true'}
              >
                {isMissing ? (
                  <div className="hero__placeholder">
                    <span className="hero__placeholder-index">{pad(index + 1)}</span>
                    <span className="hero__placeholder-text">{category.label}</span>
                    <span className="hero__placeholder-file">
                      Photograph not supplied yet
                      <br />
                      {photo.file}
                    </span>
                  </div>
                ) : (
                  <img
                    src={photo.image}
                    alt={active ? photo.alt : ''}
                    width="1000"
                    height="1500"
                    loading="eager"
                    decoding="async"
                    fetchPriority={index === 0 ? 'high' : 'low'}
                    onError={() => markMissing(photo.id)}
                  />
                )}
              </div>
            )
          })}
        </figure>
      </div>
    </section>
  )
}
