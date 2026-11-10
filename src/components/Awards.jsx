import { Award, Trophy } from 'lucide-react'
import { AWARDS } from '../data/site'
import SectionHeading from './SectionHeading'
import BrandMark from './BrandMark'

const ICONS = { Trophy, Award }

export default function Awards() {
  return (
    <section className="section awards">
      <div className="awards-asterisk" aria-hidden="true">
        <BrandMark />
      </div>
      <div className="container awards-inner">
        <SectionHeading
          eyebrow="Recognition"
          title="AWARD-WINNING"
          accent="agency."
          description="Recognised for excellence in advertising and marketing — with multiple industry awards and a client list that keeps coming back."
        />

        <div className="awards-grid">
          {AWARDS.map((award, index) => {
            const Icon = ICONS[award.icon]
            return (
              <article
                className="award-card"
                key={award.title}
                data-reveal
                style={{ '--d': `${index * 100}ms` }}
              >
                <span className="award-icon">
                  {Icon ? (
                    <Icon size={24} strokeWidth={1.7} />
                  ) : (
                    <BrandMark width={24} height={24} />
                  )}
                </span>
                <h3>{award.title}</h3>
                <p>{award.text}</p>
                <span className="award-spark">
                  <BrandMark width={16} height={16} />
                </span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
