import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { getAllTILPosts, getTILPostBySlug, TILPost } from 'lib/til'
import MarcoHeineImg from 'public/images/marco-heine.webp'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getMDX } from 'lib/getMDX'
import { PostFooter } from '@/components/post-footer'
import { PostHeader } from '@/components/post-header'

interface TILPostProps {
  tilPost: TILPost
  tilPostMDX: MDXRemoteSerializeResult
}

export async function getStaticProps({ params, locale }) {
  const tilPost = getTILPostBySlug(params.slug)
  const tilPostMDX = await getMDX(tilPost.content)

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

const TilPost: React.FC<NextPage & TILPostProps> = ({
  tilPost,
  tilPostMDX,
}) => {
  const location = useRouter()
  const { frontmatter } = tilPost

  return (
    <Layout>
      <SEO
        title={`Today I learned - ${frontmatter.title}`}
        description={frontmatter.description}
        ogImage={MarcoHeineImg}
        ogImageAlt={'a picture of Marco Heine'}
        location={location.asPath}
      />
      <h1 className="mt-5 mb-0 text-center">Today I learned</h1>
      <section className="mx-auto mt-20 mb-0">
        <h2>{frontmatter.title}</h2>
        <PostHeader
          date={frontmatter.date}
          type="today-i-learned"
          updated={frontmatter.updated}
          slug={tilPost.slug}
        />
        <MDXRemote {...tilPostMDX} />

        <PostFooter postType="til" />
      </section>
    </Layout>
  )
}

export default TilPost
