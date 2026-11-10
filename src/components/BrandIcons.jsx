const base = {
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.65,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
}

export function OutdoorIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="25" height="14.5" rx="2.8" />
      <path d="M9 27v-7M23 27v-7" />
      <path d="M8 11h7M8 15h4" />
      <path
        d="M21.2 9.6l1.2 2.4 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <circle cx="25.6" cy="6.4" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function DigitalIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="3" width="14.5" height="23" rx="3.2" />
      <path d="M12.5 6.2h3.5" />
      <path d="M10.8 20l3-3.8 2.2 2.2 3.8-4.6" />
      <path d="M18.4 13.8h1.4v1.4" />
      <circle cx="14.6" cy="22.8" r="0.9" fill="currentColor" stroke="none" />
      <path
        d="M22.8 8.2l1 2 .1.1 2 .1-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.1z"
        fill="currentColor"
        fillOpacity="0.18"
      />
    </svg>
  )
}

export function EventsIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 25.6l3.2-10 9.2 9.2-10 3.2z" />
      <path d="M6.6 25l4-4" />
      <path d="M13.2 12.4c.4-2.4 2.3-3.9 4.3-4" />
      <path d="M18.6 4.8v3.1M23.8 7.2l-2 2M27.2 12.4h-3.1" />
      <circle cx="21.6" cy="13.2" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="25.6" cy="18.6" r="0.9" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="16.8" cy="16.2" r="0.8" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  )
}

export function PrintIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M23.5 5H10.4A2.4 2.4 0 008 7.4V20" />
      <rect x="9" y="9" width="15.5" height="18" rx="2.6" />
      <path d="M13 14h8M13 17.8h5M13 21.6h3" />
      <path d="M6 24.4h1.8" />
    </svg>
  )
}

export function SocialIcon(props) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      <path d="M20 11.4a7.6 7.6 0 01-8.1 7.6 8.7 8.7 0 01-3.4-.7L4 20l1.4-4.2A7.6 7.6 0 1120 11.4z" />
      <path
        d="M12 14.2c-1.7-1.4-3.3-.3-3.3 1.2 0 1.6 2.1 2.8 3.3 3.4 1.2-.6 3.3-1.8 3.3-3.4 0-1.5-1.6-2.6-3.3-1.2z"
        fill="currentColor"
        fillOpacity="0.25"
      />
    </svg>
  )
}

export function SearchIcon(props) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="M15.5 15.5L21 21" />
      <path
        d="M10.8 7.4l.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z"
        fill="currentColor"
        fillOpacity="0.28"
      />
    </svg>
  )
}

export function AdsIcon(props) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      <circle cx="11.4" cy="12.6" r="7.6" />
      <circle cx="11.4" cy="12.6" r="3.4" />
      <path d="M11.4 12.6L19 5M19 5v3.6M19 5h-3.6" />
      <circle cx="11.4" cy="12.6" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function AnalyticsIcon(props) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      <path d="M4 20V4M4 20h16" />
      <rect x="7" y="13" width="2.6" height="4" rx="0.6" fill="currentColor" stroke="none" opacity="0.4" />
      <rect x="12" y="10" width="2.6" height="7" rx="0.6" fill="currentColor" stroke="none" opacity="0.6" />
      <rect x="17" y="6.6" width="2.6" height="10.4" rx="0.6" fill="currentColor" stroke="none" opacity="0.85" />
    </svg>
  )
}
