'use client'

import useHeadingsData from '@/hooks/use-heading-data'
import Link from 'next/link'

export default function TableOfContent() {
  const { nestedHeadings } = useHeadingsData()
  return (
    <div>
      <h3 className="mb-3">Table of contents</h3>
      <ul className="flex flex-col gap-2 text-gray-500 text-sm">
        {nestedHeadings.map(({ id, title, items }) => (
          <li key={id} className="">
            <Link href={`#${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
