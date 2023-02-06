// generate rss feed with the feed package
import { config } from 'config'
import { Feed } from 'feed'
import fs from 'fs'
import { getAllPosts } from 'lib/blog'
import { BlogPost } from 'pages'

export async function generateRSSFeed() {
  const siteUrl = config.siteUrl
  const feed = new Feed({
    title: 'Marco Heine - Blog',
    description:
      'This is the blog of Marco Heine, where he shares his thoughts about software development and the life as freelancer developer.',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    image: `${siteUrl}/public/images/marco-heine.webp`,
    favicon: `${siteUrl}/favicon32x32.png`,
    copyright: `© ${new Date().getFullYear()} Marco Heine - Blog`,
    feedLinks: {
      rss2: `${siteUrl}/rss.xml`,
    },
  })

  const posts = getAllPosts()

  posts.forEach((post: BlogPost) => {
    feed.addItem({
      title: post.frontmatter.title,
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}/`,
      description: post.frontmatter.description,
      content: post.content,
      date: new Date(post.frontmatter.date),
    })
  })

  // generate xml file
  fs.writeFileSync('./public/rss.xml', feed.rss2())
}
