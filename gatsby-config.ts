import { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `iddan`,
    description: `Iddan Aaronsohn's personal site`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
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
        // @ts-ignore
        typeName: ({ node }) => node.relativeDirectory,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`,
    "gatsby-redirect-from",
    "gatsby-plugin-meta-redirect",
  ],
};

export default config;
