import Button from '@/components/button'
import Tag from '@/components/tag'
import { getMDXComponent } from 'mdx-bundler/client'
import { getSinglePosts } from '../../../utils/mdx'
import { Heading1, Heading2 } from '@/components/text/text'

export default async function Article({ slug }: { slug: string }) {
  let path = Array.isArray(slug) ? slug.join('/') : slug
  const {
    code,
    frontmatter: { title },
  } = await getSinglePosts(path)
  const Component = getMDXComponent(code)
  return (
    <>
      <div className="mb-4 pt-10 pb-8 text border-b border-gray-200">
        <h1 className="text-5xl font-bold">{title}</h1>
      </div>
      <div id="Article_render" className="text-gray-600 text-md space-y-7">
        <Component components={{ h2: Heading2, Button, Tag }} />
      </div>
    </>
  )
}
