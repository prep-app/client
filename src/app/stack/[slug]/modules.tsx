'use client'

import Link from 'next/link'
import { Posts } from '../page'
import { usePathname } from 'next/navigation'

export default function StackModules({ posts }: { posts: Posts[] }) {
  const pathName = usePathname()
  return (
    <ul className="flex flex-col gap-2 text-gray-500 text-sm">
      {posts.map(({ slug, frontmatter: { title } }, i) => {
        const isActive = pathName.includes(slug)
        return (
          <li key={i}>
            <p className={`p-2 ${isActive && 'text-black bg-purple-50'}`}>
              <Link href={slug}>{title}</Link>
            </p>
          </li>
        )
      })}
    </ul>
  )
}
