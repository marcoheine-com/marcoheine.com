import React, { Fragment } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { useRouter } from 'next/router'
import { generateRSSFeed } from 'lib/generateRSSfeed'
import { CustomLink } from '@/components/customlink'
import { createClient } from '@/prismicio'
import { getCustomTypes } from '@/lib/getCustomTypes'
import { getLocales } from '@/types/getLocales'
import { BlogcategoryDocument, BlogDocument } from '@/prismicio-types'
import { BasicPageProps } from '@/types/basicpageprops'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import NotFoundPage from '../404'
import { Tags } from '@/components/tags'
import { getTagsWithCount } from '@/lib/getTagsWithCount'
import { BlogPostWithCategories } from '@/types/blogPostWithCategories'

export async function getStaticProps({ previewData, locale }) {
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
  const blogPosts = await client.getAllByType<BlogPostWithCategories>(
    'blog_post',
    {
      lang: '*',
      orderings: {
        field: 'my.blog_post.date',
        direction: 'desc',
      },
    }
  )
  const blogCategories = await client.getAllByType('blogcategory', {
    lang: '*',
  })
  const blogCategoriesWithCount = getTagsWithCount(blogCategories, blogPosts)

  return {
    props: {
      page,
      header,
      footer,
      locales,
      errorCode,
      blogPosts,
      blogCategoriesWithCount,
    },
  }
}

export interface BlogCategoryWithCount extends BlogcategoryDocument {
  count: number
}

interface BlogProps extends BasicPageProps {
  page: BlogDocument
  blogPosts: BlogPostWithCategories[]
  blogCategoriesWithCount: BlogCategoryWithCount[]
}

export default function Blog({
  header,
  footer,
  locales,
  page,
  blogPosts,
  blogCategoriesWithCount,
  errorCode,
}: BlogProps) {
  const location = useRouter()

  if (errorCode) {
    return (
      <NotFoundPage
        header={header}
        footer={footer}
        locales={locales}
      />
    )
  }

  const latestPosts = blogPosts.slice(0, 3)
  const allOtherPosts = blogPosts.slice(3)

  const blogPostByYear = allOtherPosts.reduce((acc, post) => {
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
        <Tags tags={blogCategoriesWithCount} />
        <h2 className="mt-6">Latest Posts</h2>
        <ul className="m-0 list-none">
          {latestPosts.map((post) => (
            <li key={post.uid}>
              <CustomLink href={post.url}>{post.data.meta_title}</CustomLink>
            </li>
          ))}
        </ul>

        {Object.keys(blogPostByYear)
          .reverse()
          .map((year) => (
            <div key={year}>
              <h2 className="mt-6">{year}</h2>
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
