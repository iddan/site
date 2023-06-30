import path from "path";
import { createFilePath } from "gatsby-source-filesystem";
import type { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/BlogPost.tsx`);

  // Get all markdown blog posts sorted by date
  const result =
    await graphql<Queries.AllMarkdownBlogPostsQuery>(/* graphql */ `
      query AllMarkdownBlogPosts {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  // @ts-ignore
  const posts = result.data.allMarkdownRemark.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.ts)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    for (const post of posts) {
      if (!post.fields) {
        throw new Error("Post is missing fields");
      }
      if (!post.fields.slug) {
        throw new Error("Post is missing slug");
      }
      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          slug: post.fields.slug,
        },
      });
    }
  }
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.ts

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "data/blog" instead of returning an error
    createTypes(/* graphql */ `
    type SiteSiteMetadata {
      siteUrl: String!
    }

    type Author {
      name: String!
      summary: String!
    }

    type Social {
      twitter: String!
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
      fields: Fields!
    }

    type Frontmatter {
      title: String!
      description: String!
      date: Date! @dateformat
    }

    type Fields {
      slug: String!
    }

    type Project implements Node {
      title: String!
      description: String!
      image: String!
      imageSize: Float!
      link: String!
      startDate: String!
    }

    type Workplace implements Node {
      role: String!
      link: String!
      title: String!
      startDate: Date! @dateformat
      endDate: Date @dateformat
      description: String!
    }
  `);
  };

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = (
  helper
) => {
  const { stage, actions, getConfig } = helper;
  if (stage === "develop" || stage === "build-javascript") {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      // @ts-ignore
      (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};
