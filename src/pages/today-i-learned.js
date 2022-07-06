import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/Button'
import theme from '../styles/theme'
import * as ui from '../styles/til/ui'
import { useTranslation } from 'react-i18next'

const TIL = ({ data }) => {
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
  }, [allItemsLoaded])

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
  }, [filterValue])

  const handleOnClick = () => {
    setAllItemsLoaded(!allItemsLoaded)
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth="1400px">
        <SEO
          title="Today I learned"
          ogImage={
            data.personalImg?.childImageSharp?.gatsbyImageData?.images
              ?.sources[0]?.srcSet
          }
          ogImageAlt="a picture of me"
          description={t('meta.til-description')}
        />
        <ui.PageHeader>Today I learned</ui.PageHeader>
        <label
          htmlFor="search"
          className="flex gap-2 items-center justify-center mt-10"
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

        <ul className="flex justify-center flex-wrap gap-4 mx-auto my-10 list-none max-w-3xl">
          {group.map((tag) => (
            <ui.Category
              key={tag.fieldValue}
              category={tag.fieldValue}
            >
              <Link to={`/today-i-learned/${tag.fieldValue}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </ui.Category>
          ))}
        </ul>

        <ui.PageContent>
          {items.map(({ node }, index) => {
            const { excerpt, fields, frontmatter, id } = node

            return (
              <Link
                key={id}
                to={`/${fields.slug}`}
              >
                <ui.Section>
                  <ui.Aside>
                    TIL #{frontmatter.number || edges?.length - index}
                  </ui.Aside>
                  <h3>{frontmatter.title}</h3>

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
    </ThemeProvider>
  )
}

TIL.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
      group: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
}

export default TIL

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    personalImg: file(relativePath: { eq: "marco_kuehbauch_square.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    allMdx(
      filter: { fields: { type: { eq: "today-i-learned-post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          body
          fields {
            slug
          }
          id
          excerpt
          frontmatter {
            number
            title
            tags
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
