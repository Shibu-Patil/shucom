import { useEffect, useRef } from 'react'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { CONTACT } from '../data/site'
import { MARK_PATH, MARK_ROTATIONS } from '../data/brand'
import BrandMark from './BrandMark'
import ThreeMLogo from './ThreeMLogo'

const PHILOSOPHY = ['SIMPLE', 'FRESH', 'UNIQUE']

export default function Hero() {
  const heroRef = useRef(null)
  const reduceMotion = useRef(false)

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
  }, [])

  const handlePointer = (event) => {
    if (reduceMotion.current || !heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    heroRef.current.style.setProperty('--px', x.toFixed(4))
    heroRef.current.style.setProperty('--py', y.toFixed(4))
    heroRef.current.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(2)}%`)
    heroRef.current.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(2)}%`)
  }

  const resetPointer = () => {
    if (!heroRef.current) return
    heroRef.current.style.setProperty('--px', '0')
    heroRef.current.style.setProperty('--py', '0')
  }

  return (
    <section
      id="home"
      className="hero"
      ref={heroRef}
      onPointerMove={handlePointer}
      onPointerLeave={resetPointer}
    >
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-gridlines" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-pills">
            <span className="pill pill-cream">
              <BrandMark width={15} height={15} />
              Award-winning agency
            </span>
            <span className="pill pill-ghost pill-3m">
              <span className="pill-3m-logo">
                <ThreeMLogo size={34} />
              </span>
              <span className="pill-3m-copy">
                <span className="pill-3m-kicker">Authorised</span>
                <b>3M converter</b>
              </span>
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line" style={{ '--i': 0 }}>
              <span>BRANDS</span>
            </span>
            <span className="hero-line" style={{ '--i': 1 }}>
              <em>
                that
                <svg
                  className="hero-scribble"
                  viewBox="0 0 200 22"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M3 14C37 4 68 19 104 10s67-7 93 2" />
                </svg>
              </em>{' '}
              <span>CREATE</span>
            </span>
            <span className="hero-line" style={{ '--i': 2 }}>
              <span>IMPACT</span>
              <span className="hero-dot">.</span>
            </span>
          </h1>

          <p className="hero-lede">
            A complete advertising solution — <span>built in Bhubaneswar,</span>{' '}
            delivered across India.
          </p>

          <div className="hero-philosophy" aria-label="Our philosophy">
            {PHILOSOPHY.map((word, index) => (
              <span key={word} className="philosophy-word" style={{ '--i': index }}>
                {word}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="#services">
              Explore services
              <ArrowUpRight size={18} />
            </a>
            <a className="btn btn-ghost btn-lg" href="#contact">
              Start a project
            </a>
          </div>

          <div className="hero-contact">
            <span className="hero-contact-label">Quick contact</span>
            <div className="hero-contact-links">
              <a href={CONTACT.phones[0].href}>
                <Phone size={14} />
                {CONTACT.phones[0].label}
              </a>
              <a href={CONTACT.emailHref} target="_blank" rel="noreferrer">
                <Mail size={14} />
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-blob" aria-hidden="true" />

          <figure className="hero-photo hero-photo-main">
            <img
              src="/images/Promotions_4.jpg"
              alt="SBI customer outreach exhibition stall by Subhashree Communications"
              width="1600"
              height="780"
            />
            <figcaption>
              <span>SBI</span> Customer outreach
            </figcaption>
          </figure>

          <figure className="hero-photo hero-photo-sub">
            <img
              src="/images/Promotions_5.jpg"
              alt="Illuminated TPWODL rooftop signage at night"
              width="1600"
              height="860"
              loading="lazy"
            />
            <figcaption>
              <span>TPWODL</span> Glow signage
            </figcaption>
          </figure>

          <div className="hero-float-card">
            <span className="hero-float-value">500+</span>
            <span className="hero-float-label">projects delivered</span>
          </div>

          <div className="hero-stamp" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <path
                  id="hero-stamp-path"
                  d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                />
              </defs>
              <text>
                <textPath href="#hero-stamp-path">
                  AWARD-WINNING • ADVERTISING • BHUBANESWAR • ODISHA •
                </textPath>
              </text>
              <g transform="translate(48 48)">
                {MARK_ROTATIONS.map((angle) => (
                  <path
                    key={angle}
                    d={MARK_PATH}
                    transform={angle ? `rotate(${angle} 12 12)` : undefined}
                    className="hero-stamp-star"
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="container hero-foot-inner">
          <span className="hero-scroll">
            <span className="hero-scroll-dot" />
            Scroll to explore
          </span>
          <span className="hero-foot-note">Bhubaneswar · Odisha · India</span>
        </div>
      </div>
    </section>
  )
}
