import * as React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from 'components/layout'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import SEO from 'components/seo'
import { getAllPosts } from 'lib/blog'
import { getAllTILPosts, TILPost } from 'lib/til'
import MarcoHeineImg from 'public/images/marco-heine.webp'
import { CallToAction } from 'components/call-to-action'
import { WebProjects } from 'components/web-projects'
import { Testimonials } from 'components/testimonials'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

interface IndexPageProps {
  blogPosts: BlogPost[]
  tilData: TILPost[]
}
export interface BlogPost {
  slug: string
  frontmatter: {
    title: string
    date: string
    description: string
    updated: string
    path: string
    featuredImage?: StaticImageData
    featuredImageAlt?: string
  }
  content: string
}

export async function getStaticProps({ locale }) {
  const blogPosts = getAllPosts({ withPrefix: true })
  const tilData = getAllTILPosts({ withPrefix: true })

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      blogPosts: JSON.parse(JSON.stringify(blogPosts)),
      tilData,
    },
  }
}

const IndexPage: React.FC<NextPage & IndexPageProps> = ({
  blogPosts,
  tilData,
}) => {
  const { t } = useTranslation()

  const latestBlogPosts = blogPosts.slice(0, 3)
  const latestTILPosts = tilData.slice(0, 3)
  const location = useRouter()

  return (
    <Layout maxWidth="max-w-full">
      <SEO
        title="Home | Marco Heine - Freelance Web Developer"
        ogImage={MarcoHeineImg}
        ogImageAlt="a picture of me"
        description={t('meta.index-description')}
        location={location.asPath}
      />

      <section className="flex flex-col items-center">
        <div className="relative mb-32 flex max-w-lg flex-col items-start lg:mt-20 lg:max-w-3xl">
          <Link
            href="/work/"
            className="hover-trigger"
          >
            <Image
              alt="a picture of Marco Heine"
              src={MarcoHeineImg}
              className="mb-10 duration-500 lg:mr-64"
              width={500}
              height={500}
              priority
            />
            <h1 className="hover-target mb-12 bg-white text-primaryColorOne lg:absolute lg:right-0 lg:top-16 lg:w-[495px] lg:border-4 lg:border-t-0 lg:border-l-white lg:border-b-primaryColorTwo lg:border-r-primaryColorTwo lg:p-5">
              <div className="top-6 -left-7 hidden h-0 w-0 border-y-[30px] border-r-[30px] border-y-transparent border-r-white lg:absolute lg:block"></div>
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
              {latestBlogPosts.map((post: BlogPost) => (
                <Link
                  key={post.frontmatter.title}
                  href={`/${post.slug}`}
                >
                  <article
                    className={`relative grid ${
                      post.frontmatter.featuredImage
                        ? 'md:grid-cols-[350px_1fr]'
                        : 'md:grid-cols-[620px]'
                    } mb-10 gap-5 p-5 transition-all hover:rounded-xl hover:shadow-custom`}
                  >
                    {post.frontmatter.featuredImage && (
                      <Image
                        alt={post.frontmatter.featuredImageAlt}
                        src={post.frontmatter.featuredImage}
                        sizes="100vw"
                        height="700"
                        width="700"
                      />
                    )}
                    <section>
                      <h3 className="text-primaryColorOne">
                        {post.frontmatter.title}
                      </h3>
                      <time className="text-[16px] text-grey md:col-start-1 md:col-end-2">
                        Published on: {post.frontmatter.date}
                      </time>
                      <p className="text-primaryColorOne">
                        {post.frontmatter.description}
                      </p>
                      <span className="mt-auto self-start text-primaryColorTwo before:mr-1 before:text-primaryColorOne before:transition-[margin] before:duration-200 before:ease-linear before:content-['→'] hover:text-linkHover hover:before:mr-0 hover:before:ml-1">
                        Read article
                      </span>
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
            <section className="grid grid-cols-auto-grid-200-1fr gap-10">
              {latestTILPosts.map((post: TILPost) => (
                <Link
                  key={post.frontmatter.title}
                  href={`/${post.slug}`}
                >
                  <article className="flex flex-col p-5 text-primaryColorTwo transition-shadow duration-200 ease-linear hover:rounded-xl hover:shadow-custom">
                    <span className="mt-auto self-start text-primaryColorTwo before:mr-1 before:text-primaryColorOne before:transition-[margin] before:duration-200 before:ease-linear before:content-['→'] hover:text-linkHover hover:before:mr-0 hover:before:ml-1">
                      {post.frontmatter.title}
                    </span>
                    <time className="text-[16px] text-grey md:col-start-1 md:col-end-2">
                      Published on: {post.frontmatter.date}
                    </time>
                  </article>
                </Link>
              ))}
            </section>
          </section>
        </section>
      </section>
    </Layout>
  )
}

export default IndexPage
