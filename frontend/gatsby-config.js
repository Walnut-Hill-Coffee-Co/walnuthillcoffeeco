require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Walnut Hill Coffee Co.',
    siteUrl: 'https://www.walnuthillcoffeeco.com',
    author: 'Luke Miller',
    description:
      'The heartbeat of Walnut Hill Coffee Company is for the community. We strive to capture the  essence of all that is good to bring you a welcoming, eclectic atmosphere paired with an  unforgettable coffee house experience.  ',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        apiVersion: '2021-03-27',
        watchMode: process.env.NODE_ENV === 'development' ? true : false,
        overlayDrafts: true,
      },
    },
    {
      resolve: 'gatsby-source-formium',
      options: {
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        accessToken: process.env.FORMIUM_TOKEN
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    /*     {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    }, */
    /* {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    }, */
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
