module.exports = {
  siteMetadata: {
      title: 'Gatsby Default Starter',
  },
  plugins: [
      {
          resolve: `gatsby-source-contentful`,
          options: {
              spaceId: `x46mpall1mjd`,
              accessToken: `e4c17ae9c6e215730fcfe4653873f5c564621961f2c98639ecb413c8da459939`,
          },
      },
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-remark'
  ],
};