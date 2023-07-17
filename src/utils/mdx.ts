import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import rehypeSlug from 'rehype-slug'

export const POST_PATHS = path.join(process.cwd(), 'src/data/articles')

export interface Posts {
  slug: string
  frontmatter: Frontmatter
}

export interface Frontmatter {
  title: string
  date: string
}

export type Stack = {
  fileName: string
  topics: Posts[]
}

export const getSourceOfFile = (fileName: string) => {
  return fs.readFileSync(path.join(POST_PATHS, fileName), 'utf-8')
}

export const getSourceOfFileByPath = (filePath: string) => {
  return fs.readFileSync(filePath, 'utf-8')
}

export const getStasks = (): Stack[] => {
  return fs
    .readdirSync(POST_PATHS, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((dir) => ({
      fileName: dir.name,
      topics: getAllPosts(path.join(POST_PATHS, dir.name)).sort((a, b) =>
        a.slug == 'index' ? -1 : 0
      ),
    }))
}

export const getAllPosts = (dataPath = POST_PATHS) => {
  return fs
    .readdirSync(dataPath)
    .filter((path) => /\.mdx?$/.test(path))
    .map((files) => {
      const source = getSourceOfFileByPath(path.join(dataPath, files))
      const slug = files.replace(/\.mdx?$/, '')
      const { data } = matter(source)
      return {
        slug,
        frontmatter: data,
      }
    }) as Posts[]
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
