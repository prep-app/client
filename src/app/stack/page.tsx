import { getAllPosts } from '@/utils/mdx'
import Link from 'next/link'

export interface Posts {
  slug: string
  frontmatter: frontmatter
}

interface frontmatter {
  title: string
  date: string
}

export default function page() {
  const posts = getAllBlogPosts()
  return (
    <div>
      <div className="p-10 py-20 bg-purple-200 mb-2">
        <h1 className="text-6xl font-bold mb-3">Choose your stack</h1>
        <p>Add a learn stack to your preparation goals</p>
        <p>Cover all the common topics that interviewers love to ask from</p>
      </div>
      <div className="flex justify-between gap-4">
        {posts.map(
          ({ slug, frontmatter: { title, date } }: Posts, i: number) => (
            <div
              key={i}
              className="w-full p-5 border border-gray-300 rounded-full"
            >
              <Link href={`stack/${title}`}>{title}</Link>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export function getAllBlogPosts() {
  const posts = getAllPosts() as Posts[]
  return posts
}
