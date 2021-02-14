import React from 'react';
import { graphql, Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import CoffeeHint from '../components/coffeehint';
import CoffeeLink from '../components/coffeehint/CoffeeLink';
import SEO from '../components/seo';
import theme from '../styles/theme';
import * as ui from './ui';
import { formatDate } from '../utils/formatDate';

const shortcodes = { CoffeeHint };

const Template = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, timeToRead, body, parent } = mdx;

  const lastUpdated = formatDate(parent.fields.gitLogLatestDate);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={frontmatter.title} />
        <ui.PageHeader>Blog</ui.PageHeader>
        <ui.PageContent>
          <h2>{frontmatter.title}</h2>
          <section>
            <h5>Last updated: {lastUpdated}</h5>
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

          <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
          <p>
            <i>
              This blog post was originally published on {frontmatter.date}.
            </i>
          </p>
          <hr />
          <p>I wish you a wonderful day! Marco</p>
          <p>Enjoy my writings?</p>
          <CoffeeLink />
          <ui.GoBackSpan>
            <Link to="/blog/">Go back to other Blog Posts</Link>
          </ui.GoBackSpan>
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  );
};

Template.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
      body: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
      parent: PropTypes.shape({
        fields: PropTypes.shape({
          gitLogLatestDate: PropTypes.string.isRequired,
        }),
      }),
    }),
  }).isRequired,
};

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
      parent {
        ... on File {
          fields {
            gitLogLatestDate
          }
        }
      }
    }
  }
`;
