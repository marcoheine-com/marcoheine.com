import matter from 'gray-matter'
import { parse, format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'

// Add markdown files in `src/content/blog`
const postsDirectory = join(process.cwd(), 'blog')

export function getPostBySlug(slug: string) {
  let realSlug = ''
  let fullPath = ''

  if (slug.endsWith('.md')) {
    realSlug = slug.replace(/\.md$/, '')
    fullPath = join(postsDirectory, `${realSlug}.md`)
  } else {
    realSlug = slug.replace(/\.mdx$/, '')
    fullPath = join(postsDirectory, `${realSlug}.mdx`)
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const date = format(new Date(data.date), 'MMMM dd, yyyy')
  return { slug: realSlug, frontmatter: { ...data, date }, content }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs.map((slug) => getPostBySlug(slug))

  return posts
}
