import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/Button';
import theme from '../styles/theme';
import * as ui from '../styles/til/ui';

const TIL = ({ data }) => {
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);

  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;

  const items = edges && (!allItemsLoaded ? edges.slice(0, 10) : edges);
  const additionalItems = edges.slice(10);

  const randomNumber = Math.floor(Math.random() * Math.floor(13999));

  const handleOnClick = () => {
    setAllItemsLoaded(!allItemsLoaded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Today I learned" />
        <ui.PageHeader>Today I learned</ui.PageHeader>

        <ui.PageContent>
          {items.map(({ node }, index) => {
            const { excerpt, fields, frontmatter, id } = node;

            return (
              <Link key={id} to={`/${fields.slug}`}>
                <ui.Section>
                  <ui.Aside>TIL #{randomNumber - index}</ui.Aside>
                  <h3>{frontmatter.title}</h3>

                  <section>
                    <p>{excerpt}</p>
                    <Link to={`/${fields.slug}`}>Read more</Link>
                  </section>
                </ui.Section>
              </Link>
            );
          })}

          {!allItemsLoaded && (
            <ui.Slot>
              <Button onClick={handleOnClick}>
                Load {additionalItems.length} more
              </Button>
            </ui.Slot>
          )}
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  );
};

TIL.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default TIL;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "today-I-learned-post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
