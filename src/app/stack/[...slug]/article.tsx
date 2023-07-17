import Button from '@/components/button'
import Tag from '@/components/tag'
import { getMDXComponent } from 'mdx-bundler/client'
import { getSinglePosts } from '../../../utils/mdx'

export default async function Article({ slug }: { slug: string }) {
  let path = Array.isArray(slug) ? slug.join('/') : slug
  const {
    code,
    frontmatter: { title },
  } = await getSinglePosts(path)
  const Component = getMDXComponent(code)
  return (
    <>
      <div className="mb-4 pt-10 px-2 pb-8 text border-b border-gray-200">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div id="Article_render" className="text-gray-600 text-lg">
        <Component components={{ Button, Tag }} />
      </div>
    </>
  )
}
