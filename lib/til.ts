import matter from 'gray-matter'
import { format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'
import { TILPost } from '../pages'
export interface Tag {
  name: string
  count: number
}

const postsDirectory = join(process.cwd(), 'today-i-learned')

export function getTILPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const date = format(new Date(data.date), 'MMMM dd, yyyy')
  data.date = date

  return {
    slug: `today-i-learned/${realSlug}`,
    frontmatter: { ...data },
    content,
  }
}

export function getAllTILPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs.map((slug) => getTILPostBySlug(slug))

  // TODO: probably need withPrefix as in blog.ts

  // sort posts by number in descending order
  return posts.sort((post1: TILPost, post2: TILPost) =>
    post1.frontmatter.number > post2.frontmatter.number ? -1 : 1
  )
}

export const getAllTILTags = () => {
  const posts = getAllTILPosts()

  // add all tags to an array and count them
  const tags: Tag[] = []
  posts.forEach((post) => {
    if (!post.frontmatter.tags) return
    post.frontmatter.tags.forEach((tag) => {
      const existingTag = tags.find((t) => t.name === tag)
      if (existingTag) {
        existingTag.count++
      } else {
        tags.push({ name: tag, count: 1 })
      }
    })
  })

  // sort tags by count in descending order
  return tags.sort((tag1, tag2) => (tag1.count > tag2.count ? -1 : 1))
}
