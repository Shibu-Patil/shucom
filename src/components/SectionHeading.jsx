export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  return (
    <div
      className={`section-heading is-${align}${light ? ' is-light' : ''} ${className}`}
      data-reveal
    >
      <span className="eyebrow">
        <span className="eyebrow-mark" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="section-title">
        {title}
        {accent ? (
          <>
            {' '}
            <em>{accent}</em>
          </>
        ) : null}
      </h2>
      {description ? <p className="section-desc">{description}</p> : null}
    </div>
  )
}
