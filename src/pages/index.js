import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import { CallToAction } from '../components/call-to-action'
import { useTranslation } from 'react-i18next'
import { WebProjects } from '../components/web-projects'
// import { Testimonials } from '../components/testimonials'

const IndexPage = ({ data, location }) => {
  const { t } = useTranslation()

  const latestBlogPosts = data.blogData.edges.slice(0, 3)
  const latestTILPosts = data.tilData.edges.slice(0, 3)

  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth="100%">
        <SEO
          title="Home"
          ogImage={
            data.personalImg?.childImageSharp?.gatsbyImageData?.images?.fallback
              ?.src
          }
          ogImageAlt="a picture of me"
          description={t('meta.index-description')}
          location={location}
        />

        <ui.IndexWrapper>
          <div className="flex flex-col items-start mb-32 max-w-lg relative md:mt-18 md:max-w-3xl">
            <Link
              to="/work/"
              className="hover-trigger"
            >
              <GatsbyImage
                alt="a picture of Marco Heine"
                image={data.personalImg.childImageSharp.gatsbyImageData}
                className="mb-10 md:mr-64 transition-all hover-target-image"
              />
              <h1 className="hover-target mb-12 text-primaryColorOne bg-white md:p-5 md:absolute md:right-0 md:top-16 md:w-[495px] md:border-4 md:border-t-0 md:border-l-white md:border-b-primaryColorTwo md:border-r-primaryColorTwo">
                <div className="hidden md:block md:absolute top-6 -left-7 w-0 h-0 border-t-[30px] border-b-[30px] border-r-[30px] border-t-transparent border-b-transparent border-r-white"></div>
                {t('home.intro')}
              </h1>
            </Link>

            <div className="max-w-lg self-center">
              <h2 className="text-primaryColorTwo">{t('home.welcome')}</h2>
              <p>
                {t('home.welcome-one')}
                <strong>{t('home.welcome-two')}</strong>
                {t('home.welcome-three')}
              </p>
              <p>{t('home.welcome-four')}</p>
              <CallToAction
                href="/work/"
                isInternalLink
              >
                {t('home.work')}
              </CallToAction>
            </div>
          </div>

          <WebProjects />

          {/* <Testimonials /> */}

          <section className="w-full max-w-4xl">
            <section className="mb-16 grid">
              <h2>{t('home.blog-posts')}</h2>
              <>
                {latestBlogPosts.map((post) => (
                  <Link
                    key={post.node.id}
                    to={`/${post.node.fields.slug}`}
                  >
                    <article className="grid md:grid-cols-[350px_1fr] gap-5 p-5 transition-all hover:shadow-custom hover:rounded-xl mb-10">
                      <GatsbyImage
                        alt={post.node.frontmatter.featuredImageAlt}
                        image={
                          post.node.frontmatter.featuredImage?.childImageSharp
                            .gatsbyImageData
                        }
                      />
                      <section>
                        <h3 className="text-primaryColorOne">
                          {post.node.frontmatter.title}
                        </h3>
                        <ui.Time>
                          Published on: {post.node.frontmatter.date}
                        </ui.Time>
                        <p>{post.node.excerpt}</p>
                        <ui.BlogLink>Read article</ui.BlogLink>
                      </section>
                    </article>
                  </Link>
                ))}
              </>
              <Link
                to="/blog/"
                className="ml-auto"
              >
                → All blog posts
              </Link>
            </section>

            <section>
              <h2>{t('home.til-posts')}</h2>
              <ui.TILInnerWrapper>
                {latestTILPosts.map((post) => (
                  <Link
                    key={post.node.id}
                    to={`/${post.node.fields.slug}`}
                  >
                    <ui.TILCard>
                      <ui.BlogLink>{post.node.frontmatter.title}</ui.BlogLink>
                      <ui.Time>
                        Published on: {post.node.frontmatter.date}
                      </ui.Time>
                    </ui.TILCard>
                  </Link>
                ))}
              </ui.TILInnerWrapper>
            </section>
          </section>
        </ui.IndexWrapper>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage

export const query = graphql`
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
    blogData: allMdx(
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
              childImageSharp {
                gatsbyImageData
              }
            }
            featuredImageAlt
          }
        }
      }
    }
    tilData: allMdx(
      filter: { fields: { type: { eq: "today-i-learned-post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
