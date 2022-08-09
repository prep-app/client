import { useEffect, useState } from 'react'

export default function useHeadingsData() {
  const [nestedHeadings, setNestHeadings] = useState<any[]>([])
  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2, h3')) as HTMLHeadingElement[];
    const nestedHeadings = getNestedHeadings(headingElements)
    setNestHeadings(nestedHeadings)
  }, [])

  return { nestedHeadings }
}

const getNestedHeadings = (headingElements: HTMLHeadingElement[]) => {
  const nestedHeadings: any[] = []
  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading
    if (heading.nodeName === 'H2') {
      nestedHeadings.push({
        title,
        id,
        items: [],
      })
    }
    if (heading.nodeName === 'H3') {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      })
    }
  })
  return nestedHeadings;
}
