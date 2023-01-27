import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Image from 'next/image'

const Blog = ({ data, location }) => {
  const { allMdx } = data
  const { edges } = allMdx
  const { t } = useTranslation()

  const newestPosts = edges.slice(0, 3)
  const olderPosts = edges.slice(3)

  const groupByYear = (olderPosts) => {
    let grouped = {}

    olderPosts.map((post) => {
      const { date } = post.node.frontmatter
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
      .map(([key, value]: [key: string, value: any]) => (
        <ui.YearlySection key={key}>
          <h3>{key}</h3>
          {value.map((post) => (
            <Link
              key={post.node.id}
              href={`/${post.node.fields.slug}`}
            >
              <article className="flex flex-col md:flex-row md:gap-8">
                <time
                  className="mb-2 inline-block text-base text-grey sm:min-w-[160px] md:mb-0"
                  dateTime={post.node.frontmatter.date}
                >
                  {post.node.frontmatter.date}
                </time>
                <h4 className="text-primaryColorOne">
                  {post.node.frontmatter.title}
                </h4>
              </article>
            </Link>
          ))}
        </ui.YearlySection>
      ))

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Blog | Marco Heine - Freelance Web Developer"
          ogImage={
            data.personalImg?.childImageSharp?.gatsbyImageData?.images?.fallback
              ?.src
          }
          ogImageAlt="a picture of me"
          description={t('meta.blog-description')}
          location={location}
        />
        <ui.PageHeader>Blog</ui.PageHeader>

        <ui.PageContent>
          <ui.BlogHeadline>{t('home.blog-posts')}</ui.BlogHeadline>
          {newestPosts.map((edge) => {
            const { node } = edge
            const {
              fields: { slug },
              id,
              frontmatter,
              excerpt,
            } = node
            const { date, title } = frontmatter

            return (
              <Link
                href={`/${slug}`}
                key={id}
              >
                <section className="mb-16">
                  <ui.NewArticle hasImage={frontmatter.featuredImage}>
                    <ui.ArticleHeadline>{title}</ui.ArticleHeadline>
                    {frontmatter.featuredImage && (
                      <ui.ArticleImageWrapper>
                        <Image
                          alt={frontmatter.featuredImageAlt}
                          src={
                            frontmatter.featuredImage.childImageSharp
                              .gatsbyImageData
                          }
                        />
                      </ui.ArticleImageWrapper>
                    )}
                    <ui.Time dateTime={date}>Published on: {date}</ui.Time>

                    <p>{excerpt}</p>
                    <ui.Readmore>Read article</ui.Readmore>
                  </ui.NewArticle>
                </section>
              </Link>
            )
          })}

          <ui.BlogHeadline>{t('blog.headline-two')}</ui.BlogHeadline>
          {createYearlySection(groupedByYear)}
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  )
}

export default Blog
