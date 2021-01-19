import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import * as ui from '../styles/index/ui';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      personalImg: file(relativePath: { eq: "marco_kuehbauch_square.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogData: allMdx(
        filter: { fields: { type: { eq: "blog-post" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
            }
          }
        }
      }
      tilData: allMdx(
        filter: { fields: { type: { eq: "today-I-learned-post" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
            }
          }
        }
      }
    }
  `);

  const latestBlogPosts = data.blogData.edges.slice(0, 3);
  const latestTILPosts = data.tilData.edges.slice(0, 3);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />

        <ui.IndexWrapper>
          <ui.Wrapper>
            <ui.Headline>Hi and welcome!</ui.Headline>

            <ui.Headline>
              My name is Marco and I&apos;m a Web Developer.
            </ui.Headline>

            <ui.Hometext>
              I love to write about Web Development and my life as a developer.
              <ui.LinkSpan>
                <Link to="/blog"> Read my blog</Link>
              </ui.LinkSpan>
              .
            </ui.Hometext>
          </ui.Wrapper>

          <ui.PostOuterWrapper>
            <ui.BlogPostWrapper>
              <h2>Latest blog posts:</h2>
              <ui.PostInnerWrapper>
                {latestBlogPosts.map(post => (
                  <Link key={post.node.id} to={`/${post.node.fields.slug}`}>
                    <ui.Article>
                      <h4>{post.node.frontmatter.title}</h4>
                      <ui.Time>
                        Published on {post.node.frontmatter.date}
                      </ui.Time>
                      <ui.BlogLink>Read article</ui.BlogLink>
                    </ui.Article>
                  </Link>
                ))}
              </ui.PostInnerWrapper>
            </ui.BlogPostWrapper>

            <section>
              <h2>Today I learned:</h2>
              <ui.PostInnerWrapper>
                {latestTILPosts.map(post => (
                  <Link key={post.node.id} to={`/${post.node.fields.slug}`}>
                    <ui.TILCard>
                      <ui.BlogLink>{post.node.frontmatter.title}</ui.BlogLink>
                      <ui.Time>
                        Published on {post.node.frontmatter.date}
                      </ui.Time>
                    </ui.TILCard>
                  </Link>
                ))}
              </ui.PostInnerWrapper>
            </section>
          </ui.PostOuterWrapper>
        </ui.IndexWrapper>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
