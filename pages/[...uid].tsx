import { createClient } from '@/prismicio'
import { GetStaticPropsContext } from 'next'
import * as prismic from '@prismicio/client'
import { BasicPageProps } from '@/types/basicpageprops'
import Error from 'next/error'
import { getCustomTypes } from '@/lib/getCustomTypes'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import Layout from '@/components/layout'
import { PageDocument } from '@/prismicio-types'
import { getLocales } from '@/types/getLocales'
import { useRouter } from 'next/router'
import SEO from '@/components/seo'

type PageParams = { uid: string }

export async function getStaticProps({
  params,
  previewData,
  locale,
}: GetStaticPropsContext<PageParams>) {
  const client = createClient({ previewData })

  let page: PageDocument | null = null
  let errorCode = null

  try {
    const uid = params?.uid[params?.uid.length - 1]

    page = await client.getByUID('page', uid || '', {
      lang: locale,
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

  const pages = await client.getAllByType('page', { lang: '*' })

  return {
    paths: pages.map((page) => prismic.asLink(page)),
    fallback: true,
  }
}

interface ContentPageProps extends BasicPageProps {
  page: PageDocument
}

export default function Contentpage({
  page,
  header,
  footer,
  locales,
  errorCode,
}: ContentPageProps) {
  const location = useRouter()

  if (errorCode) {
    return <Error statusCode={404} />
  }

  return (
    <Layout
      maxWidth="max-w-[1920px]"
      locales={locales}
      header={header}
      footer={footer}
    >
      <SEO
        title={page.data.meta_title}
        ogImage={page.data.meta_image.url}
        ogImageAlt={page.data.meta_image.alt}
        description={page.data.meta_description}
        location={location.asPath}
      />

      <SliceZone
        slices={page.data.slices}
        components={components}
      />
    </Layout>
  )
}
