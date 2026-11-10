import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { ABOUT_PILLARS, STATS } from '../data/site'
import Counter from './Counter'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-intro">
          <SectionHeading
            eyebrow="About us"
            title="AWARD-WINNING"
            accent="excellence."
          />

          <div className="about-lead" data-reveal>
            <p className="about-lead-big">
              An award-winning advertising agency based in Bhubaneswar, Odisha —
              managed by qualified people, powered by advanced equipment.
            </p>
            <p>
              We keep strategy, design and execution under one roof, so a brand
              idea never loses its spark between the brief and the billboard.
              From a single flex print to a full pan-India rollout, the same
              team sees it through.
            </p>
            <a className="text-link" href="#ourwork">
              See how we work
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="about-grid">
          {ABOUT_PILLARS.map((pillar, index) => (
            <article
              className="about-card"
              key={pillar.number}
              data-reveal
              style={{ '--d': `${index * 90}ms` }}
            >
              <span className="about-number">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
              <span className="about-card-arrow" aria-hidden="true">
                <ArrowDownRight size={18} />
              </span>
            </article>
          ))}
        </div>

        <div className="stats-panel" data-reveal>
          <div className="stats-panel-title">
            <span className="eyebrow eyebrow-light">By the numbers</span>
            <p>
              One team.
              <br />
              Every kind of campaign.
            </p>
          </div>
          <div className="stats-grid">
            {STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat-value">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-note">{stat.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
