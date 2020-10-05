import React from 'react';
import { graphql, Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import * as ui from './ui';

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={frontmatter.title} />
        <ui.PageHeader>Blog</ui.PageHeader>
        <ui.PageContent>
          <h2>{frontmatter.title}</h2>
          <section>
            <h5>Published at: {frontmatter.date}</h5>
            <h5>Reading time: {timeToRead}min</h5>
          </section>
          <ui.SocialLinks>
            <a
              className="twitter-share-button"
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share this post on Twitter
            </a>
            <a
              className="twitter-follow-button"
              href="https://twitter.com/mkuehb"
              data-show-count="false"
            >
              Follow @mkuehb
            </a>
          </ui.SocialLinks>

          <div dangerouslySetInnerHTML={{ __html: html }} />
          <p>Greetings Marco</p>
          <ui.GoBackSpan>
            <Link to="/blog">Go back to other Blog Posts</Link>
          </ui.GoBackSpan>
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  );
};

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }),
};

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
    }
  }
`;
