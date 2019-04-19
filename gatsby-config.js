require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Falda`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138665393-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        // not required in Poland (required in Germany)
        // anonymize: true,
        // Setting this parameter is also optional
        // analytics is not tracking
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        // use default 100%
        // sampleRate: 5,
        siteSpeedSampleRate: 10,
        // use default auto
        // cookieDomain: "falda.pl",
      },
    },
  ],
}
