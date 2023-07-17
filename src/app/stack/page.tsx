import { getStasks } from '@/utils/mdx'
import Link from 'next/link'

export default function page() {
  const posts = getStaskLists()
  return (
    <div>
      <div className="p-10 py-20 bg-purple-200 mb-2">
        <h1 className="text-6xl font-bold mb-3">Choose your stack</h1>
        <p>Add a learn stack to your preparation goals</p>
        <p>Cover all the common topics that interviewers love to ask from</p>
      </div>
      <div className="flex justify-between gap-4">
        {posts.map(({ fileName: title, topics }, i: number) => (
          <div
            key={i}
            className="w-full p-5 border border-gray-300 rounded-full"
          >
            <Link href={`stack/${title}/${topics[0].slug}`}>{title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

function getStaskLists() {
  const stask = getStasks()
  return stask
}
