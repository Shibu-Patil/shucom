import { useRef, useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { CONTACT, SERVICE_CATEGORIES } from '../data/site'
import SectionHeading from './SectionHeading'
import ThreeMLogo from './ThreeMLogo'

const CONTACT_API = (
  import.meta.env.VITE_CONTACT_API_URL || 'https://shucom-back-shub-e64b.vercel.app'
)
  .trim()
  .replace(/\/+$/, '')

const STATUS_ICON = {
  sending: Loader2,
  success: CheckCircle2,
  error: AlertCircle,
}

const STATUS_TEXT = {
  sending: 'Sending your message…',
  success: 'Thank you. We’ll get back to you shortly.',
  error: `Something went wrong. Please email us at ${CONTACT.email}.`,
}

const REQUEST_TIMEOUT_MS = 75_000

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [statusNote, setStatusNote] = useState('')
  const formRef = useRef(null)
  const inFlight = useRef(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (inFlight.current) return

    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      service: String(data.get('service') || 'Not specified'),
      message: String(data.get('message') ?? '').trim(),
      company: String(data.get('company') ?? ''),
    }

    setStatusNote('')
    setStatus('sending')

    inFlight.current = true

    try {
      const response = await fetch(`${CONTACT_API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        const detail =
          result.error ||
          Object.values(result.errors ?? {})[0] ||
          `Request failed (${response.status})`
        throw new Error(detail)
      }

      form.reset()
      setStatus('success')
    } catch (error) {
      console.error('Contact form error:', error)
      const message = String(error?.message ?? '')
      const friendly =
        error?.name === 'TimeoutError'
          ? 'The server took too long to respond. Please try again in a moment.'
          : /failed to fetch|network|load failed/i.test(message)
            ? ''
            : message
      setStatusNote(friendly)
      setStatus('error')
    } finally {
      inFlight.current = false
    }
  }

  const StatusIcon = STATUS_ICON[status]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-head">
          <SectionHeading
            eyebrow="Get in touch"
            title="LET’S CREATE"
            accent="impact."
          />
          <p className="contact-note" data-reveal>
            Tell us what you’re building. We’ll bring the media, the design, the
            production and the people to make it happen.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info" data-reveal>
            <div className="contact-info-glow" aria-hidden="true" />

            <h3>Contact information</h3>

            <ul className="contact-list">
              <li>
                <span className="contact-icon">
                  <MapPin size={18} />
                </span>
                <div>
                  <span>Head office</span>
                  <strong>{CONTACT.address}</strong>
                </div>
              </li>

              <li>
                <span className="contact-icon">
                  <Phone size={18} />
                </span>
                <div>
                  <span>Sales contacts</span>
                  {CONTACT.phones.map((phone) => (
                    <a key={phone.href} href={phone.href}>
                      {phone.label}
                    </a>
                  ))}
                </div>
              </li>

              <li>
                <span className="contact-icon">
                  <Mail size={18} />
                </span>
                <div>
                  <span>Email</span>
                  <a href={CONTACT.emailHref} target="_blank" rel="noreferrer">
                    {CONTACT.email.split('@')[0]}
                    <wbr />@{CONTACT.email.split('@')[1]}
                  </a>
                </div>
              </li>
            </ul>

            <blockquote>
              “We shall leave no stone unturned to the entire satisfaction of our
              immediate &amp; esteemed customers.”
            </blockquote>

            <div className="contact-badge-3m">
              <ThreeMLogo size={44} />
              <span>
                Authorised 3M converter
                <em>Certified materials. Reliable execution.</em>
              </span>
            </div>
          </div>

          <div className="contact-form-card" data-reveal style={{ '--d': '120ms' }}>
            <div className="contact-form-head">
              <h3>Send a message</h3>
              <span>Fields marked * are required</span>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              aria-busy={status === 'sending'}
            >
              <div className="form-honeypot" aria-hidden="true">
                <label>
                  Company
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span className="field-label">Full name *</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  <span className="field-label">Email address *</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>

              <label>
                <span className="field-label">Phone number *</span>
                <input
                  type="tel"
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  minLength={6}
                  required
                />
              </label>

              <label>
                <span className="field-label">What do you need?</span>
                <div style={{padding:"0px px"}} className='select'>
                <select name="service" defaultValue=""  style={{border:"none"}}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_CATEGORIES.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Something else">Something else</option>
                </select>
                </div>

              </label>

              <label>
                <span className="field-label">Your message *</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about the campaign, timeline and budget…"
                  minLength={10}
                  required
                />
              </label>

              <button
                type="submit"
                className="btn btn-primary btn-lg form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={18} />
                  </>
                )}
              </button>

              {status !== 'idle' ? (
                <div
                  className={`form-status is-${status}`}
                  role="status"
                  aria-live="polite"
                >
                  <StatusIcon
                    size={17}
                    className={status === 'sending' ? 'spin' : undefined}
                  />
                  <span>
                    {status === 'error'
                      ? statusNote || STATUS_TEXT.error
                      : STATUS_TEXT[status]}
                  </span>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
