import { ArrowUpRight } from 'lucide-react'
import Showreel from './Showreel'

export default function Interlude() {
  return (
    <section className="interlude" aria-label="Campaigns in the field">
      <div className="interlude-bg" aria-hidden="true">
        <img
          src="/images/studio-venue.jpg"
          alt=""
          width="1600"
          height="1068"
          loading="lazy"
        />
      </div>
      <div className="interlude-overlay" aria-hidden="true" />

      <div className="container interlude-inner" data-reveal>
        <span className="eyebrow eyebrow-light">In the field</span>
        <h2>
          MADE TO BE
          <br />
          <em>noticed.</em>
        </h2>
        <p>
          A hoarding that stops traffic. A launch that fills the room. A rollout
          that lands in fifteen states at once. We build the moments people
          remember — and the systems that make them repeatable.
        </p>

        <div className="interlude-foot">
          <a className="btn btn-primary btn-lg" href="#contact">
            Plan your campaign
            <ArrowUpRight size={18} />
          </a>
          <div className="interlude-stats">
            <span>
              <b>15</b> states
            </span>
            <span>
              <b>500+</b> projects
            </span>
            <span>
              <b>360°</b> support
            </span>
          </div>
        </div>

        <Showreel />
      </div>
    </section>
  )
}
