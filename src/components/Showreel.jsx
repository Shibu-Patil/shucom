import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { asset } from '../lib/asset'

export default function Showreel() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.body.classList.add('is-locked')
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className="showreel-trigger"
        onClick={() => setOpen(true)}
        aria-label="Play the Subhashree Communications showreel"
      >
        <svg
          className="showreel-ring"
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          <defs>
            <path
              id="showreel-ring-path"
              d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
            />
          </defs>
          <text>
            <textPath href="#showreel-ring-path">
              PLAY SHOWREEL • SUBHASHREE • PLAY SHOWREEL • SUBHASHREE •
            </textPath>
          </text>
        </svg>

        <span className="showreel-disc">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6.4v11.2L19 12z" fill="currentColor" />
          </svg>
        </span>
      </button>

      {open
        ? createPortal(
            <div
              className="showreel-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Subhashree Communications showreel"
              onClick={() => setOpen(false)}
            >
              <button
                type="button"
                className="showreel-close"
                onClick={() => setOpen(false)}
                aria-label="Close showreel"
              >
                <X size={24} />
              </button>

              <div
                className="showreel-stage"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="showreel-head">
                  <span className="showreel-kicker">Showreel · 2026</span>
                  <strong>Selected work, in motion</strong>
                </div>

                <video
                  className="showreel-video"
                  src={asset('/media/showreel.mp4')}
                  poster={asset('/media/showreel-poster.jpg')}
                  controls
                  autoPlay
                  loop
                  playsInline
                  preload="none"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
