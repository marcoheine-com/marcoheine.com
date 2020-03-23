import React from 'react';
import { ThemeProvider } from 'styled-components';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import { til } from '../constants/cardData';
import tilData from '../constants/tilData';
import theme from '../styles/theme';
import * as ui from '../styles/til/ui';

const TIL = ({ data }) => {
  const reversedData = tilData && [...tilData].reverse();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Today I learned" />
        <Card h1={til.h1} textContent={til.textContent} />

        <ui.PageContent>
          {data.allFile.edges.map(({ node }, index) => {
            const { childMarkdownRemark } = node;
            const { frontmatter, excerpt, fields } = childMarkdownRemark;

            return (
              <ui.Section key={node.id}>
                <ui.Aside>TIL #{index}</ui.Aside>
                <Link to={`/${fields.slug}`}>
                  <h3>{frontmatter.title}</h3>
                </Link>

                <section>
                  <p>
                    {excerpt}
                    <Link to={`/${fields.slug}`}>more</Link>
                  </p>
                </section>
              </ui.Section>
            );
          })}

          {reversedData.map(({ id, firstParagraph, secondParagraph, url }) => (
            <ui.Section key={id}>
              <ui.Aside>TIL #{id}</ui.Aside>
              <section>
                <p>{firstParagraph}</p>
                {secondParagraph && <p>{secondParagraph}</p>}
                {url && (
                  <>
                    <span>Learn more: </span>
                    <a href={url}>{url}</a>
                  </>
                )}
              </section>
            </ui.Section>
          ))}
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  );
};

TIL.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default TIL;

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "today-I-learned" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              date
              path
            }
            excerpt
            fields {
              slug
            }
          }
          id
        }
      }
    }
  }
`;
