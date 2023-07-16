import Button from '@/components/button'
import Tag from '@/components/tag'
import { getMDXComponent } from 'mdx-bundler/client'
import { getSinglePosts } from '../../../../utils/mdx'

export default async function Article({ slug }: { slug: string }) {
  const {code, frontmatter} = await getSinglePosts(slug)
  const Component = getMDXComponent(code)
  return <div><Component components={{Button, Tag}} /></div>
}
