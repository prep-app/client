'use client'

import { Posts, Stack } from '@/utils/mdx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function StackModules({ posts }: { posts: Stack[] }) {
  const pathName = usePathname()
  return (
    <ul className="flex flex-col text-gray-500 text-sm gap-2">
      {posts.map(({ fileName, topics }, i) => (
        <li key={i} className="space-y-1">
          <div className="flex justify-between ">
            <p className="text-black font-semibold uppercase">{fileName}</p>
            <span>v</span>
          </div>

          {topics.map(({ slug, frontmatter: { title: topicTitle } }, i) => {
            const path = `${fileName}/${slug}`
            const isActive = pathName.includes(path)
            return (
              <p
                key={i}
                className={`p-2 ${isActive && 'text-black bg-purple-50'}`}
              >
                <Link href={`../${path}`}>{topicTitle}</Link>
              </p>
            )
          })}
        </li>
      ))}
    </ul>
  )
}
