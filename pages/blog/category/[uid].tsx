import React, { Fragment } from 'react'
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import { useRouter } from 'next/router'
import { generateRSSFeed } from 'lib/generateRSSfeed'
import { CustomLink } from '@/components/customlink'
import { createClient } from '@/prismicio'
import { getCustomTypes } from '@/lib/getCustomTypes'
import { getLocales } from '@/types/getLocales'
import {
  BlogcategoryDocument,
  BlogDocument,
  BlogPostDocument,
} from '@/prismicio-types'
import { BasicPageProps } from '@/types/basicpageprops'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import * as prismic from '@prismicio/client'

export async function getStaticProps({ params, previewData, locale }) {
  let page: BlogDocument | null = null
  let errorCode = null

  const client = createClient({ previewData })

  // await generateRSSFeed()

  try {
    page = await client.getByUID('blog', 'blog', {
      lang: locale,
    })
  } catch (error) {
    if (!(error as any).response) {
      errorCode = '404'
    }
  }

  const { header, footer } = await getCustomTypes(client, locale)
  const locales = await getLocales(page, client)
  const blogCategories = await client.getAllByType('blogcategory', {
    lang: '*',
  })

  const currentBlogCategory = blogCategories.find(
    (category) => category.uid === params.uid
  ).id
  const blogPosts = await client.getAllByType('blog_post', {
    lang: '*',
    filters: [
      prismic.filter.any('my.blog_post.tags.tag', [currentBlogCategory]),
    ],
  })

  return {
    props: {
      page,
      header,
      footer,
      locales,
      errorCode,
      blogPosts,
      blogCategories,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('blogcategory', {
    lang: '*',
  })

  return {
    paths: pages.map((page) => prismic.asLink(page)),
    fallback: false,
  }
}

interface BlogProps extends BasicPageProps {
  page: BlogDocument
  blogPosts: BlogPostDocument[]
  blogCategories: BlogcategoryDocument[]
}

export default function Blog({
  header,
  footer,
  locales,
  page,
  blogPosts,
  blogCategories,
}: BlogProps) {
  const location = useRouter()

  const blogPostByYear = blogPosts?.reduce((acc, post) => {
    const year = new Date(post.data.date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {})

  return (
    <Layout
      header={header}
      footer={footer}
      locales={locales}
    >
      <SEO
        title={page.data?.meta_title}
        ogImage={page.data?.meta_image.url}
        ogImageAlt={page.data?.meta_image.alt}
        description={page.data?.meta_description}
        location={location.asPath}
      />

      <SliceZone
        slices={page.data.slices}
        components={components}
      />

      <section className="mx-auto w-full max-w-3xl">
        {blogCategories.length > 0 ? (
          <Fragment>
            <ul className="m-0 flex list-none gap-4">
              {blogCategories.map((category) => (
                <li key={category.uid}>
                  <CustomLink href={`/blog/category/${category.uid}`}>
                    {category.data.title}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </Fragment>
        ) : null}
        {blogPostByYear &&
          Object.keys(blogPostByYear).map((year) => (
            <div key={year}>
              <h2>{year}</h2>
              <ul className="m-0 list-none">
                {blogPostByYear[year].map((post) => (
                  <li key={post.uid}>
                    <CustomLink href={post.url}>
                      {post.data.meta_title}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>
    </Layout>
  )
}
