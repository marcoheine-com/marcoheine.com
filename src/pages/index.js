import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import { CallToAction } from '../components/call-to-action'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      personalImg: file(relativePath: { eq: "marco_kuehbauch_square.jpeg" }) {
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
        filter: { fields: { type: { eq: "today-I-learned-post" } } }
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
  `)

  const latestBlogPosts = data.blogData.edges.slice(0, 3)
  const latestTILPosts = data.tilData.edges.slice(0, 3)

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />

        <ui.IndexWrapper>
          <div className="flex flex-col items-start mb-32 max-w-lg relative md:mt-18 md:max-w-3xl">
            <Link to="/work/" className="hover-trigger">
              <GatsbyImage
                alt="a picture of Marco Kühbauch"
                image={data.personalImg.childImageSharp.gatsbyImageData}
                className="mb-10 md:mr-64 transition-all hover-target-image"
              />
              <h1 className="hover-target mb-12 text-primaryColorOne bg-white md:p-5 md:absolute md:right-0 md:top-16 md:w-[465px] md:border-4 md:border-t-0 md:border-l-white md:border-b-primaryColorTwo md:border-r-primaryColorTwo">
                <div className="hidden md:block md:absolute top-6 -left-7 w-0 h-0 border-t-[30px] border-b-[30px] border-r-[30px] border-t-transparent border-b-transparent border-r-white"></div>
                I'm Marco - a Freelance Web Developer and I make websites.
              </h1>
            </Link>

            <div className="max-w-lg self-center">
              <h2 className="text-primaryColorTwo">Hi, and welcome!</h2>
              <p>
                I love to help people to get{' '}
                <strong>fast, accessible and great looking websites</strong>.
                Have an interesting project or idea?
              </p>
              <p>
                Have a look at my skills and how I work and let’s see how I can
                help you!
              </p>
              <CallToAction href="/work/" isInternalLink>
                Work with me
              </CallToAction>
            </div>
          </div>

          <ui.PostOuterWrapper>
            <ui.BlogPostWrapper>
              <h2>Latest blog posts:</h2>
              <>
                {latestBlogPosts.map((post) => (
                  <Link key={post.node.id} to={`/${post.node.fields.slug}`}>
                    <article className="grid md:grid-cols-[350px_1fr] md:grid-rows-[200px] gap-5 p-5 transition-all hover:shadow-custom hover:rounded-xl mb-2">
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
                        <ui.BlogLink>Read article</ui.BlogLink>
                      </section>
                    </article>
                  </Link>
                ))}
              </>
            </ui.BlogPostWrapper>

            <section>
              <h2>Today I learned:</h2>
              <ui.TILInnerWrapper>
                {latestTILPosts.map((post) => (
                  <Link key={post.node.id} to={`/${post.node.fields.slug}`}>
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
          </ui.PostOuterWrapper>
        </ui.IndexWrapper>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
