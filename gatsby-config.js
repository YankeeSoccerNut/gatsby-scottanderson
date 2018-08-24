module.exports = {
  pathPrefix: `/gatsby-scottanderson`,
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Scott Anderson',
    description: 'Full stack developer',
    keywords: 'full stack, product enginner, portfolio, personal website',
    url: 'https://yankeesoccernut.github.io/gatsby-scottanderson/'
  }
};