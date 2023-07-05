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
    `gatsby-plugin-netlify`,
    "gatsby-redirect-from",
    "gatsby-plugin-meta-redirect",
    "gatsby-remark-autolink-headers",
    "gatsby-plugin-sitemap",
  ],
};

export default config;
