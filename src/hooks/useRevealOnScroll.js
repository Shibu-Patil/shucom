import { useEffect } from 'react'

/**
 * Adds `.is-visible` to any element carrying `data-reveal` once it enters
 * the viewport. Motion is skipped for users who prefer reduced motion.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!elements.length) return undefined

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
