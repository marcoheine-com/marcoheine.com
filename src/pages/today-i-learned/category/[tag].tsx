import React, { useState } from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Link from 'next/link'
import { getAllTILPosts, getTILPostsByTag, TagName, TILPost } from 'lib/til'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Button from 'components/Button'
import { TagValues } from 'constants/tagvalues'
import { TILCard } from '@/components/til-card'

interface TILPostProps {
  tilPosts: TILPost[]
  tag: TagName
}

export async function getStaticProps({ params, locale }) {
  const tilPosts = getTILPostsByTag(params.tag)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      tilPosts: JSON.parse(JSON.stringify(tilPosts)),
      tag: params.tag,
    },
  }
}

export async function getStaticPaths({ locales }) {
  const tilPosts = getAllTILPosts()

  // create a path for each tag and locale
  const pathsWithLocales = tilPosts.reduce((acc, post) => {
    const { tags } = post.frontmatter

    tags?.forEach((tag: TagName) => {
      locales.forEach((locale) => {
        acc.push({
          params: {
            tag,
          },
          locale,
        })
      })
    })

    return acc
  }, [])

  return {
    paths: pathsWithLocales,
    fallback: false,
  }
}

const Tags: React.FC<NextPage & TILPostProps> = ({ tilPosts, tag }) => {
  const [allItemsLoaded, setAllItemsLoaded] = useState(false)
  const location = useRouter()

  const hasNumberOfEdges = tilPosts && tilPosts.length > 19

  const items =
    tilPosts &&
    (!allItemsLoaded && hasNumberOfEdges ? tilPosts.slice(0, 20) : tilPosts)
  const additionalItems = tilPosts.slice(20)

  const handleOnClick = () => {
    setAllItemsLoaded(!allItemsLoaded)
  }

  return (
    <Layout maxWidth="max-w-[1400px]">
      <SEO
        title={`Today I learned - ${tag}`}
        location={location.asPath}
      />
      <h1 className="mt-5 mb-0 text-center">Today I learned</h1>

      <ul
        className={`mx-auto my-10 flex max-w-3xl list-none justify-center gap-4 overflow-auto md:flex-wrap`}
      >
        <li className="m-0 shrink-0 py-4">
          {TagValues[tag]} - ({tilPosts.length})
        </li>

        <li className="m-0 shrink-0 py-4 text-primaryColorTwo">
          <Link href="/today-i-learned/">All tags</Link>
        </li>
      </ul>

      <section className="mx-auto mt-20 mb-0 grid justify-center gap-10 md:grid-cols-2 lg:gap-14 xl:grid-cols-3 xl:gap-10">
        {items.map((item) => {
          const { slug, frontmatter } = item

          return (
            <TILCard
              key={slug}
              title={frontmatter.title}
              tags={frontmatter.tags}
              slug={slug}
              number={frontmatter.number}
              description={frontmatter.description}
            />
          )
        })}
      </section>
      {hasNumberOfEdges && !allItemsLoaded && (
        <div className="mt-10 flex justify-center">
          <Button onClick={handleOnClick}>
            Load {additionalItems.length} more
          </Button>
        </div>
      )}
    </Layout>
  )
}

export default Tags
