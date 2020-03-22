require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Rico's Site`,
    description: `Me, playing around with a bunch of tech!`,
    author: `@Rico Trebeljahr`,
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
        name: `gatsby-starter-default`,
        short_name: `Rico's Portfolio Page`,
        start_url: `/`,
        background_color: `#f9dc5c`,
        theme_color: `#f9dc5c`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
