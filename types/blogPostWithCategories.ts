import { BlogcategoryDocument, BlogPostDocument } from '@/prismicio-types'

export type BlogPostWithCategories = BlogPostDocument & {
  data: {
    tags: Array<{
      tag: BlogcategoryDocument
    }>
  }
}
