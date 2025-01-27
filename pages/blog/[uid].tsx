import * as React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { PostFooter } from '@/components/post-footer'
import { PostHeader } from '@/components/post-header'
import { createClient } from '@/prismicio'
import * as prismic from '@prismicio/client'
import { BlogcategoryDocument, BlogPostDocument } from '@/prismicio-types'
import { getCustomTypes } from '@/lib/getCustomTypes'
import { getLocales } from '@/types/getLocales'
import { BasicPageProps } from '@/types/basicpageprops'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'

type PageParams = { uid: string }
export async function getStaticProps({
  params,
  previewData,
  locale,
}: GetStaticPropsContext<PageParams>) {
  const client = createClient({ previewData })

  let page: BlogPostDocument | null = null
  let errorCode = null
  try {
    page = await client.getByUID('blog_post', params?.uid ?? '', {
      lang: locale,
      fetchLinks: ['blogcategory.title'],
    })
  } catch (error) {
    if (!(error as any).response) {
      errorCode = '404'
    }
  }

  const { header, footer } = await getCustomTypes(client, locale)
  const locales = await getLocales(page, client)

  return {
    props: { page, header, footer, locales, errorCode },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('blog_post', {
    lang: '*',
  })

  return {
    paths: pages.map((page) => prismic.asLink(page)),
    fallback: false,
  }
}

interface BlogPostDocumentProps extends BasicPageProps {
  page: BlogPostDocument
}

const BlogPost = ({ page, header, footer, locales }: BlogPostDocumentProps) => {
  const location = useRouter()
  const { meta_description, meta_image, meta_title, date, lastUpdated } =
    page?.data

  return (
    <Layout
      header={header}
      footer={footer}
      locales={locales}
    >
      <SEO
        title={`${
          meta_title.length > 50
            ? `${meta_title}`
            : `Marco Heine - Blog | ${meta_title}`
        }`}
        description={meta_description}
        ogImage={meta_image?.url}
        ogImageAlt={meta_image.alt || ''}
        location={location.asPath}
      />
      <h1 className="mb-0 text-center">Blog</h1>

      <h2 className="mt-8 mb-0 self-start md:mt-16">{meta_title}</h2>

      <PostHeader
        date={date}
        updated={lastUpdated}
        categories={page.data.tags}
      />

      <SliceZone
        slices={page.data.slices}
        components={components}
      />

      <PostFooter />
    </Layout>
  )
}

export default BlogPost
