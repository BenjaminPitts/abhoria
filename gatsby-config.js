module.exports = {
  siteMetadata: {
    title: `Abhoria`,
    description: `Abhoria - Offical Website. Abhoria is a dystopian blackened death metal band founded in 2018 - Los Angeles, CA USA`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/depths.jpeg`, // This path is relative to the root of the site.
      },
    },
  ],
}
