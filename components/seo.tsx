import React from 'react'
import Head from 'next/head'
import { StaticImageData } from 'next/image'
import { config } from 'config'
import { useRouter } from 'next/router'

interface SEOProps {
  description?: string
  title?: string
  ogImage?: StaticImageData | string
  ogImageAlt?: string
  location?: string
}

const isStaticImage = (
  image: StaticImageData | string
): image is StaticImageData => {
  return (image as StaticImageData)?.src !== undefined
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
  const lng = useRouter()
  const isDefaultLocale = lng.locale === 'en'

  const validOgImage = isStaticImage(ogImage) ? ogImage.src : ogImage

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={metaDescription}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
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
        content={`${
          isDefaultLocale
            ? `${config.siteUrl}${url}`
            : `${config.siteUrl}/${lng.locale}${url}`
        }`}
      />
      <meta
        name="og:image"
        content={`${
          ogImage
            ? `${config.siteUrl}${validOgImage}`
            : `${config.siteUrl}/images/marco-heine.webp`
        }`}
      />
      <meta
        name="og:imageAlt"
        content={ogImageAlt || 'picture of Marco Heine'}
      />
      <link
        rel="canonical"
        href={`${
          isDefaultLocale
            ? `${config.siteUrl}${url}`
            : `${config.siteUrl}/${lng.locale}${url}`
        }`}
      />
      <link
        rel="icon"
        href="/favicon-32x32.png"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${config.title} RSS Feed`}
        href="/rss.xml"
      />
    </Head>
  )
}

export default SEO
