import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { ThemeProvider } from "styled-components";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import theme from "../styles/theme";
import * as ui from "../styles/index/ui";

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
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
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

  const latestBlogPosts = data.allMarkdownRemark.edges.slice(0, 3);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />

        <ui.Headline>
          Hi! My name is Marco and I&apos;m a Frontend Web Developer.
        </ui.Headline>

        <ui.Hometext>
          I like to build responsive, accessible and fast websites and frontend
          experiences for every device and every browser.
        </ui.Hometext>

        <ui.ImgWrapper>
          <Link to="/about">
            <Image
              alt="a picture of Marco Kühbauch"
              fluid={data.personalImg.childImageSharp.fluid}
              fadeIn
            />
          </Link>
        </ui.ImgWrapper>

        <ui.LinkWrapper>
          <ui.HomeLinks>
            <Link to="/about">Learn more about me</Link>
          </ui.HomeLinks>

          <ui.HomeLinks>or</ui.HomeLinks>

          <ui.HomeLinks>
            <Link to="/blog">read my blog</Link>
          </ui.HomeLinks>
        </ui.LinkWrapper>

        <div>
          <h2>Latest blog posts:</h2>
          {latestBlogPosts.map(post => (
            <article key={post.node.id}>
              <ui.BlogLink>
                <Link to={post.node.frontmatter.path}>
                  {post.node.frontmatter.title}
                </Link>
              </ui.BlogLink>
              <p>Published on {post.node.frontmatter.date}</p>
            </article>
          ))}
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
