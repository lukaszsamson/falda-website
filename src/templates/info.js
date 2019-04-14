import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'

export default ({data}) => (
  <Layout>
    <article className="container">
      <HelmetDatoCms seo={data.datoCmsInfo.seoMetaTags}><html lang="pl_PL" /></HelmetDatoCms>
      <h1>{data.datoCmsInfo.name}</h1>
      <div
        className="sheet__body"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsInfo.contentNode.childMarkdownRemark.html,
        }}
      />
    </article>
  </Layout>
)

export const query = graphql`
  query InfoQuery($slug: String!) {
    datoCmsInfo(slug: { eq: $slug }) {
      name
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
