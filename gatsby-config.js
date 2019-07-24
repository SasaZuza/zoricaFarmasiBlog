module.exports = {
  // Metadata that we can use in our site
  siteMetadata: {
    title: "Dnevnik Šminkoholičarke",
    author: "Sasa Zuza",
  },
  plugins: [
    // This is plugin for configuring page title name on browser
    `gatsby-plugin-react-helmet`,
    // This is plugin for making connection with contentful
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // This is how we can use SASS
    "gatsby-plugin-sass",
    // This is how we load markdown files from project file system
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    // Used to display images on our app
    "gatsby-plugin-sharp",
    {
      // For adding and showing those markdown files
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // This is plugin that makes options to show images with relative path
          "gatsby-remark-relative-images",
          {
            // This one allows showing images in markdown files
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              // This disable that we on clicking on image go to location of that image
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
