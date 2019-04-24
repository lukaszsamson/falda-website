import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import HomeItem from "../components/homeItem"
import indexStyles from "./index.module.scss"
import Img from "gatsby-image"
import { HelmetDatoCms } from "gatsby-source-datocms"

export default ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsHomePage.seoMetaTags}>
      <html lang="pl_PL" />
      <link rel="canonical" href="https://falda.pl" />
    </HelmetDatoCms>
    <section>
      <header className={indexStyles.homeHeader}>
        <div className={indexStyles.homeHeaderImage}>
          <Img title={data.datoCmsHomePage.headerImage.title} alt={data.datoCmsHomePage.headerImage.alt} fluid={data.datoCmsHomePage.headerImage.fluid} />
        </div>
        <div className={indexStyles.homeHeaderText}>
          <h1 className="seo">Strona główna Falda</h1>
        </div>
      </header>
      {data.datoCmsHomePage.items.map(item => (
        <HomeItem
          key={item.id}
          caption={item.captionNode}
          linkCaption={item.linkCaption}
          link={item.link}
          image={item.image}
        />
      ))}
    </section>
  </Layout>
)

export const query = graphql`
  {
    datoCmsHomePage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      headerImage {
        alt
        title
        createdAt
        fluid {
          ...GatsbyDatoCmsSizes
        }
      }
      items {
        id
        captionNode {
          childMarkdownRemark {
            html
          }
        }
        link
        linkCaption
        image {
          fluid {
            ...GatsbyDatoCmsSizes
          }
        }
      }
    }
  }
`
