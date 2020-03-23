import React from "react";
import { graphql, Link } from "gatsby";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import { til } from "../constants/cardData";
import theme from "../styles/theme";
import * as ui from "./ui";

const TilPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={frontmatter.title} />
        <Card h1={til.h1} textContent={til.textContent} />
        <ui.PageContent>
          <ui.GoBackSpan>
            <Link to="/today-I-learned">
              Go back to other today-I-learned posts
            </Link>
          </ui.GoBackSpan>

          <h4>{frontmatter.date}</h4>
          <h2>{frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <p>Greetings Marco</p>
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
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }).isRequired,
};

export default TilPost;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
