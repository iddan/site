module.exports = {
  siteMetadata: {
    title: `iddan`,
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
        path: `${__dirname}/projects`,
        name: "projects",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`,
  ],
};
