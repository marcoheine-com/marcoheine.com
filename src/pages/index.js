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
      personalImg: file(relativePath: { eq: "marco_kuehbauch.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogData: allMarkdownRemark(
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
      tilData: allMarkdownRemark(
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

        <ui.OuterWrapper>
          <ui.Headline>
            Hi! My name is Marco and I&apos;m a Web Developer.
          </ui.Headline>

          <ui.ImgWrapper>
            <Link to="/about">
              <Image
                alt="a picture of Marco Kühbauch"
                fluid={data.personalImg.childImageSharp.fluid}
                fadeIn
              />
            </Link>
          </ui.ImgWrapper>

          <ui.InnerWrapper>
            <ui.Hometext>
              I like to build responsive, accessible and fast websites and web
              experiences for every device and every browser.
            </ui.Hometext>

            <ui.LinkWrapper>
              <ui.HomeLinks>
                <Link to="/about">Learn more about me</Link>
              </ui.HomeLinks>

              <ui.HomeLinks>or</ui.HomeLinks>

              <ui.HomeLinks>
                <Link to="/blog">read my blog</Link>
              </ui.HomeLinks>
            </ui.LinkWrapper>
          </ui.InnerWrapper>
        </ui.OuterWrapper>

        <ui.PostOuterWrapper>
          <ui.BlogPostWrapper>
            <h2>Latest blog posts:</h2>
            <ui.PostInnerWrapper>
              {latestBlogPosts.map(post => (
                <article key={post.node.id}>
                  <ui.BlogLink>
                    <Link to={`/${post.node.fields.slug}`}>
                      {post.node.frontmatter.title}
                    </Link>
                  </ui.BlogLink>
                  <p>Published on {post.node.frontmatter.date}</p>
                </article>
              ))}
            </ui.PostInnerWrapper>
          </ui.BlogPostWrapper>

          <section>
            <h2>Today I learned:</h2>
            <ui.PostInnerWrapper>
              {latestTILPosts.map(post => (
                <article key={post.node.id}>
                  <ui.BlogLink>
                    <Link to={`/${post.node.fields.slug}`}>
                      {post.node.frontmatter.title}
                    </Link>
                  </ui.BlogLink>
                  <p>Published on {post.node.frontmatter.date}</p>
                </article>
              ))}
            </ui.PostInnerWrapper>
          </section>
        </ui.PostOuterWrapper>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
