module.exports = {
  siteMetadata: {
    title: `iddan`,
    description: `Iddan Aaronsohn's personal site`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
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
        typeName: ({ node }) => node.relativeDirectory,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`,
  ],
};
