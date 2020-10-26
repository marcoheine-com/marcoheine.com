require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Marco Kühbauch - Web Developer`,
    description: `Hi! My name is Marco and I'm a Web Developer. I like to build responsive, accessible and fast websites and web experiences for every device and every browser.`,
    author: `Marco Kühbauch`,
    siteUrl: `https://marcokuehbauch.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_TRACKING_ID,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://marcokuehbauch.com`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `today-I-learned`,
        path: `${__dirname}/src/today-I-learned`,
      },
    },
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: ['400', '700'],
          },
          {
            family: `Merriweather`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/marco_kuehbauch_square.jpeg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-iubenda-cookie-footer',
      options: {
        iubendaOptions: {
          countryDetection: true,
          whitelabel: false,
          lang: 'en',
          siteId: 2043684,
          consentOnScroll: false,
          perPurposeConsent: true,
          cookiePolicyId: 65252238,
          banner: {
            acceptButtonDisplay: true,
            customizeButtonDisplay: true,
            rejectButtonDisplay: true,
            position: 'float-bottom-center',
          },
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
