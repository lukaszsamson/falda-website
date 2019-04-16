import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"

const About = ({ data: { about } }) => (
  <Layout>
    <article className="container">
      <HelmetDatoCms seo={about.seoMetaTags}><html lang="pl_PL" /></HelmetDatoCms>
        <h1>{about.title}</h1>
        <p>{about.subtitle}</p>
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

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
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