const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  const blogPosts = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (blogPosts.errors) {
    console.log(blogPosts.errors);
    throw new Error("Things broke, see console output above");
  }

  blogPosts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
      path: node.fields.slug,
    });
  });

  const tilData = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "today-I-learned" } }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `);

  if (tilData.errors) {
    console.log(blogPosts.errors);
    throw new Error("Things broke, see console output above");
  }

  tilData.data.allFile.edges.forEach(({ node }) => {
    const { slug } = node.childMarkdownRemark.fields;

    actions.createPage({
      component: path.resolve(`src/templates/today-I-learned-post.js`),
      context: {
        slug,
      },
      path: slug,
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: `blog${value}`,
    });
  }

  const parent = getNode(node.parent);

  if (parent) {
    if (parent.sourceInstanceName === 'today-I-learned') {
      const value = createFilePath({ node, getNode });
      createNodeField({
        name: `slug`,
        node,
        value: `today-I-learned${value}`,
      });
    }
  }
};
