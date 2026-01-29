import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'

export const getMDX = async (content: string) => {
  const blogPostMDX = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight, {}],
    },
  })

  return blogPostMDX
}
