import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from './ui'

const TilPost = ({ data, location }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title={frontmatter.title}
          description={frontmatter.description}
          ogImage={
            data.personalImg?.childImageSharp?.gatsbyImageData?.images?.fallback
              ?.src
          }
          ogImageAlt="a picture of me"
          location={location}
        />
        <ui.PageHeader>Today I learned</ui.PageHeader>
        <ui.PageContent>
          <section className="p-3 bg-slate-50 rounded-lg text-base mb-4">
            <time dateTime={frontmatter.date}>
              🗓 Published on: {frontmatter.date}
            </time>
          </section>
          <h2>{frontmatter.title}</h2>
          <MDXRenderer>{body}</MDXRenderer>
          <p>
            <i>Greetings Marco</i>
          </p>
          <ui.GoBackSpan>
            <Link to="/today-i-learned/">
              Go back to other today-i-learned posts
            </Link>
          </ui.GoBackSpan>
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  )
}

TilPost.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      body: PropTypes.string,
    }),
  }).isRequired,
}

export default TilPost

export const pageQuery = graphql`
  query ($language: String!, $slug: String!) {
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
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
