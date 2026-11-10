import { useEffect, useRef, useState } from 'react'
import indiaMap from '@svg-maps/india'
import { ArrowUpRight, Check, MapPin } from 'lucide-react'
import {
  ACTIVE_STATE_IDS,
  HQ_STATE_ID,
  STATE_NAMES,
} from '../data/site'
import Counter from './Counter'
import SectionHeading from './SectionHeading'

const ACTIVE_SET = new Set(ACTIVE_STATE_IDS)

export default function Presence() {
  const [hoveredId, setHoveredId] = useState(null)
  const [selectedId, setSelectedId] = useState(HQ_STATE_ID)
  const [hqPoint, setHqPoint] = useState(null)
  const [activePoints, setActivePoints] = useState([])
  const mapRef = useRef(null)

  useEffect(() => {
    const svg = mapRef.current
    if (!svg) return

    const hqPath = svg.querySelector(`#india-state-${HQ_STATE_ID}`)
    if (hqPath) {
      const box = hqPath.getBBox()
      setHqPoint({
        x: box.x + box.width * 0.56,
        y: box.y + box.height * 0.42,
      })
    }

    const points = ACTIVE_STATE_IDS.map((id) => {
      const path = svg.querySelector(`#india-state-${id}`)
      if (!path) return null
      const box = path.getBBox()
      return {
        id,
        x: box.x + box.width / 2,
        y: box.y + box.height / 2,
      }
    }).filter(Boolean)

    setActivePoints(points)
  }, [])

  const focusId = hoveredId ?? selectedId
  const focusName = STATE_NAMES[focusId] ?? '16 regions'

  const select = (id) => setSelectedId(id)

  const onKeyDown = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      select(id)
    }
  }

  return (
    <section id="presence" className="section presence">
      <div className="container">
        <div className="presence-head">
          <SectionHeading
            eyebrow="Pan-India reach"
            title="PAN-INDIA"
            accent="presence."
          />
          <p className="presence-note" data-reveal>
            From the shores of Odisha to the metros of India — we operate across{' '}
            <strong>15 states and one union territory</strong>, delivering
            impactful advertising solutions nationwide.
          </p>
        </div>

        <div className="presence-layout">
          <div className="map-card" data-reveal>
            <div className="map-card-head">
              <span className="map-kicker">
                <MapPin size={14} />
                Live footprint
              </span>
              <span className={`map-focus${hoveredId ? ' is-hovering' : ''}`}>
                {focusName}
                {focusId === HQ_STATE_ID ? <em>HQ</em> : null}
              </span>
            </div>

            <div className="map-canvas">
              <div className="map-radar" aria-hidden="true" />
              <div className="map-grid" aria-hidden="true" />
              <svg
                ref={mapRef}
                className="india-map"
                viewBox={indiaMap.viewBox}
                role="img"
                aria-label="Map of India highlighting states where Subhashree Communications operates"
              >
                {indiaMap.locations.map((location, locationIndex) => {
                  const isActive = ACTIVE_SET.has(location.id)
                  const isHq = location.id === HQ_STATE_ID
                  return (
                    <path
                      key={location.id}
                      id={`india-state-${location.id}`}
                      d={location.path}
                      className={`india-state${isActive ? ' is-active' : ''}${
                        isHq ? ' is-hq' : ''
                      }${selectedId === location.id ? ' is-selected' : ''}`}
                      style={{ '--i': locationIndex }}
                      tabIndex={isActive ? 0 : -1}
                      role={isActive ? 'button' : undefined}
                      aria-label={`${location.name}${isHq ? ' — headquarters' : ''}`}
                      aria-pressed={
                        isActive ? selectedId === location.id : undefined
                      }
                      onMouseEnter={() => setHoveredId(location.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onFocus={() => setHoveredId(location.id)}
                      onBlur={() => setHoveredId(null)}
                      onClick={() => select(location.id)}
                      onKeyDown={(event) => onKeyDown(event, location.id)}
                    >
                      <title>{location.name}</title>
                    </path>
                  )
                })}

                {hqPoint
                  ? activePoints
                      .filter((point) => point.id !== HQ_STATE_ID)
                      .map((point, index) => (
                        <line
                          key={`hq-link-${point.id}`}
                          className="hq-link"
                          x1={hqPoint.x}
                          y1={hqPoint.y}
                          x2={point.x}
                          y2={point.y}
                          style={{ '--i': index }}
                        />
                      ))
                  : null}

                {activePoints.map((point, index) => (
                  <g
                    key={`map-ping-${point.id}`}
                    className={`map-ping${
                      point.id === HQ_STATE_ID ? ' is-hq' : ''
                    }`}
                    transform={`translate(${point.x} ${point.y})`}
                    style={{ '--i': index }}
                    aria-hidden="true"
                  >
                    <circle className="map-ping-ring" r="4.5" />
                    <circle className="map-ping-ring is-late" r="4.5" />
                    <circle className="map-ping-dot" r="1.9" />
                  </g>
                ))}

                {hqPoint ? (
                  <g
                    className="hq-marker"
                    transform={`translate(${hqPoint.x} ${hqPoint.y})`}
                    aria-hidden="true"
                  >
                    <circle className="hq-pulse" r="13" />
                    <circle className="hq-ring" r="7" />
                    <circle className="hq-core" r="3.4" />
                    <text x="11" y="4">
                      HQ
                    </text>
                  </g>
                ) : null}
              </svg>
            </div>

            <div className="map-legend">
              <span>
                <i className="legend-active" /> Active presence
              </span>
              <span>
                <i className="legend-hq" /> Headquarters
              </span>
              <span>
                <i className="legend-off" /> Other states
              </span>
            </div>
          </div>

          <aside className="presence-side">
            <div className="presence-stats">
              <div className="presence-stat">
                <span className="presence-stat-value">
                  <Counter value="15" />
                </span>
                <span className="presence-stat-label">States covered</span>
                <span className="presence-stat-note">+ 1 union territory</span>
              </div>
              <div className="presence-stat">
                <span className="presence-stat-value">
                  <Counter value="500" suffix="+" />
                </span>
                <span className="presence-stat-label">Projects delivered</span>
                <span className="presence-stat-note">Since day one</span>
              </div>
            </div>

            <div className="presence-states">
              <div className="presence-states-head">
                <h3>Active regions</h3>
                <span>Tap to locate</span>
              </div>
              <div className="states-tags">
                {ACTIVE_STATE_IDS.map((id) => (
                  <button
                    type="button"
                    key={id}
                    className={`state-tag${
                      selectedId === id ? ' is-active' : ''
                    }`}
                    onClick={() => select(id)}
                    aria-pressed={selectedId === id}
                  >
                    {STATE_NAMES[id]}
                    {id === HQ_STATE_ID ? <span className="hq-pill">HQ</span> : null}
                  </button>
                ))}
              </div>
              <ul className="presence-checklist">
                <li>
                  <Check size={14} /> Media planning &amp; buying
                </li>
                <li>
                  <Check size={14} /> On-ground production
                </li>
                <li>
                  <Check size={14} /> One point of contact, every city
                </li>
              </ul>
              <div className="presence-states-foot">
                <p>
                  From a single hoarding to a multi-state rollout, one team
                  handles the media, production and on-ground execution.
                </p>
                <a className="text-link" href="#contact">
                  Plan a multi-city campaign
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
