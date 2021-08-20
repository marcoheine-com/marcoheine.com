import React from 'react';
import { graphql, Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import * as ui from '../styles/index/ui';
import { GatsbyImage } from 'gatsby-plugin-image';

const Blog = ({ data }) => {
  const { allMdx } = data;
  const { edges } = allMdx;

  const newestPosts = edges.slice(0, 5);
  const olderPosts = edges.slice(5);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Blog" />
        <ui.PageHeader>Blog</ui.PageHeader>

        <ui.PageContent>
          <ui.BlogHeadline>Newest blog posts:</ui.BlogHeadline>
          {newestPosts.map((edge) => {
            const { node } = edge;
            const {
              fields: { slug },
              id,
              frontmatter,
            } = node;
            const { date, title, excerpt } = frontmatter;
            return (
              <ui.Newlinks key={id}>
                <Link to={`/${slug}`}>
                  <ui.BlogArticle>
                    <h3>{title}</h3>
                    {frontmatter.featuredImage && (
                      <GatsbyImage
                        alt={frontmatter.featuredImageAlt}
                        image={
                          frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                      />
                    )}
                    <ui.Time dateTime={date}>Published on: {date}</ui.Time>

                    <p>{excerpt}</p>
                    <ui.Readmore>Read article</ui.Readmore>
                  </ui.BlogArticle>
                </Link>
              </ui.Newlinks>
            );
          })}
          <h2>Other blog posts:</h2>
          {olderPosts.map((edge) => (
            <Link key={edge.node.id} to={`/${edge.node.fields.slug}`}>
              <ui.BlogArticle>
                <h4>
                  {edge.node.frontmatter.title} -
                  <ui.Time dateTime={edge.node.frontmatter.date}>
                    Published on: {edge.node.frontmatter.date}
                  </ui.Time>
                </h4>
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
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMdx(
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
            featuredImage {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
            featuredImageAlt
          }
        }
      }
    }
  }
`;
