import { BlogcategoryDocument } from '@/prismicio-types'
import { BlogPostWithCategories } from '@/types/blogPostWithCategories'

export const getTagsWithCount = (
  blogCategories: BlogcategoryDocument[],
  blogPosts: BlogPostWithCategories[]
) => {
  return blogCategories
    ?.map((category) => {
      const count = blogPosts?.filter((post) =>
        post.data.tags.some((tag: { tag: { uid: string } }) => {
          return tag.tag?.uid === category.uid
        })
      ).length
      return {
        ...category,
        count,
      }
    })
    .sort((a, b) => a.count - b.count)
    .reverse()
}
