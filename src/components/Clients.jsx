import { CLIENT_NAMES } from '../data/site'
import SectionHeading from './SectionHeading'
import BrandMark from './BrandMark'

const ROW_A = CLIENT_NAMES.slice(0, 9)
const ROW_B = CLIENT_NAMES.slice(9)

function MarqueeRow({ names, reverse = false, duration = '34s' }) {
  return (
    <div className={`marquee${reverse ? ' is-reverse' : ''}`} aria-hidden="true">
      <div className="marquee-track" style={{ '--marquee-duration': duration }}>
        {[...names, ...names].map((name, index) => (
          <span className="marquee-item" key={`${name}-${index}`}>
            {name}
            <BrandMark className="marquee-star" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Clients() {
  return (
    <section id="clients" className="section clients">
      <div className="container">
        <div className="clients-head">
          <SectionHeading
            eyebrow="Trusted by"
            title="NOTABLE"
            accent="clients."
            align="center"
          />
          <p className="clients-note" data-reveal>
            <strong>18+ leading brands</strong> across banking, retail,
            automotive, FMCG and manufacturing trust us with their story.
          </p>
        </div>
      </div>

      <MarqueeRow names={ROW_A} duration="38s" />
      <MarqueeRow names={ROW_B} reverse duration="32s" />

      <ul className="sr-only">
        {CLIENT_NAMES.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  )
}
