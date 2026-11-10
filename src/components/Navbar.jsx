import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '../data/site'
import { useScrollSpy } from '../hooks/useScrollSpy'
import ThreeMLogo from './ThreeMLogo'

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)

      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, y / max) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header
        className={`site-nav${scrolled ? ' is-scrolled' : ''}${
          open ? ' is-open' : ''
        }`}
      >
        <div className="container nav-inner">
          <a
            className="brand"
            href="#home"
            aria-label="Subhashree Communications — home"
          >
            <span className="brand-mark">
              <img src="/logo.png" alt="" width="42" height="42" />
            </span>
            <span className="brand-type">
              <strong>SUBHASHREE</strong>
              <span>COMMUNICATIONS</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeId === link.id ? 'is-active' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary btn-sm nav-cta" href={CONTACT.phones[0].href}>
              <Phone size={15} strokeWidth={2.2} />
              <span>Let’s talk</span>
            </a>
            <button
              type="button"
              className="nav-toggle"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        <span
          className="nav-progress"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </header>

      {open ? (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="container mobile-menu-inner">
            <div className="mobile-menu-top">
              <a
                className="brand brand-mobile"
                href="#home"
                onClick={() => setOpen(false)}
              >
                <span className="brand-mark">
                  <img src="/logo.png" alt="" width="38" height="38" />
                </span>
                <span className="brand-type">
                  <strong>SUBHASHREE</strong>
                  <span>COMMUNICATIONS</span>
                </span>
              </a>
              <button
                type="button"
                className="mobile-close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="mobile-links" aria-label="Mobile">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  style={{ '--i': index }}
                >
                  <span className="mobile-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                  <ArrowUpRight size={22} className="mobile-arrow" />
                </a>
              ))}
            </nav>

            <div className="mobile-menu-foot">
              <div className="mobile-meta">
                <span className="eyebrow">Get in touch</span>
                {CONTACT.phones.map((phone) => (
                  <a key={phone.href} href={phone.href}>
                    {phone.label}
                  </a>
                ))}
                <a href={CONTACT.emailHref} target="_blank" rel="noreferrer">
                  {CONTACT.email}
                </a>
              </div>
              <div className="mobile-badge">
                <ThreeMLogo size={40} />
                <span>
                  Authorised
                  <strong>3M Converter</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
