import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import * as ui from '../../styles/til-post/ui'

interface TILPostProps {
  tilPost: TILPost
  location: Location
  tilPostMDX: MDXRemoteSerializeResult
}

export async function getStaticProps({ params, locale }) {
  const tilPost = getTILPostBySlug(params.slug)
  const tilPostMDX = await serialize(tilPost.content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight, {}],
    },
  })

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      tilPost,
      tilPostMDX,
    },
  }
}

export async function getStaticPaths({ locales }) {
  const tilPosts = getAllTILPosts()

  const pathsWithLocales = tilPosts.reduce((acc, blogPost) => {
    const { slug } = blogPost
    const paths = locales.map((locale) => ({
      params: { slug },
      locale,
    }))
    return [...acc, ...paths]
  }, [])

  return {
    paths: pathsWithLocales,
    fallback: false,
  }
}

const TilPost = ({ data, location }) => {
  if (!data) {
    return null
  }

  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <SEO
        title={`Today I learned - ${frontmatter.title}`}
        description={frontmatter.description}
        ogImage={
          data.personalImg?.childImageSharp?.gatsbyImageData?.images?.fallback
            ?.src
        }
        ogImageAlt="a picture of me"
        location={location}
      />
      <ui.PageHeader>Today I learned</ui.PageHeader>
      <ui.PageContent>
        <section className="mb-4 rounded-lg bg-slate-50 p-3 text-base">
          <time dateTime={frontmatter.date}>
            🗓 Published on: {frontmatter.date}
          </time>
        </section>
        <h2>{frontmatter.title}</h2>
        {/* <MDXRenderer>{body}</MDXRenderer> */}
        <p>
          <i>Greetings Marco</i>
        </p>
        <ui.GoBackSpan>
          <Link href="/today-i-learned/">
            Go back to other today-i-learned posts
          </Link>
        </ui.GoBackSpan>
      </ui.PageContent>
    </Layout>
  )
}

export default TilPost
