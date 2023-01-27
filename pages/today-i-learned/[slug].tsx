import Link from 'next/link'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import theme from '../../styles/theme'
import * as ui from '../../styles/til-post/ui'

const TilPost = ({ data, location }) => {
  if (!data) {
    return null
  }

  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title={`Today I learned - ${frontmatter.title}`}
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
          <section className="mb-4 rounded-lg bg-slate-50 p-3 text-base">
            <time dateTime={frontmatter.date}>
              🗓 Published on: {frontmatter.date}
            </time>
          </section>
          <h2>{frontmatter.title}</h2>
          {/* <MDXRenderer>{body}</MDXRenderer> */}
          <p>
            <i>Greetings Marco</i>
          </p>
          <ui.GoBackSpan>
            <Link href="/today-i-learned/">
              Go back to other today-i-learned posts
            </Link>
          </ui.GoBackSpan>
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  )
}

export default TilPost
