import React from "react"
import { graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Layout from "../components/layout"

export default ({ data: { customization } }) => (
  <Layout>
    <article className="container withMargin">
      <HelmetDatoCms seo={customization.seoMetaTags}>
        <html lang="pl_PL" />
        <link rel="canonical" href="https://falda.pl/personalizacja" />
      </HelmetDatoCms>
      <h1>{customization.title}</h1>
      <p>{customization.subtitle}</p>
      {/* <div className="sheet__gallery">
          <img src={about.photo.url} />
        </div> */}
      <div
        className="sheet__body"
        dangerouslySetInnerHTML={{
          __html: customization.bioNode.childMarkdownRemark.html,
        }}
      />
    </article>
  </Layout>
)

export const query = graphql`
  query CustomizationQuery {
    customization: datoCmsCustomizationPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
