import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../../components/layout'
import CoffeeHint from '../../components/coffeehint'
import CoffeeLink from '../../components/coffeehint/CoffeeLink'
import SEO from '../../components/seo'
import theme from '../../styles/theme'
import * as ui from './ui'
import Link from 'next/link'

const shortcodes = { CoffeeHint }

const BlogPost = ({ data, location }) => {
  const { mdx } = data
  const { frontmatter, timeToRead, body, excerpt } = mdx

  const { title, date, updated, featuredImage, featuredImageAlt, description } =
    frontmatter

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title={`Blog | ${title}`}
          description={description || excerpt}
          ogImage={
            featuredImage?.childImageSharp?.gatsbyImageData?.images?.fallback
              ?.src
          }
          ogImageAlt={featuredImageAlt}
          location={location}
        />
        <h1 className="mb-0 text-center">Blog</h1>
        <ui.PageContent>
          <ui.GoBackSpan>
            <Link href="/blog/">Go back to other Blog Posts</Link>
          </ui.GoBackSpan>
          {data?.locales?.edges[0].node.language === 'de' ? (
            <p className="mb-10 rounded-lg bg-blue-100 p-6 text-center shadow-md">
              ⚠️ Dieser Blog Post wurde leider noch nicht übersetzt. Falls du
              ihn auf deutsch lesen möchtest, schaue einfach später nochmal
              vorbei.
            </p>
          ) : null}
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
              dateTime={timeToRead}
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

          {/* <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider> */}
          <hr />
          <p>
            I hope you enjoyed this article and learned something new. If you
            have any questions, feel free to reach out to me on{' '}
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
          <ui.GoBackSpan>
            <Link href="/blog/">Go back to other Blog Posts</Link>
          </ui.GoBackSpan>
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  )
}

export default BlogPost
