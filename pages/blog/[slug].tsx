import * as React from 'react'
import Layout from '../../components/layout'
import CoffeeLink from '../../components/coffeehint/CoffeeLink'
import SEO from '../../components/seo'
import Link from 'next/link'
import { getAllPosts, getBlogPostBySlug } from '../../lib/blog'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPage } from 'next'
import MarcoHeineImg from '../../public/images/marco-heine.webp'
import { BlogPost } from '..'
import { remark } from 'remark'
import html from 'remark-html'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'

interface BlogPostProps {
  blogPost: BlogPost
  location: Location
  content: string
}

export async function getStaticProps({ params, locale }) {
  const blogPost = getBlogPostBySlug(params.slug)
  const markdown = await remark().use(html).process(blogPost.content)
  const content = markdown.toString()

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      blogPost,
      content,
    },
  }
}

export async function getStaticPaths() {
  const blogPosts = getAllPosts()

  return {
    paths: blogPosts.map((blogPost) => ({ params: { slug: blogPost.slug } })),
    fallback: false,
  }
}

const BlogPost: React.FC<NextPage & BlogPostProps> = ({
  blogPost,
  location,
  content,
}) => {
  const { frontmatter } = blogPost

  const { title, date, updated, featuredImage, featuredImageAlt, description } =
    frontmatter

  // calculate time to read
  const timeToRead = Math.round(blogPost.content.split(' ').length / 200)

  return (
    <Layout>
      <SEO
        title={`Blog | ${title}`}
        description={description}
        ogImage={MarcoHeineImg}
        ogImageAlt={featuredImageAlt}
        location={location}
      />
      <h1 className="mb-0 text-center">Blog</h1>
      <section className="mx-auto mt-20 mb-0">
        <span className="mb-4 block text-base before:content-['←']">
          <Link href="/blog/">Go back to other Blog Posts</Link>
        </span>
        <p></p>
        <h2>{title}</h2>
        <section className="mb-4 flex gap-5 rounded-lg bg-slate-50 p-3 text-base">
          <time
            dateTime={date}
            className="mb-0"
          >
            🗓 {date}
          </time>
          <time
            dateTime={timeToRead.toString()}
            className="mb-0"
          >
            ⏱ {timeToRead} min read
          </time>

          {updated && (
            <time
              dateTime={date}
              className="mb-0"
            >
              🔔 Last Updated: {updated}
            </time>
          )}
        </section>

        <hr />
        <MDXProvider>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </MDXProvider>
        <p>
          I hope you enjoyed this article and learned something new. If you have
          any questions, feel free to reach out to me on{' '}
          <a
            href="https://twitter.com/marcoheine_com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter &#8599;
          </a>{' '}
          or via <a href="mailto:hello@marcoheine.com">email &#8599;</a>.
        </p>
        <p>
          If you want to support me, you can buy me a coffee. I would be very
          happy about it!
        </p>
        <CoffeeLink />
        <p>I wish you a wonderful day! Marco</p>
        <span className="mb-4 block text-base before:content-['←']">
          <Link href="/blog/">Go back to other Blog Posts</Link>
        </span>
      </section>
    </Layout>
  )
}

export default BlogPost
