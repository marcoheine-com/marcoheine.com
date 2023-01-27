import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import { CallToAction } from '../components/call-to-action'
import { useTranslation } from 'next-i18next'
import { WebProjects } from '../components/web-projects'
import { Testimonials } from '../components/testimonials'
import Link from 'next/link'
import Image from 'next/image'

const IndexPage = ({ data, location }) => {
  const { t } = useTranslation()
  if (!data) return <p>loading...</p>

  const latestBlogPosts = data.blogData.edges.slice(0, 3)
  const latestTILPosts = data.tilData.edges.slice(0, 3)

  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth="100%">
        <SEO
          title="Home | Marco Heine - Freelance Web Developer"
          ogImage={
            data.personalImg?.childImageSharp?.gatsbyImageData?.images?.fallback
              ?.src
          }
          ogImageAlt="a picture of me"
          description={t('meta.index-description')}
          location={location}
        />

        <ui.IndexWrapper>
          <div className="relative mb-32 flex max-w-lg flex-col items-start md:mt-20 md:max-w-3xl">
            <Link
              href="/work/"
              className="hover-trigger"
            >
              <Image
                alt="a picture of Marco Heine"
                src={data.personalImg.childImageSharp.gatsbyImageData}
                className="mb-10 transition-all md:mr-64"
              />
              <h1 className="hover-target mb-12 bg-white text-primaryColorOne md:absolute md:right-0 md:top-16 md:w-[495px] md:border-4 md:border-t-0 md:border-l-white md:border-b-primaryColorTwo md:border-r-primaryColorTwo md:p-5">
                <div className="top-6 -left-7 hidden h-0 w-0 border-y-[30px] border-r-[30px] border-y-transparent border-r-white md:absolute md:block"></div>
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

          <Testimonials />

          <section className="w-full max-w-4xl">
            <section className="mb-16 grid">
              <h2>{t('home.blog-posts')}</h2>
              <>
                {latestBlogPosts.map((post) => (
                  <Link
                    key={post.node.id}
                    href={`/${post.node.fields.slug}`}
                  >
                    <article
                      className={`grid ${
                        post.node.frontmatter.featuredImage
                          ? 'md:grid-cols-[350px_1fr]'
                          : 'md:grid-cols-[620px]'
                      } mb-10 gap-5 p-5 transition-all hover:rounded-xl hover:shadow-custom`}
                    >
                      <Image
                        alt={post.node.frontmatter.featuredImageAlt}
                        src={
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
                href="/blog/"
                className="mx-auto"
              >
                → {t('home.all-blog-posts')}
              </Link>
            </section>

            <section>
              <h2>{t('home.til-posts')}</h2>
              <ui.TILInnerWrapper>
                {latestTILPosts.map((post) => (
                  <Link
                    key={post.node.id}
                    href={`/${post.node.fields.slug}`}
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
