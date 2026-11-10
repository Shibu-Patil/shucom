import {
  ArrowUpRight,
  Bookmark,
  Heart,
  MessageCircle,
  Send,
} from 'lucide-react'
import { DIGITAL_CHANNELS } from '../data/site'
import Counter from './Counter'
import SectionHeading from './SectionHeading'
import {
  AdsIcon,
  AnalyticsIcon,
  SearchIcon,
  SocialIcon,
} from './BrandIcons'

const ICONS = {
  social: SocialIcon,
  search: SearchIcon,
  ads: AdsIcon,
  analytics: AnalyticsIcon,
}

const BARS = ['34%', '58%', '46%', '72%', '55%', '88%', '68%', '100%']

export default function Digital() {
  return (
    <section id="digital" className="section digital">
      <div className="digital-glow" aria-hidden="true" />
      <div className="container">
        <div className="digital-head">
          <SectionHeading
            eyebrow="Digital marketing"
            title="ALWAYS ON,"
            accent="always growing."
            light
          />
          <p className="digital-note" data-reveal>
            The campaign doesn’t stop when the hoarding goes up. We keep the
            conversation going — across search, social and performance media —
            and show you exactly what it is doing.
          </p>
        </div>

        <div className="digital-layout">
          <div className="digital-channels">
            {DIGITAL_CHANNELS.map((channel, index) => {
              const Icon = ICONS[channel.icon]
              return (
                <article
                  className="channel-card"
                  key={channel.label}
                  data-reveal
                  style={{ '--d': `${index * 70}ms` }}
                >
                  <span className="channel-icon">
                    <Icon width={24} height={24} />
                  </span>
                  <div className="channel-copy">
                    <h3>{channel.label}</h3>
                    <p>{channel.note}</p>
                  </div>
                  <span className="channel-metric">
                    <b>{channel.metric}</b>
                    {channel.metricLabel}
                  </span>
                </article>
              )
            })}

            <a className="btn btn-primary btn-lg digital-cta" href="#contact">
              Build a digital plan
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="digital-showcase" data-reveal style={{ '--d': '120ms' }}>
            <div className="digital-phone">
              <div className="phone-shell">
                <span className="phone-island" aria-hidden="true" />

                <div className="phone-screen">
                  <div className="phone-head">
                    <img src="/logo.png" alt="" width="30" height="30" />
                    <div>
                      <strong>subhashree</strong>
                      <span>Bhubaneswar · India</span>
                    </div>
                    <span className="phone-live">
                      <i />
                      Live
                    </span>
                  </div>

                  <div className="phone-photo">
                    <img
                      src="/images/Promotions_5.jpg"
                      alt="Illuminated TPWODL rooftop signage at night"
                      width="1600"
                      height="860"
                      loading="lazy"
                    />
                    <span className="phone-tag">Outdoor</span>
                  </div>

                  <div className="phone-actions" aria-hidden="true">
                    <Heart size={17} />
                    <MessageCircle size={17} />
                    <Send size={17} />
                    <Bookmark size={17} className="phone-save" />
                  </div>

                  <p className="phone-likes">2,418 likes</p>
                  <p className="phone-caption">
                    <b>subhashree</b> Lighting up the skyline for TPWODL.
                    #OutdoorAdvertising
                  </p>
                </div>
              </div>
            </div>

            <div className="digital-metric-card">
              <span className="digital-card-kicker">
                <i className="pulse-dot" />
                Campaign pulse
              </span>
              <strong className="digital-card-value">
                <Counter value="248" suffix="%" />
              </strong>
              <span className="digital-card-note">
                follower growth in 90 days
              </span>

              <div className="digital-spark-bars" aria-hidden="true">
                {BARS.map((height, index) => (
                  <span
                    key={height + index}
                    style={{ '--h': height, '--i': index }}
                  />
                ))}
              </div>

              <div className="digital-card-foot">
                <span>Reach</span>
                <span>Engagement</span>
                <span>Leads</span>
              </div>
            </div>

            <span className="digital-chip">Meta · Google · LinkedIn</span>
          </div>
        </div>
      </div>
    </section>
  )
}
