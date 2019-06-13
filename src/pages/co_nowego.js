import React from "react"
import { graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Layout from "../components/layout"

export default ({ data: { lookbook } }) => (
  <Layout>
    <article className="container withMargin">
      <HelmetDatoCms seo={lookbook.seoMetaTags}>
        <html lang="pl_PL" />
        <link rel="canonical" href="https://falda.pl/co_nowego" />
      </HelmetDatoCms>
      <h1>{lookbook.title}</h1>
      <p>{lookbook.subtitle}</p>

    </article>
  </Layout>
)

export const query = graphql`
  query NewsQuery {
    lookbook: datoCmsNewsPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
    }
  }
`
