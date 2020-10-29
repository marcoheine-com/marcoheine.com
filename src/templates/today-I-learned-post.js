import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import * as ui from './ui';

const TilPost = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={frontmatter.title} />
        <ui.PageHeader>Today I learned</ui.PageHeader>
        <ui.PageContent>
          <h4>{frontmatter.date}</h4>
          <h2>{frontmatter.title}</h2>
          <MDXRenderer>{body}</MDXRenderer>
          <p>
            <i>Greetings Marco</i>
          </p>
          <ui.GoBackSpan>
            <Link to="/today-I-learned">
              Go back to other today-I-learned posts
            </Link>
          </ui.GoBackSpan>
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  );
};

TilPost.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      body: PropTypes.string,
    }),
  }).isRequired,
};

export default TilPost;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
