import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Pause,
  Play,
  X,
} from 'lucide-react'
import { PORTFOLIO } from '../data/site'
import SectionHeading from './SectionHeading'

const TOTAL = PORTFOLIO.length
const AUTOPLAY_MS = 4600

export default function Portfolio() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const railRef = useRef(null)
  const touchStart = useRef(null)
  const reduceMotion = useRef(false)
  const active = PORTFOLIO[index]
  const prevIndex = (index - 1 + TOTAL) % TOTAL
  const nextIndex = (index + 1) % TOTAL

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
  }, [])

  const next = useCallback(() => {
    setIndex((current) => (current + 1) % TOTAL)
  }, [])

  const prev = useCallback(() => {
    setIndex((current) => (current - 1 + TOTAL) % TOTAL)
  }, [])

  useEffect(() => {
    if (paused || lightbox || reduceMotion.current) return undefined
    const timer = window.setTimeout(next, AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [index, paused, lightbox, next])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    const thumb = rail.querySelector('[data-active="true"]')
    if (!thumb) return
    const left =
      thumb.offsetLeft - rail.clientWidth / 2 + thumb.clientWidth / 2
    rail.scrollTo({
      left,
      behavior: reduceMotion.current ? 'auto' : 'smooth',
    })
  }, [index])

  useEffect(() => {
    if (!lightbox) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setLightbox(false)
      if (event.key === 'ArrowRight') next()
      if (event.key === 'ArrowLeft') prev()
    }

    document.addEventListener('keydown', onKey)
    document.body.classList.add('is-locked')

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('is-locked')
    }
  }, [lightbox, next, prev])

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (event) => {
    if (touchStart.current == null) return
    const diff = touchStart.current - (event.changedTouches[0]?.clientX ?? 0)
    if (Math.abs(diff) > 42) {
      if (diff > 0) next()
      else prev()
    }
    touchStart.current = null
  }

  return (
    <section id="ourwork" className="section portfolio">
      <div className="container">
        <div className="portfolio-head">
          <SectionHeading
            eyebrow="Portfolio"
            title="OUR"
            accent="work."
            description="A glimpse of the campaigns, events, signage and designs we have delivered for our clients."
          />
          <span className="portfolio-total" data-reveal>
            <strong>{String(TOTAL).padStart(2, '0')}</strong>
            selected projects
          </span>
        </div>

        <div
          className="portfolio-stage"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          data-reveal
        >
          <div
            className={`portfolio-deck${
              paused || lightbox ? ' is-paused' : ''
            }`}
          >
            <button
              type="button"
              className="deck-slide is-side is-prev"
              onClick={prev}
              aria-label={`Previous project: ${PORTFOLIO[prevIndex].title}`}
            >
              <img
                src={PORTFOLIO[prevIndex].src}
                alt=""
                width="1600"
                height="1000"
                loading="lazy"
              />
              <span className="deck-side-index" aria-hidden="true">
                {String(prevIndex + 1).padStart(2, '0')}
              </span>
            </button>

            <button
              type="button"
              className="deck-slide is-active"
              onClick={() => setLightbox(true)}
              aria-label={`View ${active.title} larger`}
            >
              <img
                key={active.id}
                className="portfolio-image"
                src={active.src}
                alt={active.alt}
                width="1600"
                height="1000"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <span className="portfolio-shade" aria-hidden="true" />
              <span className="deck-index" key={`index-${active.id}`}>
                {String(index + 1).padStart(2, '0')}
                <i>/ {String(TOTAL).padStart(2, '0')}</i>
              </span>
              <span className="portfolio-expand">
                <Expand size={16} />
                Expand
              </span>
              <span className="portfolio-caption" key={`caption-${active.id}`}>
                <span className="portfolio-tag">{active.tag}</span>
                <span className="portfolio-title">{active.title}</span>
              </span>
            </button>

            <button
              type="button"
              className="deck-slide is-side is-next"
              onClick={next}
              aria-label={`Next project: ${PORTFOLIO[nextIndex].title}`}
            >
              <img
                src={PORTFOLIO[nextIndex].src}
                alt=""
                width="1600"
                height="1000"
                loading="lazy"
              />
              <span className="deck-side-index" aria-hidden="true">
                {String(nextIndex + 1).padStart(2, '0')}
              </span>
            </button>
          </div>
        </div>

        <div className="portfolio-controls" data-reveal>
          <div className="deck-nav">
            <button
              type="button"
              className="deck-arrow"
              onClick={prev}
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="deck-arrow"
              onClick={next}
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div
            className={`deck-progress${
              paused || lightbox ? ' is-paused' : ''
            }`}
            style={{ '--autoplay': `${AUTOPLAY_MS}ms` }}
            role="tablist"
            aria-label="Choose a project"
          >
            {PORTFOLIO.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                className={`deck-segment${
                  itemIndex === index ? ' is-active' : ''
                }${itemIndex < index ? ' is-past' : ''}`}
                onClick={() => setIndex(itemIndex)}
                aria-selected={itemIndex === index}
                aria-label={`Show ${item.title}`}
                title={item.title}
              >
                <span />
              </button>
            ))}
          </div>

          <div className="portfolio-status">
            <span className="portfolio-counter">
              <b>{String(index + 1).padStart(2, '0')}</b> /{' '}
              {String(TOTAL).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="portfolio-play"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
            >
              {paused ? <Play size={15} /> : <Pause size={15} />}
              {paused ? 'Play' : 'Pause'}
            </button>
          </div>
        </div>

        <div className="portfolio-rail" ref={railRef} aria-label="Project thumbnails">
          {PORTFOLIO.map((item, itemIndex) => (
            <button
              type="button"
              key={item.id}
              className={`portfolio-thumb${
                itemIndex === index ? ' is-active' : ''
              }`}
              onClick={() => setIndex(itemIndex)}
              data-active={itemIndex === index}
              aria-label={`Show ${item.title}`}
              aria-current={itemIndex === index ? 'true' : undefined}
            >
              <img
                src={item.src}
                alt=""
                width="160"
                height="100"
                loading="lazy"
              />
              <span className="thumb-index" aria-hidden="true">
                {String(itemIndex + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightbox(false)}
            aria-label="Close viewer"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="lightbox-arrow is-prev"
            onClick={(event) => {
              event.stopPropagation()
              prev()
            }}
            aria-label="Previous project"
          >
            <ChevronLeft size={28} />
          </button>

          <figure
            className="lightbox-figure"
            onClick={(event) => event.stopPropagation()}
          >
            <img key={active.id} src={active.src} alt={active.alt} />
            <figcaption>
              <span className="lightbox-tag">{active.tag}</span>
              <strong>{active.title}</strong>
              <span className="lightbox-count">
                {String(index + 1).padStart(2, '0')} /{' '}
                {String(TOTAL).padStart(2, '0')}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox-arrow is-next"
            onClick={(event) => {
              event.stopPropagation()
              next()
            }}
            aria-label="Next project"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      ) : null}
    </section>
  )
}
