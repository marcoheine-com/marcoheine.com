const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const tagTemplate = path.resolve('src/templates/tags.js');

  const blogPosts = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { type: { eq: "blog-post" } } }
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
    throw new Error('Things broke, see console output above');
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
      postsRemark: allMarkdownRemark(
        filter: { fields: { type: { eq: "today-I-learned-post" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            excerpt
            frontmatter {
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (tilData.errors) {
    console.log(tilData.errors);
    throw new Error('Things broke, see console output above');
  }

  tilData.data.postsRemark.edges.forEach(({ node }) => {
    const { slug } = node.fields;

    actions.createPage({
      component: path.resolve(`src/templates/today-I-learned-post.js`),
      context: {
        slug,
      },
      path: slug,
    });
  });

  const tags = tilData.data.tagsGroup.group;
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/today-I-learned/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
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

    createNodeField({
      node,
      name: `type`,
      value: `blog-post`,
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

      createNodeField({
        node,
        name: `type`,
        value: `today-I-learned-post`,
      });
    }
  }
};
