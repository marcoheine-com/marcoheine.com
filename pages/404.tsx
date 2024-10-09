import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { createClient } from '@/prismicio'
import { getCustomTypes } from '@/lib/getCustomTypes'
import { FooterDocument, HeaderDocument } from '@/prismicio-types'
import { getLocales } from '@/types/getLocales'
import { Language } from '@prismicio/client'

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData })
  const { header, footer } = await getCustomTypes(client, locale)

  return {
    props: {
      header,
    },
  }
}

const NotFoundPage = ({
  header,
  locales,
  footer,
}: {
  header: HeaderDocument
  footer: FooterDocument
  locales: Language[]
}) => {
  return (
    <Layout
      header={header}
      locales={locales}
      footer={footer}
    >
      <SEO title="404: Not found" />
      <section className="mx-auto mt-20 mb-0">
        <h1>Oh no!</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </Layout>
  )
}

export default NotFoundPage
