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
  const { allFile } = data;
  const { edges } = allFile;

  const randomNumber = Math.floor(Math.random() * Math.floor(13999));

  const reversedData = edges && [...edges].reverse();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Today I learned" />
        <Card h1={til.h1} textContent={til.textContent} />

        <ui.PageContent>
          {reversedData.map(({ node }, index) => {
            const { childMarkdownRemark } = node;
            const { frontmatter, excerpt, fields } = childMarkdownRemark;

            return (
              <ui.Section key={node.id}>
                <ui.Aside>TIL #{randomNumber - index}</ui.Aside>
                <Link to={`/${fields.slug}`}>
                  <h3>{frontmatter.title}</h3>
                </Link>

                <section>
                  <p>{excerpt}</p>
                  <Link to={`/${fields.slug}`}>Read more</Link>
                </section>
              </ui.Section>
            );
          })}
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
