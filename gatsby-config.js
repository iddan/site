module.exports = {
  siteMetadata: {
    title: `iddan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-use-dark-mode",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/projects`,
        name: "projects",
      },
    },
    `gatsby-transformer-remark`,
  ],
};
