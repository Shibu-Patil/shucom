import { ArrowUpRight } from 'lucide-react'
import { SERVICE_CATEGORIES } from '../data/site'
import {
  DigitalIcon,
  EventsIcon,
  OutdoorIcon,
  PrintIcon,
} from './BrandIcons'
import SectionHeading from './SectionHeading'

const ICONS = {
  Megaphone: OutdoorIcon,
  Monitor: DigitalIcon,
  PartyPopper: EventsIcon,
  Palette: PrintIcon,
}

export default function Services() {
  const spotlight = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    card.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <section id="services" className="section services">
      <div className="services-glow" aria-hidden="true" />
      <div className="container">
        <div className="services-head">
          <SectionHeading
            eyebrow="Prime services"
            title="COMPREHENSIVE"
            accent="solutions."
            light
          />
          <p className="services-head-note" data-reveal>
            Full-spectrum advertising and marketing, designed to amplify your
            brand presence — online, outdoors and everywhere in between.
          </p>
        </div>

        <div className="services-grid">
          {SERVICE_CATEGORIES.map((category, index) => {
            const Icon = ICONS[category.icon]
            return (
              <article
                className="service-card"
                key={category.id}
                onPointerMove={spotlight}
                data-reveal
                style={{ '--d': `${index * 80}ms` }}
              >
                <div className="service-top">
                  <span className="service-icon">
                    <Icon width={28} height={28} />
                  </span>
                  <span className="service-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3>{category.title}</h3>
                <p className="service-blurb">{category.blurb}</p>

                <div className="service-groups">
                  {category.groups.map((group) => (
                    <div className="service-group" key={group.title}>
                      <h4>{group.title}</h4>
                      {group.items ? (
                        <ul className="service-tags">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="service-group-text">{group.text}</p>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="services-cta" data-reveal>
          <p>
            Have a brief?
            <br />
            <em>We love those.</em>
          </p>
          <a className="btn btn-primary btn-lg" href="#contact">
            Tell us about it
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
