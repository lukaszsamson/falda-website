import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'

export default ({data}) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsInfo.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsInfo.name}</h1>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsInfo.contentNode.childMarkdownRemark.html,
          }}
        />
      </div>
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
    }
  }
`
