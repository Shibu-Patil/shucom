import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently closest to the top of the viewport.
 */
export function useScrollSpy(ids, offset = 160) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .sort((a, b) => a.offsetTop - b.offsetTop)

    if (!sections.length) return undefined

    const update = () => {
      const scrollPosition = window.scrollY + offset
      let current = sections[0].id

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) current = section.id
      })

      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, offset])

  return activeId
}
