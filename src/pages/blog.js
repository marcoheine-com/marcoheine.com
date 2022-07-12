import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useTranslation } from 'react-i18next'

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
      .map(([key, value]) => (
        <ui.YearlySection key={key}>
          <h3>{key}</h3>
          {value.map((post) => (
            <Link
              key={post.node.id}
              to={`/${post.node.fields.slug}`}
            >
              <article className="flex flex-col md:flex-row md:gap-8">
                <time
                  className="mb-2 md:mb-0 sm:min-w-[160px] text-base text-grey inline-block"
                  dateTime={post.node.frontmatter.date}
                >
                  {post.node.frontmatter.date}
                </time>
                <span className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  {post.node.frontmatter.featuredImage ? (
                    <GatsbyImage
                      className="max-w-[100px] rounded-lg md:w-full"
                      alt={post.node.frontmatter.featuredImageAlt}
                      image={
                        post.node.frontmatter.featuredImage.childImageSharp
                          .gatsbyImageData
                      }
                    />
                  ) : null}
                  <h4 className="text-primaryColorOne">
                    {post.node.frontmatter.title}
                  </h4>
                </span>
              </article>
            </Link>
          ))}
        </ui.YearlySection>
      ))

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Blog"
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
                to={`/${slug}`}
                key={id}
              >
                <ui.NewArticleSlot>
                  <ui.NewArticle>
                    <ui.ArticleHeadline>{title}</ui.ArticleHeadline>
                    {frontmatter.featuredImage && (
                      <ui.ArticleImageWrapper>
                        <GatsbyImage
                          alt={frontmatter.featuredImageAlt}
                          image={
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
                </ui.NewArticleSlot>
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

Blog.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
}

export default Blog

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    personalImg: file(relativePath: { eq: "marco-heine.webp" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    allMdx(
      filter: { fields: { type: { eq: "blog-post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            featuredImage {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
            featuredImageAlt
          }
        }
      }
    }
  }
`
