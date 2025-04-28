import * as React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { createClient } from '@/prismicio'
import { HomepageDocument } from '@/prismicio-types'
import { BasicPageProps } from '@/types/basicpageprops'
import { getLocales } from '@/types/getLocales'
import { getCustomTypes } from '@/lib/getCustomTypes'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData })

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
      page,
      locales,
      header,
      footer,
    },
  }
}

interface Homepage extends BasicPageProps {
  page: HomepageDocument
}

const IndexPage: React.FC<Homepage> = ({ page, locales, header, footer }) => {
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
      </section>
    </Layout>
  )
}

export default IndexPage
