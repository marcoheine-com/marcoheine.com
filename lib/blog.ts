import matter from 'gray-matter'
import { format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'blog')

export function getBlogPostBySlug(slug: string) {
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

  if (data.updated) {
    data.updated = format(new Date(data.updated), 'MMMM dd, yyyy')
  }
  return {
    slug: realSlug,
    frontmatter: { ...data, date },
    content,
  }
}

type Options = {
  withPrefix?: boolean
}

export function getAllPosts({ withPrefix = false }: Options = {}) {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs.map((slug) => getBlogPostBySlug(slug))

  // add blog as prefix to slugs
  if (withPrefix) {
    posts.forEach((post) => {
      post.slug = `blog/${post.slug}`
    })
  }

  // Sort posts by date in descending order
  return posts.sort((post1, post2) => {
    const date1 = new Date(post1.frontmatter.date)
    const date2 = new Date(post2.frontmatter.date)
    return date1 > date2 ? -1 : 1
  })
}
