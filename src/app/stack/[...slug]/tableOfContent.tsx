'use client'

import useHeadingsData from '@/hooks/use-heading-data'
import useIntersectionObserver from '@/hooks/use-intersection-observer'
import Link from 'next/link'

export default function TableOfContent() {
  const { nestedHeadings } = useHeadingsData()
  const { activeId } = useIntersectionObserver()
  return (
    <div className=''>
      <h3 className="mb-3">Table of contents</h3>
      <ul className="flex flex-col space-y-2 text-gray-500 text-sm">
        {nestedHeadings.map(({ id, title }) => {
          const isHeadingActive = id === activeId
          return (
            <li
              key={id}
              className={`${
                isHeadingActive ? 'text-purple-500' : ' font-normal'
              } `}
            >
              <Link href={`#${id}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
