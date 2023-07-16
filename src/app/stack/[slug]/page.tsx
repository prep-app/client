import { Suspense } from 'react'
import Article from './article'

export default function Page({ params }: { params: { slug: string } }) {
  let slug = params.slug
  return (
    <div className="flex">
      <div className="w-1/5"></div>
      <div className="w-3/5">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Article {slug}</h1>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Article slug={slug}></Article>
        </Suspense>
      </div>
      <div className="w-1/5"></div>
    </div>
  )
}
