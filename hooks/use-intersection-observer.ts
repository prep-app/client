import { head, xor } from 'lodash'
import { useEffect, useRef, useState } from 'react'

//TODO: fix type of value
export default function useIntersectionObserver() {
  const headingElementsRef: any = useRef<{ [x: string]: IntersectionObserverEntry }>({})
  const [activeId, setActiveId] = useState()
  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce((map: any, headingElement: IntersectionObserverEntry) => {
        map[headingElement?.target?.id] = headingElement
        return map
      }, headingElementsRef.current)

      const visibleHeadings: any[] = []
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement: IntersectionObserverEntry = headingElementsRef.current[key]
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })
      const getIndexFromId = (id: string) => headingElements.findIndex((heading) => heading.id === id)

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id)
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort((a, b) => (getIndexFromId(a.target.id) > getIndexFromId(b.target.id) ? 1 : 0))
        setActiveId(sortedVisibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, { rootMargin: '0px 0px 0px 0px' })

    const headingElements = Array.from(document.querySelectorAll('#Article_render h2, #Article_render h3'))
    headingElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return { activeId }
}
