import * as React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../components/layout'
import SEO from '../components/seo'
import * as ui from '../styles/index/ui'
import { CallToAction } from '../components/call-to-action'
import { useTranslation } from 'next-i18next'
import { WebProjects } from '../components/web-projects'
import { Testimonials } from '../components/testimonials'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '../lib/blog'
import MarcoHeineImg from '../images/marco-heine.webp'

export async function getStaticProps() {
  const blogPosts = getAllPosts()
  // const tilData = await getTILPosts()
  // const personalImg = await getPersonalImg()

  return {
    props: {
      ...(await serverSideTranslations('en', ['common'])),
      blogPosts: JSON.parse(JSON.stringify(blogPosts)),
      // tilData,
      // personalImg,
    },
  }
}
const IndexPage = ({ blogPosts, location }) => {
  const { t } = useTranslation()

  const latestBlogPosts = blogPosts.slice(0, 3)
  // const latestTILPosts = blogPosts.tilData.edges.slice(0, 3)

  return (
    <Layout maxWidth="100%">
      <SEO
        title="Home | Marco Heine - Freelance Web Developer"
        ogImage={MarcoHeineImg}
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
              src={MarcoHeineImg}
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
            {/* <>
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
              </> */}
            <Link
              href="/blog/"
              className="mx-auto"
            >
              → {t('home.all-blog-posts')}
            </Link>
          </section>

          {/* <section>
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
            </section> */}
        </section>
      </ui.IndexWrapper>
    </Layout>
  )
}

export default IndexPage
