import { asset } from '../lib/asset'

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'clients', label: 'Clients' },
  { id: 'ourwork', label: 'Work' },
  { id: 'presence', label: 'Presence' },
  { id: 'contact', label: 'Contact' },
]

export const CONTACT = {
  address: 'Bhubaneswar, Odisha, India',
  phones: [
    { label: '+91-943 864 4669', href: 'tel:+919438644669' },
    { label: '+91-768 281 1511', href: 'tel:+917682811511' },
  ],
  email: 'subhashreecommunication@gmail.com',
  emailHref:
    'https://mail.google.com/mail/?view=cm&to=subhashreecommunication@gmail.com',
}

export const STATS = [
  { value: '15', suffix: '', label: 'States covered', note: 'Pan-India footprint' },
  { value: '500', suffix: '+', label: 'Projects delivered', note: 'On time, every time' },
  { value: '18', suffix: '+', label: 'Brand partners', note: 'Trusted across sectors' },
  { value: '360', suffix: '°', label: 'Campaign support', note: 'Idea to execution' },
]

export const ABOUT_PILLARS = [
  {
    number: '01',
    title: 'Our Mission',
    body: 'Using an integrated communication model to capture “mind share” in consumer psychology and revamp a brand’s image. We focus on creating lasting impressions that drive brand success.',
  },
  {
    number: '02',
    title: 'Operational Excellence',
    body: 'An in-house computerized designing desk speeds up job transmission to meet urgent demands. Our state-of-the-art infrastructure ensures timely delivery without compromising quality.',
  },
  {
    number: '03',
    title: 'Client Commitment',
    body: 'A focus on complete customer satisfaction through negotiated rates and fixed-period contracts. We build long-term partnerships based on trust and transparency.',
  },
  {
    number: '04',
    title: 'Company Profile',
    body: 'Equipped with advanced technology and managed by qualified professionals, we deliver comprehensive advertising solutions that transform businesses and elevate brands.',
  },
]

export const STUDIO_PROCESS = [
  {
    number: '01',
    title: 'Brief & insight',
    body: 'We start with the audience, the market and the one thing your brand needs to say — then build the idea around it.',
  },
  {
    number: '02',
    title: 'Design & production',
    body: 'Concepts become campaigns. Print, signage, digital and on-ground production are handled in-house, end to end.',
  },
  {
    number: '03',
    title: 'Launch & measure',
    body: 'We roll out across cities, watch what moves, and sharpen the next wave with real campaign data.',
  },
]

export const SERVICE_CATEGORIES = [
  {
    id: 'offline',
    icon: 'Megaphone',
    title: 'Offline & Outdoor Advertising',
    blurb:
      'High-visibility media that puts your brand where people live, move and gather.',
    groups: [
      {
        title: 'Traditional Media',
        items: ['Newspapers', 'Magazines', 'Television', 'Radio'],
      },
      {
        title: 'Outdoor Assets',
        items: [
          'Hoardings',
          'Kiosks',
          'Banners',
          'Glow Signboards',
          'LED Boards',
          'Posters',
          'Balloon Advertising',
        ],
      },
      {
        title: 'Mobile Branding',
        items: [
          'Auto-rickshaw Branding',
          'Auto-rickshaw Loudspeaker Branding',
          'Display Vans',
        ],
      },
    ],
  },
  {
    id: 'digital',
    icon: 'Monitor',
    title: 'Digital & Online Marketing',
    blurb:
      'Performance-led digital campaigns that turn attention into measurable action.',
    groups: [
      {
        title: 'Google Ad Campaigns',
        text: 'Optimized for all devices with a focus on ROI and measurable results.',
      },
      {
        title: 'Social Media Management',
        text: 'Strategic daily posting to achieve a 40% increase in profile engagement.',
      },
      {
        title: 'Website Banner Design',
        text: 'Eye-catching digital banners that drive clicks and conversions.',
      },
    ],
  },
  {
    id: 'events',
    icon: 'PartyPopper',
    title: 'Event Management',
    blurb:
      'From the first idea to the final applause — experiences people remember.',
    groups: [
      {
        title: 'Corporate Events',
        items: ['Conferences', 'Corporate Meets', 'Loan Fairs', 'Exhibition Stalls'],
      },
      {
        title: 'Public & Talent Events',
        items: ['Street Shows', 'Talent Search Programs', 'Innovative Campaigns'],
      },
      {
        title: 'Specialized Decor',
        items: [
          'Balloon Decorations',
          'Promotional Tables with Umbrellas',
          'Product Promotions',
          'Market Survey',
        ],
      },
    ],
  },
  {
    id: 'print',
    icon: 'Palette',
    title: 'Printing & Designing',
    blurb:
      'An in-house studio and print unit for work that looks as sharp as it reads.',
    groups: [
      {
        title: 'In-House Printing Unit',
        items: ['Digital Printing', 'Offset Printing', 'Screen Printing'],
      },
      {
        title: 'Marketing Materials',
        items: ['Flyers', 'Vinyl and Flex Printing', 'Brochures', 'Corporate Gifts'],
      },
    ],
  },
]

