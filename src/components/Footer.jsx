import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '../data/site'
import { asset } from '../lib/asset'

const SERVICE_LINKS = [
  'Outdoor advertising',
  'Digital marketing',
  'Event management',
  'Printing & design',
]

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta" data-reveal>
          <div>
            <span className="eyebrow eyebrow-light">Let’s talk</span>
            <h2>
              Have a brand
              <br />
              <em>to build?</em>
            </h2>
          </div>
          <a className="btn btn-primary btn-lg" href={`mailto:${CONTACT.email}`}>
            Drop us a line
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home">
              <span className="brand-mark">
                <img src={asset('/logo.png')} alt="" width="42" height="42" />
              </span>
              <span className="brand-type">
                <strong>SUBHASHREE</strong>
                <span>COMMUNICATIONS</span>
              </span>
            </a>
            <p>
              A complete advertising solution. Strategy, media, production and
              design — from Bhubaneswar to the rest of India.
            </p>
            <span className="footer-tagline">Simple. Fresh. Unique.</span>
          </div>

          <div className="footer-col">
            <h3>Explore</h3>
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            {SERVICE_LINKS.map((service) => (
              <a key={service} href="#services">
                {service}
              </a>
            ))}
          </div>

          <div className="footer-col footer-col-contact">
            <h3>Contact</h3>
            <a href={CONTACT.phones[0].href}>
              <Phone size={15} />
              {CONTACT.phones[0].label}
            </a>
            <a href={CONTACT.phones[1].href}>
              <Phone size={15} />
              {CONTACT.phones[1].label}
            </a>
            <a href={CONTACT.emailHref} target="_blank" rel="noreferrer">
              <Mail size={15} />
              {CONTACT.email}
            </a>
            <span>
              <MapPin size={15} />
              {CONTACT.address}
            </span>
          </div>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          SUBHASHREE
        </div>

        <div className="footer-bottom">
          <span>© {YEAR} Subhashree Communications. All rights reserved.</span>
          <span>Crafted with care in Bhubaneswar, Odisha.</span>
          <a className="back-to-top" href="#home">
            Back to top
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
