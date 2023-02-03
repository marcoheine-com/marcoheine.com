import React from 'react'
import Head from 'next/head'
import config from '../config'
import { StaticImageData } from 'next/image'

interface SEOProps {
  description?: string
  title?: string
  ogImage?: string | StaticImageData
  ogImageAlt?: string
  location?: string
}

const SEO: React.FC<SEOProps> = ({
  description,
  title,
  ogImage,
  ogImageAlt,
  location,
}) => {
  const metaDescription = description || config.description

  const url = location || ''
  const blogPostRegex = /\/blog\/[^/]+\/$/
  const isBlogPost = blogPostRegex.test(url)

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={metaDescription}
      />
      <meta
        name="og:type"
        content="website"
      />
      <meta
        name="og:title"
        content={title}
      />
      <meta
        name="og:description"
        content={metaDescription}
      />
      <meta
        name="og:site_name"
        content={config.title}
      />
      <meta
        name="og:url"
        content={`${config.siteUrl}${url}`}
      />
      <meta
        name="og:image"
        content={`${config.siteUrl}${ogImage}`}
      />
      <meta
        name="og:imageAlt"
        content={ogImageAlt || 'picture of Marco Heine'}
      />
      <meta
        name="twitter:card"
        content={`${isBlogPost ? 'summary_large_image' : 'summary'}`}
      />
      <meta
        name="twitter:image"
        content={`${config.siteUrl}${ogImage}`}
      />
      <meta
        name="twitter:image:alt"
        content={ogImageAlt}
      />
      <meta
        name="twitter:creator"
        content={config.author}
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={metaDescription}
      />
      <link
        rel="canonical"
        href={`${config.siteUrl}${url}`}
      />
      <link
        rel="icon"
        href="/favicon-32x32.png"
      />
    </Head>
  )
}

export default SEO
