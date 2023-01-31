import matter from 'gray-matter'
import { format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'
import { TILPostProps } from '../pages'

const postsDirectory = join(process.cwd(), 'today-i-learned')

export function getTILPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const date = format(new Date(data.date), 'MMMM dd, yyyy')

  return {
    slug: `today-i-learned/${realSlug}`,
    frontmatter: { ...data, date },
    content,
  }
}

export function getAllTILPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs.map((slug) => getTILPostBySlug(slug))

  // sort posts by number in descending order
  return posts.sort((post1: TILPostProps, post2: TILPostProps) =>
    post1.frontmatter.number > post2.frontmatter.number ? -1 : 1
  )
}
