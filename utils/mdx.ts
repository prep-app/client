import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import rehypeSlug from 'rehype-slug'

export const POST_PATHS = path.join(process.cwd(), 'src/data/articles')

export const getSourceOfFile = (fileName: string) => {
  return fs.readFileSync(path.join(POST_PATHS, fileName), 'utf-8')
}

export const getAllPosts = () => {
  return fs
    .readdirSync(POST_PATHS)
    .filter((path) => /\.mdx?$/.test(path))
    .map((files) => {
      const source = getSourceOfFile(files)
      const slug = files.replace(/\.mdx?$/, '')
      const { data } = matter(source)
      return {
        slug,
        frontmatter: data,
      }
    })
}

export const getSinglePosts = async (slug: string) => {
  const source = getSourceOfFile(slug + '.mdx')
  const { code, frontmatter } = await bundleMDX({
    source: source,
    cwd: POST_PATHS,
    mdxOptions(options, frontmatter) {
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug]
      return options
    },
  })
  return {
    frontmatter,
    code,
  }
}
