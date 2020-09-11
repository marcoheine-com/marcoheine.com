import React from 'react';
import { graphql, Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import * as ui from '../styles/index/ui';

const Blog = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Blog" />
        <ui.PageHeader>Blog</ui.PageHeader>

        <ui.PageContent>
          {edges.map(edge => (
            <Link key={edge.node.id} to={`/${edge.node.fields.slug}`}>
              <ui.BlogArticle>
                <h3>{edge.node.frontmatter.title}</h3>
                <ui.Time dateTime={edge.node.frontmatter.date}>
                  {edge.node.frontmatter.date}
                </ui.Time>
                <p>{edge.node.excerpt}</p>
                <ui.Readmore>Read article</ui.Readmore>
              </ui.BlogArticle>
            </Link>
          ))}
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog-post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
