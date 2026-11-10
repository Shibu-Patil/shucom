import { ArrowUpRight, Sparkles } from 'lucide-react'
import { STUDIO_PROCESS } from '../data/site'
import { asset } from '../lib/asset'
import SectionHeading from './SectionHeading'

export default function Studio() {
  return (
    <section id="studio" className="section studio">
      <div className="studio-glow" aria-hidden="true" />
      <div className="container">
        <div className="studio-layout">
          <div className="studio-copy">
            <SectionHeading
              eyebrow="Inside the studio"
              title="IDEAS IN"
              accent="motion."
            />

            <p className="studio-lede" data-reveal>
              Strategy, design and production under one roof — so a brand idea
              never loses its spark between the brief and the billboard.
            </p>

            <ol className="studio-process">
              {STUDIO_PROCESS.map((step, index) => (
                <li
                  key={step.number}
                  data-reveal
                  style={{ '--d': `${index * 80}ms` }}
                >
                  <span className="studio-step">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <a className="btn btn-primary btn-lg studio-cta" href="#contact">
              Book a discovery call
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="studio-collage" data-reveal style={{ '--d': '120ms' }}>
            <figure className="collage-photo collage-events">
              <img
                src={asset('/images/studio-events.jpg')}
                alt="Confetti falling over a packed event crowd"
                width="1600"
                height="1067"
                loading="lazy"
              />
              <figcaption>
                <span>Event production</span>
                Crowds, stages &amp; launches
              </figcaption>
            </figure>

            <figure className="collage-photo collage-team">
              <img
                src={asset('/images/studio-team.jpg')}
                alt="Creative team collaborating around a table"
                width="1600"
                height="1067"
                loading="lazy"
              />
            </figure>

            <figure className="collage-photo collage-design">
              <img
                src={asset('/images/studio-design.jpg')}
                alt="Designer sketching artwork on a tablet beside printed proofs"
                width="1280"
                height="1600"
                loading="lazy"
              />
            </figure>

            <span className="collage-chip">
              <Sparkles size={14} />
              Idea to impact
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
