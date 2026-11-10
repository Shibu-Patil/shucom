import BrandMark from './BrandMark'

const RIBBON_ITEMS = [
  'Outdoor advertising',
  'Digital marketing',
  'Event management',
  'Printing & design',
  'Brand activation',
  'Media buying',
]

export default function Ribbon() {
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon-track">
        {[...RIBBON_ITEMS, ...RIBBON_ITEMS].map((item, index) => (
          <span className="ribbon-item" key={`${item}-${index}`}>
            {item}
            <BrandMark className="ribbon-star" />
          </span>
        ))}
      </div>
    </div>
  )
}
