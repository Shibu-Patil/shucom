import { useEffect, useRef, useState } from 'react'

/**
 * Counts from 0 to `value` the first time the number scrolls into view.
 */
export default function Counter({ value, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const node = ref.current
    const target = Number(value)
    if (!node || Number.isNaN(target)) return undefined

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      const frame = requestAnimationFrame(() => setDisplay(target))
      return () => cancelAnimationFrame(frame)
    }

    let frame
    let started = false

    const run = () => {
      const startedAt = performance.now()
      const tick = (now) => {
        const progress = Math.min(1, (now - startedAt) / duration)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(target * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
