import { GatsbyConfig } from "gatsby";
import { singular } from "pluralize";
import { pascalCase } from "change-case";

type YamlTypeNameArg = { node: { relativeDirectory: string } };

const config: GatsbyConfig = {
  siteMetadata: {
    title: `iddan`,
    description: `Iddan Aaronsohn's personal site`,
    siteUrl: "https://aniddan.com", // Required by gatsby-plugin-sitemap
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-use-dark-mode",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: "data",
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node }: YamlTypeNameArg) =>
          pascalCase(singular(node.relativeDirectory)),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: /* graphql */ `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allMarkdownRemark },
            }: {
              query: {
                site: {
                  siteMetadata: {
                    title: string;
                    description: string;
                    siteUrl: string;
                    site_url: string;
                  };
                };
                allMarkdownRemark: {
                  nodes: {
                    excerpt: string;
                    html: string;
                    fields: { slug: string };
                    frontmatter: { title: string; date: string };
                  }[];
                };
              };
            }) => {
              return allMarkdownRemark.nodes.map((node) => ({
                ...node.frontmatter,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ "content:encoded": node.html }],
              }));
            },
            query: /* graphql */ `
              {
                allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                  nodes {
                    excerpt
                    html
                    fields { 
                      slug 
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Iddan's Latest Posts",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    "gatsby-redirect-from",
    "gatsby-plugin-meta-redirect",
    "gatsby-remark-autolink-headers",
    "gatsby-plugin-sitemap",
  ],
};

export default config;
