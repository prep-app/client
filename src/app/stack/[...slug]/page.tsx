import { Suspense } from 'react'
import Article from './article'
import TableOfContent from './tableOfContent'
import { getAllPosts, getStasks } from '@/utils/mdx'
import StackModules from './modules'

export default function Page({ params }: { params: { slug: string } }) {
  let slug = params.slug
  const stack = getStasks()
  return (
    <div className="flex gap-10">
      <div className="w-1/5">
        <StackModules posts={stack} />
      </div>
      <Suspense fallback={<div className='w-full'>Loading...</div>}>
        <div className="w-3/5 space-y-8">
          <Article slug={slug}></Article>
          {/* Todo: Make Previous and next button work */}
          <div className="flex justify-between">
            <button className="px-4 py-1 border border-gray-400 rounded-md text-sm text-gray-500 hover:bg-slate-100">
              Previous
            </button>
            <button className="px-4 py-1 border border-gray-400 rounded-md text-sm  text-gray-500 hover:bg-slate-100">
              Next
            </button>
          </div>
        </div>
        <div className="w-1/5 ">
          <div className="sticky top-11">
            <TableOfContent></TableOfContent>
          </div>
        </div>
      </Suspense>
    </div>
  )
}
