import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/Button'
import * as ui from '../styles/til/ui'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const TIL = ({ data, location }) => {
  const { allMdx } = data
  const { edges, group } = allMdx

  const [items, setItems] = React.useState(edges?.slice(0, 20))
  const [allItemsLoaded, setAllItemsLoaded] = React.useState(false)
  const [filterValue, setFilterValue] = React.useState('')

  const { t } = useTranslation()

  const additionalItems = edges.slice(20)

  React.useEffect(() => {
    if (!allItemsLoaded) {
      return
    }

    setItems(edges)
  }, [allItemsLoaded, edges])

  React.useEffect(() => {
    if (!filterValue) {
      return setItems(edges?.slice(0, 20))
    }

    const filteredItems = edges.filter(
      ({ node }) =>
        node.frontmatter.title
          .toLowerCase()
          .includes(filterValue.toLowerCase()) ||
        node.frontmatter?.tags
          ?.map((tag) => tag.toLowerCase())
          .includes(filterValue.toLowerCase()) ||
        node.body.toLowerCase().includes(filterValue.toLowerCase())
    )

    setItems(filteredItems)
  }, [filterValue, edges])

  const handleOnClick = () => {
    setAllItemsLoaded(!allItemsLoaded)
  }

  return (
    <Layout maxWidth="1400px">
      <SEO
        title="Today I learned | Marco Heine - Freelance Web Developer"
        ogImage={
          data.personalImg?.childImageSharp?.gatsbyImageData?.images?.fallback
            ?.src
        }
        ogImageAlt="a picture of me"
        description={t('meta.til-description')}
        location={location}
      />
      <ui.PageHeader>Today I learned</ui.PageHeader>
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

      <ul className="mx-auto my-10 flex max-w-3xl list-none justify-start gap-4 overflow-auto md:flex-wrap md:justify-center">
        {group.map((tag) => (
          <li
            className="m-0 shrink-0 py-4 text-primaryColorTwo"
            key={tag.fieldValue}
          >
            <Link href={`/today-i-learned/${tag.fieldValue.toLowerCase()}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>

      <ui.PageContent>
        {items.map(({ node }, index) => {
          const { excerpt, fields, frontmatter, id } = node

          return (
            <Link
              key={id}
              href={`/${fields.slug}`}
            >
              <ui.Section>
                <ui.Aside>
                  TIL #{frontmatter.number || edges?.length - index}
                </ui.Aside>
                <h2>{frontmatter.title}</h2>

                {frontmatter.tags && (
                  <ui.tags>
                    {frontmatter.tags.map((tag) => (
                      <ui.tag key={tag}>#{tag}</ui.tag>
                    ))}
                  </ui.tags>
                )}

                <section>
                  <p>{excerpt}</p>
                  <ui.Readmore>Read more</ui.Readmore>
                </section>
              </ui.Section>
            </Link>
          )
        })}
      </ui.PageContent>
      {!allItemsLoaded && !filterValue && (
        <ui.Slot>
          <Button onClick={handleOnClick}>
            Load {additionalItems.length} more
          </Button>
        </ui.Slot>
      )}
    </Layout>
  )
}

export default TIL
