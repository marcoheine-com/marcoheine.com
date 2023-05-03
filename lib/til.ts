import matter from 'gray-matter'
import { format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'

export type TagName =
  | 'javascript'
  | 'react'
  | 'typescript'
  | 'css'
  | 'html'
  | 'nodejs'
  | 'backend'
  | 'frontend'
  | 'graphql'
  | 'redux'
  | 'testing'
  | 'web-security'
  | 'api'
  | 'accessibility'
  | 'performance'
  | 'software-development'
  | 'ux'
  | 'git'
  | 'gatsby'
  | 'prisma'
  | 'nextjs'
  | 'tailwindcss'
  | 'svg'
  | 'serverless'
export interface TILPost {
  slug: string
  frontmatter: {
    title: string
    date: string
    description: string
    updated?: string
    path: string
    tags: TagName[]
    number: number
  }
  content: string
}

export interface Tag {
  name: TagName
  count: number
}

type Options = {
  withPrefix?: boolean
}

const postsDirectory = join(process.cwd(), 'today-i-learned')

export function getTILPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const date = format(new Date(data.date), 'MMMM dd, yyyy')
  data.date = date

  if (data.updated) {
    data.updated = format(new Date(data.updated), 'MMMM dd, yyyy')
  }

  return {
    slug: `${realSlug}`,
    frontmatter: { ...data },
    content,
  }
}

export const getTILPostsByTag = (tag: TagName) => {
  const posts = getAllTILPosts({ withPrefix: true })

  return posts.filter((post) => {
    if (!post.frontmatter.tags) return false
    return post.frontmatter.tags.includes(tag)
  })
}

export function getAllTILPosts({ withPrefix = false }: Options = {}) {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs.map((slug) => getTILPostBySlug(slug))

  if (withPrefix) {
    posts.forEach((post) => {
      post.slug = `today-i-learned/${post.slug}`
    })
  }

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

export const getCountOfTag = (tag: string) => {
  const posts = getAllTILPosts()

  let count = 0
  posts.forEach((post) => {
    if (!post.frontmatter.tags) return
    if (post.frontmatter.tags.includes(tag)) count++
  })

  return count
}
