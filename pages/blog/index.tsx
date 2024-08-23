import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getAllPosts } from '../../lib/blog'
import { NextPage } from 'next'
import { IBlogPost } from '..'
import MarcoHeineImg from '../../public/images/marco-heine.webp'
import { useRouter } from 'next/router'
import { generateRSSFeed } from 'lib/generateRSSfeed'
import { CustomLink } from '@/components/customlink'

interface BlogPostProps {
  blogPosts: IBlogPost[]
  location: Location
}

const HEADLINE2_STYLES =
  'mb-16 inline-block border-b-[6px] border-b-primaryColorTwo'

export async function getStaticProps({ locale }) {
  await generateRSSFeed()
  const blogPosts = getAllPosts({ withPrefix: true })

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      blogPosts: JSON.parse(JSON.stringify(blogPosts)),
    },
  }
}

const Blog: React.FC<NextPage & BlogPostProps> = ({ blogPosts }) => {
  const { t } = useTranslation()
  const location = useRouter()

  const newestPosts = blogPosts.slice(0, 3)
  const olderPosts = blogPosts.slice(3)

  const groupByYear = (olderPosts: IBlogPost[]) => {
    let grouped = {}

    olderPosts.map((post: IBlogPost) => {
      const { date } = post.frontmatter
      const year = date.split(', ')[1]
      const dateString = `${year}`

      if (!grouped[dateString]) {
        grouped[dateString] = []
      }
      grouped[dateString].push(post)
    })
    return grouped
  }

  const groupedByYear = groupByYear(olderPosts)

  const createYearlySection = (groupedPosts) =>
    Object.entries(groupedPosts)
      .reverse()
      .map(([key, value]: [key: string, value: any], index: number) => (
        <section
          className="mb-12 grid gap-4"
          key={`${key}_${index}`}
        >
          <h3>{key}</h3>
          {value.map((post: IBlogPost) => (
            <article
              className="flex flex-col md:flex-row md:gap-8"
              key={post.frontmatter.title}
            >
              <time
                className="mb-2 inline-block text-base text-grey sm:min-w-[160px] md:mb-0"
                dateTime={post.frontmatter.date}
              >
                {post.frontmatter.date}
              </time>
              <CustomLink href={`/${post.slug}`}>
                <h4 className="mb-0 inline-block text-primaryColorOne">
                  {post.frontmatter.title}
                </h4>
              </CustomLink>
            </article>
          ))}
        </section>
      ))

  return (
    <Layout>
      <SEO
        title="Blog | Marco Heine - Freelance Web Developer"
        ogImage={MarcoHeineImg}
        ogImageAlt="a picture of Marco Heine"
        description={t('meta.blog-description')}
        location={location.asPath}
      />
      <h1 className="mb-20 text-center">Blog</h1>

      <section className="mx-auto w-full max-w-3xl">
        <h2 className={HEADLINE2_STYLES}>{t('home.blog-posts')}</h2>
        {newestPosts.map((post: IBlogPost, index: number) => {
          post
          const { slug, frontmatter } = post
          const { date, title, description } = frontmatter

          return (
            <Link
              href={`${slug}`}
              key={`${title}-${index}`}
            >
              <article
                className={`mb-4 p-5 text-primaryColorOne transition-all hover:rounded-xl hover:shadow-custom`}
              >
                <h3 className="mb-2">{title}</h3>
                <time
                  className="text-base"
                  dateTime={date}
                >
                  Published on: {date}
                </time>

                <p className="mb-2">{description}</p>
                <span className="text-primaryColorTwo before:mr-1 before:text-primaryColorOne before:transition-[margin] before:duration-200 before:ease-linear before:content-['→'] hover:text-linkHover hover:before:mr-0 hover:before:ml-1">
                  Read article
                </span>
              </article>
            </Link>
          )
        })}

        <h2 className={`${HEADLINE2_STYLES} mt-16`}>
          {t('blog.headline-two')}
        </h2>
        {createYearlySection(groupedByYear)}
      </section>
    </Layout>
  )
}

export default Blog
