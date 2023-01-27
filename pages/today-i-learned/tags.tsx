import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Button from '../../components/Button'
import theme from '../../styles/theme'
import * as ui from '../../styles/til/ui'
import Link from 'next/link'

const Tags = ({ data, location }) => {
  const [allItemsLoaded, setAllItemsLoaded] = useState(false)

  const { allMdx } = data
  const { edges, group } = allMdx
  const hasNumberOfEdges = edges && edges.length > 19

  const items =
    edges && (!allItemsLoaded && hasNumberOfEdges ? edges.slice(0, 20) : edges)
  const additionalItems = edges.slice(20)

  const handleOnClick = () => {
    setAllItemsLoaded(!allItemsLoaded)
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth="1400px">
        <SEO
          title={`Today I learned - ${group[0].fieldValue}`}
          location={location}
        />
        <ui.PageHeader>Today I learned</ui.PageHeader>

        <section
          className={`flex ${
            group.length > 3
              ? 'justify-start md:justify-center'
              : 'justify-center'
          } mx-auto my-10 max-w-3xl list-none gap-4 overflow-auto md:flex-wrap`}
        >
          <li className="m-0 shrink-0 py-4 text-primaryColorTwo">
            <Link href="/today-i-learned/">All tags</Link>
          </li>
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
        </section>

        <ui.PageContent>
          {items.map(({ node }) => {
            const { excerpt, fields, frontmatter, id } = node

            return (
              <Link
                key={id}
                href={`/${fields.slug}`}
              >
                <ui.Section>
                  <ui.Aside>TIL #{frontmatter.number}</ui.Aside>
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
        {hasNumberOfEdges && !allItemsLoaded && (
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

export default Tags
