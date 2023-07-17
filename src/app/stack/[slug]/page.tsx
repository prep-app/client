import { Suspense } from 'react'
import Article from './article'
import TableOfContent from './tableOfContent'
import { getAllPosts } from '@/utils/mdx'
import StackModules from './modules'
import { Posts } from '../page'

export default function Page({ params }: { params: { slug: string } }) {
  let slug = params.slug
  const posts = getAllPosts() as Posts[]
  return (
    <div className="flex gap-10">
      <div className="w-1/5">
        <StackModules posts={posts} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-3/5">
          <Article slug={slug}></Article>
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
