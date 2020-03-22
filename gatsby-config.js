require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Ricos Website`,
    description: `Playing around with technology. Creating things.`,
    author: `Rico Trebeljahr`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-jsx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 970,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ricos Website`,
        short_name: `Ricos Website`,
        start_url: `/`,
        background_color: `#4CAF50`,
        theme_color: `#4CAF50`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
