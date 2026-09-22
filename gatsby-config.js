module.exports = {
  siteMetadata: {
    title: `Abhoria`,
    description: `Abhoria is a dystopian blackened death metal band founded in 2018 in Los Angeles, California.`,
    author: `benjaminpitts`,
    siteUrl: `https://abhoria.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: false, // boolean to turn off the default security headers
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abhoria`,
        short_name: `Abhoria`,
        start_url: `/`,
        background_color: `#090909`,
        theme_color: `#090909`,
        display: `minimal-ui`,
        icon: `src/images/depths.jpeg`, // This path is relative to the root of the site.
      },
    },
  ],
}
