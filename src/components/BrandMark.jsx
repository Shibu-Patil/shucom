import { MARK_PATH, MARK_ROTATIONS } from '../data/brand'

export default function BrandMark({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {MARK_ROTATIONS.map((angle) => (
        <path
          key={angle}
          d={MARK_PATH}
          transform={angle ? `rotate(${angle} 12 12)` : undefined}
        />
      ))}
    </svg>
  )
}
