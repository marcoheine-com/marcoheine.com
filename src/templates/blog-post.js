import React from 'react'
import { graphql, Link } from 'gatsby'
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

  const { title, date } = frontmatter

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={frontmatter.title} />
        <ui.PageHeader>Blog</ui.PageHeader>
        <ui.PageContent>
          <ui.GoBackSpan>
            <Link to="/blog/">Go back to other Blog Posts</Link>
          </ui.GoBackSpan>
          <h2>{title}</h2>
          <section>
            <p>🗓 Published on: {date}</p>
            <p>⏱ Reading time: {timeToRead} min</p>
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
      }),
      body: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
    }),
  }).isRequired,
}

export default Template

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
    }
  }
`
