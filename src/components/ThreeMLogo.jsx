export default function ThreeMLogo({ size = 34 }) {
  return (
    <svg
      width={size}
      height={(size * 32) / 48}
      viewBox="0 0 48 32"
      role="img"
      aria-label="3M"
      className="threem-logo"
    >
      <rect width="48" height="32" rx="6" fill="#e4002b" />
      <text
        x="24"
        y="23"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="19"
        fill="#ffffff"
        textAnchor="middle"
        letterSpacing="-0.5"
      >
        3M
      </text>
    </svg>
  )
}
