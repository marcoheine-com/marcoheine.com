import * as React from 'react'
import Layout from 'components/layout'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import SEO from 'components/seo'
import { getAllPosts } from 'lib/blog'
import { getAllTILPosts, TILPost } from 'lib/til'
import { Testimonials } from 'components/testimonials'
import { CustomLink } from '@/components/customlink'
import { createClient } from '@/prismicio'
import { HomepageDocument } from '@/prismicio-types'
import { BasicPageProps } from '@/types/basicpageprops'
import { getLocales } from '@/types/getLocales'
import { getCustomTypes } from '@/lib/getCustomTypes'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
export interface IBlogPost {
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

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData })
  const blogPosts = getAllPosts({ withPrefix: true })
  const tilData = getAllTILPosts({ withPrefix: true })

  let page: HomepageDocument | null = null

  try {
    page = await client.getByUID('homepage', 'homepage', {
      lang: locale,
    })
  } catch (error) {
    console.error(error)
  }

  const locales = await getLocales(page, client)
  const { header, footer } = await getCustomTypes(client, locale)

  return {
    props: {
      blogPosts: JSON.parse(JSON.stringify(blogPosts)),
      tilData,
      page,
      locales,
      header,
      footer,
    },
  }
}

interface Homepage extends BasicPageProps {
  page: HomepageDocument
  blogPosts: IBlogPost[]
  tilData: TILPost[]
}

const IndexPage: React.FC<Homepage> = ({
  page,
  blogPosts,
  tilData,
  locales,
  header,
  footer,
}) => {
  const { t } = useTranslation()

  const latestBlogPosts = blogPosts.slice(0, 3)
  const latestTILPosts = tilData.slice(0, 3)

  return (
    <Layout
      maxWidth="max-w-full"
      header={header}
      footer={footer}
      locales={locales}
    >
      <SEO
        title={page.data.meta_title}
        ogImage={page.data.meta_image.url}
        ogImageAlt={page.data.meta_image.alt}
        description={page.data.meta_description}
      />

      <section className="flex flex-col items-center">
        <SliceZone
          slices={page.data.slices}
          components={components}
        />

        <section className="w-full max-w-4xl">
          <section className="mb-16 grid">
            <h2>{t('home.blog-posts')}</h2>
            <>
              {latestBlogPosts.map((post: IBlogPost) => (
                <article
                  key={post.frontmatter.title}
                  className={`relative ${
                    post.frontmatter.featuredImage
                      ? 'grid gap-5 md:grid-cols-[350px_1fr]'
                      : ''
                  } mb-10 p-5`}
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

                  <h3 className="text-primaryColorOne">
                    {post.frontmatter.title}
                  </h3>
                  <time className="text-[16px] text-grey md:col-start-1 md:col-end-2">
                    Published on: {post.frontmatter.date}
                  </time>
                  <p className="text-primaryColorOne">
                    {post.frontmatter.description}
                  </p>

                  <CustomLink href={`/${post.slug}`}>Read article</CustomLink>
                </article>
              ))}
            </>
            <CustomLink
              href="/blog/"
              className="mx-auto"
            >
              → {t('home.all-blog-posts')}
            </CustomLink>
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
