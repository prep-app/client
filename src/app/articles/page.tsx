import { getAllPosts } from '../../../utils/mdx'

interface Posts {
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
      {posts.map(({ slug, frontmatter: { title, date } }: Posts, i: number) => (
        <div key={i}>{title}</div>
      ))}
    </div>
  )
}

export function getAllBlogPosts() {
  const posts = getAllPosts() as Posts[]
  return posts
}
