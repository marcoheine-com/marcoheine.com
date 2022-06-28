import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import CoffeeHint from '../components/coffeehint'
import CoffeeLink from '../components/coffeehint/CoffeeLink'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from './ui'

const shortcodes = { CoffeeHint }

const Template = ({ data }) => {
  const { mdx } = data
  const { frontmatter, timeToRead, body } = mdx

  const { title, date, featuredImage } = frontmatter

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title={frontmatter.title}
          ogImage={
            featuredImage.childImageSharp.gatsbyImageData.images.fallback.src
          }
        />
        <ui.PageHeader>Blog</ui.PageHeader>
        <ui.PageContent>
          <ui.GoBackSpan>
            <Link to="/blog/">Go back to other Blog Posts</Link>
          </ui.GoBackSpan>
          {data?.locales?.edges[0].node.language === 'de' ? (
            <p className="text-center bg-blue-100 p-6 rounded-lg shadow-md mb-10">
              ⚠️ Dieser Blog Post wurde leider noch nicht übersetzt. Falls du
              ihn auf deutsch lesen möchtest, schaue einfach später nochmal
              vorbei.
            </p>
          ) : null}
          <p></p>
          <h2>{title}</h2>
          <section className="flex gap-5 p-3 bg-slate-50 rounded-lg text-base mb-4">
            <time
              dateTime={date}
              className="mb-0 font-bold"
            >
              🗓 Published on: {date}
            </time>
            <time
              dateTime={timeToRead}
              className="mb-0 font-bold"
            >
              ⏱ Reading time: {timeToRead} min
            </time>
          </section>

          <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
          <p>
            <i>This blog post was originally published on {date}.</i>
          </p>
          <hr />
          <p>I wish you a wonderful day! Marco</p>
          <p>Enjoy my writings?</p>
          <CoffeeLink />
          <ui.GoBackSpan>
            <Link to="/blog/">Go back to other Blog Posts</Link>
          </ui.GoBackSpan>
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  )
}

Template.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        featuredImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.shape({
              src: PropTypes.string.isRequired,
              srcSet: PropTypes.string.isRequired,
              sizes: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      }),
      body: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
    }),
  }).isRequired,
}

export default Template

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
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
        featuredImageAlt
      }
      timeToRead
    }
  }
`
