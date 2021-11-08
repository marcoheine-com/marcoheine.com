import React from 'react'
import { graphql, Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import { GatsbyImage } from 'gatsby-plugin-image'

const Blog = ({ data }) => {
  const { allMdx } = data
  const { edges } = allMdx

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
            <Link key={post.node.id} to={`/${post.node.fields.slug}`}>
              <ui.BlogArticle>
                <h4>
                  {post.node.frontmatter.title} -
                  <ui.Time dateTime={post.node.frontmatter.date}>
                    Published on: {post.node.frontmatter.date}
                  </ui.Time>
                </h4>
              </ui.BlogArticle>
            </Link>
          ))}
        </ui.YearlySection>
      ))

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Blog" />
        <ui.PageHeader>Blog</ui.PageHeader>

        <ui.PageContent>
          <ui.BlogHeadline>Newest blog posts:</ui.BlogHeadline>
          {newestPosts.map((edge) => {
            const { node } = edge
            const {
              fields: { slug },
              id,
              frontmatter,
            } = node
            const { date, title, excerpt } = frontmatter

            return (
              <Link to={`/${slug}`} key={id}>
                <ui.NewArticleSlot>
                  <ui.BlogArticle>
                    <h3>{title}</h3>
                    {frontmatter.featuredImage && (
                      <GatsbyImage
                        alt={frontmatter.featuredImageAlt}
                        image={
                          frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                      />
                    )}
                    <ui.Time dateTime={date}>Published on: {date}</ui.Time>

                    <p>{excerpt}</p>
                    <ui.Readmore>Read article</ui.Readmore>
                  </ui.BlogArticle>
                </ui.NewArticleSlot>
              </Link>
            )
          })}

          <h2>Other blog posts:</h2>
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
  query {
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
