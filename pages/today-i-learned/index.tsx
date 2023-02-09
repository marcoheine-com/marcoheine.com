import * as React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Button from '../../components/Button'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getAllTILPosts, getAllTILTags, Tag, TILPost } from 'lib/til'
import { NextPage } from 'next'
import MarcoHeineImg from '../../public/images/marco-heine.webp'
import { useRouter } from 'next/router'
import { TagValues } from 'constants/tagvalues'

interface TILPostProps {
  tilPosts: TILPost[]
  allTags: Tag[]
}

export async function getStaticProps({ locale }) {
  const tilPosts = getAllTILPosts({ withPrefix: true })
  const allTags = getAllTILTags()

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      tilPosts: JSON.parse(JSON.stringify(tilPosts)),
      allTags,
    },
  }
}

const TIL: React.FC<NextPage & TILPostProps> = ({ tilPosts, allTags }) => {
  const [items, setItems] = React.useState(tilPosts?.slice(0, 20))
  const [allItemsLoaded, setAllItemsLoaded] = React.useState(false)
  const [filterValue, setFilterValue] = React.useState('')

  const { t } = useTranslation()
  const location = useRouter()

  const additionalItems = tilPosts.slice(20)

  React.useEffect(() => {
    if (!allItemsLoaded) {
      return
    }

    setItems(tilPosts)
  }, [allItemsLoaded, tilPosts])

  React.useEffect(() => {
    if (!filterValue) {
      return setItems(tilPosts?.slice(0, 20))
    }

    const filteredItems = tilPosts.filter(
      (post) =>
        post.frontmatter.title
          .toLowerCase()
          .includes(filterValue.toLowerCase()) ||
        post.frontmatter?.tags
          ?.map((tag) => tag.toLowerCase())
          .includes(filterValue.toLowerCase()) ||
        post.content.toLowerCase().includes(filterValue.toLowerCase())
    )

    setItems(filteredItems)
  }, [filterValue, tilPosts])

  const handleOnClick = () => {
    setAllItemsLoaded(!allItemsLoaded)
  }

  return (
    <Layout maxWidth="max-w-[1400px]">
      <SEO
        title="Today I learned | Marco Heine - Freelance Web Developer"
        ogImage={MarcoHeineImg}
        ogImageAlt="a picture of me"
        description={t('meta.til-description')}
        location={location.asPath}
      />
      <h1 className="mt-5 mb-0 text-center">Today I learned</h1>
      <label
        htmlFor="search"
        className="mt-10 flex items-center justify-center gap-2"
      >
        <input
          type="text"
          id="search"
          name="search"
          value={filterValue}
          placeholder="Search"
          onChange={(e) => setFilterValue(e.target.value)}
          className="border-2 border-blue-200 p-2"
        />
        <button
          onClick={() => setFilterValue('')}
          disabled={filterValue === ''}
          className="disabled:opacity-50"
        >
          Clear
        </button>
      </label>

      <ul className="mx-auto my-10 flex max-w-3xl list-none justify-start gap-4 overflow-auto p-4 md:flex-wrap md:justify-center md:p-0">
        {allTags?.map((tag: Tag) => (
          <li
            className="m-0 shrink-0 text-primaryColorTwo"
            key={tag.name}
          >
            <Link href={`/today-i-learned/category/${tag.name.toLowerCase()}/`}>
              {TagValues[tag.name]} ({tag.count})
            </Link>
          </li>
        ))}
      </ul>

      <section className="mx-auto mt-20 mb-0 grid justify-center gap-10 md:grid-cols-2 lg:gap-14 xl:grid-cols-3 xl:gap-10">
        {items.map((item, index) => {
          const { frontmatter } = item

          return (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
            >
              <section className="rounded-3xl p-14 text-primaryColorOne shadow-custom transition-all duration-100 ease-linear hover:translate-y-[-5px] hover:shadow-customHover">
                <aside className="mb-3 inline-block rotate-3 border-[3px] border-dotted border-primaryColorOne bg-white py-2 px-4 font-bold text-primaryColorOne transition-all duration-100 ease-linear hover:rotate-0 hover:bg-primaryColorOne hover:text-white ">
                  TIL #{frontmatter.number || tilPosts?.length - index}
                </aside>
                <h2>{frontmatter.title}</h2>

                {frontmatter.tags && (
                  <section className="mb-4 flex flex-wrap gap-3">
                    {frontmatter.tags.map((tag) => (
                      <span
                        className="font-bold"
                        key={tag}
                      >
                        #{tag}
                      </span>
                    ))}
                  </section>
                )}

                <section>
                  <p>{frontmatter.description}</p>

                  <span className="text-primaryColorTwo before:mr-1 before:text-primaryColorOne before:transition-[margin] before:duration-200 before:ease-linear before:content-['→'] hover:text-linkHover hover:before:mr-0 hover:before:ml-1">
                    Read more
                  </span>
                </section>
              </section>
            </Link>
          )
        })}
      </section>
      {!allItemsLoaded && !filterValue && (
        <div className="mt-10 flex justify-center">
          <Button onClick={handleOnClick}>
            Load {additionalItems.length} more
          </Button>
        </div>
      )}
    </Layout>
  )
}

export default TIL