export const DIGITAL_CHANNELS = [
  {
    icon: 'social',
    label: 'Social media',
    note: 'Content calendars, community and always-on creative.',
    metric: '+68%',
    metricLabel: 'engagement',
  },
  {
    icon: 'search',
    label: 'SEO & content',
    note: 'Search-first storytelling that compounds over time.',
    metric: 'Top 3',
    metricLabel: 'rankings',
  },
  {
    icon: 'ads',
    label: 'Performance ads',
    note: 'Google, Meta and LinkedIn campaigns tuned for ROI.',
    metric: '4.2×',
    metricLabel: 'ad spend',
  },
  {
    icon: 'analytics',
    label: 'Analytics & CRM',
    note: 'Live dashboards that show what is actually working.',
    metric: 'Live',
    metricLabel: 'reporting',
  },
]

export const CLIENT_NAMES = [
  'HDFC Bank',
  'Tata Power',
  'Titan',
  'Tanishq',
  'Fastrack',
  'Nissan',
  'Yamaha',
  'Anmol',
  'KFC',
  'Domino’s',
  'Sobisco Biscuit',
  'Escort Kubota',
  'Swaraj',
  'Mahindra',
  'AU Small Finance Bank',
  'Parle',
  'Tata Tiscon',
  'IDFC Bank',
]

export const AWARDS = [
  {
    icon: 'Trophy',
    title: 'Industry Awards',
    text: 'Recognised by advertising and marketing bodies for standout campaign work.',
  },
  {
    icon: 'Award',
    title: 'Excellence Certificates',
    text: 'Accredited for execution quality, creativity and dependable delivery.',
  },
  {
    icon: 'Star',
    title: 'Client Recognition',
    text: 'Long-standing relationships built on results, service and trust.',
  },
]

const PORTFOLIO_META = {
  1: {
    title: 'Anmol Talent Hunt — Grand Finale',
    tag: 'Event Management',
    alt: 'Anmol Talent Hunt grand finale stage with participants holding certificates',
  },
  2: {
    title: 'Titan Brand Promotion',
    tag: 'Brand Activation',
    alt: 'Titan brand promotion activation',
  },
  3: {
    title: 'Axis Bank Launch Décor',
    tag: 'Event Décor',
    alt: 'Axis Bank entrance decorated with a blue and white balloon arch',
  },
  4: {
    title: 'SBI Customer Outreach',
    tag: 'Exhibition',
    alt: 'SBI customer outreach exhibition stall',
  },
  5: {
    title: 'TPWODL Glow Signage',
    tag: 'Outdoor Advertising',
    alt: 'Illuminated TPWODL rooftop signage at night',
  },
  6: {
    title: 'Mementos & Awards',
    tag: 'Print & Design',
    alt: 'Custom mementos and awards produced by Subhashree Communications',
  },
}

export const PORTFOLIO = Array.from({ length: 31 }, (_, index) => {
  const n = index + 1
  const meta = PORTFOLIO_META[n] ?? {
    title: `Campaign Showcase ${String(n).padStart(2, '0')}`,
    tag: 'Portfolio',
    alt: `Advertising and event campaign showcase ${n} by Subhashree Communications`,
  }

  return {
    id: n,
    src: asset(`/images/Promotions_${n}.jpg`),
    ...meta,
  }
})

export const STATE_NAMES = {
  an: 'Andaman & Nicobar',
  ap: 'Andhra Pradesh',
  ar: 'Arunachal Pradesh',
  as: 'Assam',
  br: 'Bihar',
  ch: 'Chandigarh',
  ct: 'Chhattisgarh',
  dn: 'Dadra & Nagar Haveli',
  dd: 'Daman & Diu',
  dl: 'Delhi',
  ga: 'Goa',
  gj: 'Gujarat',
  hr: 'Haryana',
  hp: 'Himachal Pradesh',
  jk: 'Jammu & Kashmir',
  jh: 'Jharkhand',
  ka: 'Karnataka',
  kl: 'Kerala',
  ld: 'Lakshadweep',
  mp: 'Madhya Pradesh',
  mh: 'Maharashtra',
  mn: 'Manipur',
  ml: 'Meghalaya',
  mz: 'Mizoram',
  nl: 'Nagaland',
  or: 'Odisha',
  py: 'Puducherry',
  pb: 'Punjab',
  rj: 'Rajasthan',
  sk: 'Sikkim',
  tn: 'Tamil Nadu',
  tg: 'Telangana',
  tr: 'Tripura',
  up: 'Uttar Pradesh',
  ut: 'Uttarakhand',
  wb: 'West Bengal',
}

// States / UTs where Subhashree Communications has an active presence.
export const ACTIVE_STATE_IDS = [
  'ap',
  'as',
  'br',
  'ct',
  'ga',
  'gj',
  'jh',
  'ka',
  'mp',
  'mh',
  'rj',
  'or',
  'tn',
  'tg',
  'wb',
  'an',
]

export const HQ_STATE_ID = 'or'
