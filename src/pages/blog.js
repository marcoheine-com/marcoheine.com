import React from "react";
import { graphql, Link } from "gatsby";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import { blog } from "../constants/cardData";
import theme from "../styles/theme";
import * as ui from "../styles/index/ui";

const Blog = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Blog" />
        <Card h1={blog.h1} textContent={blog.textContent} />

        <ui.PageContent>
          {edges.map(edge => (
            <article key={edge.node.id}>
              <Link to={edge.node.frontmatter.path}>
                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
              <time dateTime={edge.node.frontmatter.date}>
                {edge.node.frontmatter.date}
              </time>
              <p>{edge.node.excerpt}</p>
              <Link to={edge.node.frontmatter.path}>Read more</Link>
            </article>
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
  }),
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
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
