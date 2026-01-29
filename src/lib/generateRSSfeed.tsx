// generate rss feed with the feed package
import { mdxcomponents } from 'components/MDXComponents'
import { config } from 'config'
import { format } from 'date-fns'
import { Feed } from 'feed'
import fs from 'fs'
import { getAllPosts } from 'lib/blog'
import { getMDX } from 'lib/getMDX'
import { MDXRemote } from 'next-mdx-remote'
import { renderToStaticMarkup } from 'react-dom/server'

const getBlogPostMDX = async (content: string) => {
  const blogPostMDX = await getMDX(content)

  const markup = renderToStaticMarkup(
    <MDXRemote
      {...blogPostMDX}
      components={mdxcomponents}
    />
  )

  return markup
}

export async function generateRSSFeed() {
  const siteUrl = config.siteUrl
  const posts = getAllPosts()

  const feed = new Feed({
    title: `${config.author} | Blog`,
    description:
      'This is the blog of Marco Heine, where he shares his thoughts about software development and the life as a freelancer developer.',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    image: `${siteUrl}/marco-heine.webp`,
    favicon: `${siteUrl}/favicon32x32.png`,
    copyright: `© ${new Date().getFullYear()} Marco Heine - Blog`,
    feedLinks: {
      rss2: `${siteUrl}/rss.xml`,
    },
  })

  for (const post of posts) {
    const markup = await getBlogPostMDX(post.content)
    const date = format(new Date(post.frontmatter.date), 'MMMM dd, yyyy')

    feed.addItem({
      title: post.frontmatter.title,
      id: `${siteUrl}/blog/${post.slug}/`,
      link: `${siteUrl}/blog/${post.slug}/`,
      description: post.frontmatter.description,
      content: markup,
      date: new Date(date),
    })
  }

  // generate xml file
  fs.writeFileSync('./public/rss.xml', feed.rss2())
}
