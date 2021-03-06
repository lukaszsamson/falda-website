import React from "react"
import { graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Layout from "../components/layout"

export default ({ data: { about } }) => (
  <Layout>
    <article className="container withMargin">
      <HelmetDatoCms seo={about.seoMetaTags}>
        <html lang="pl_PL" />
        <link rel="canonical" href="https://falda.pl/o_nas" />
      </HelmetDatoCms>
      <h1>{about.title}</h1>
      {/* TODO */}
      {/* <div className="sheet__gallery">
          <img src={about.photo.url} />
        </div> */}
      <div
        className="sheet__body"
        dangerouslySetInnerHTML={{
          __html: about.bioNode.childMarkdownRemark.html,
        }}
      />
    </article>
  </Layout>
)

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      photo {
        url
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
