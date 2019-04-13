import React, { useState } from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import productStyles from "./product.module.scss"
import Img from "gatsby-image"
import { FaSearchPlus } from "react-icons/fa"

export default ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [zoom, setZoom] = useState(false)
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsProduct.seoMetaTags}>
        <html lang="pl_PL" />
      </HelmetDatoCms>

      <article className="grid5">
        <section className={"wideColumn " + productStyles.productImages}>
          <div className={productStyles.productMainImage}>
            <Img fluid={data.datoCmsProduct.images[selectedImage].fluid} />
            <button
              className={productStyles.zoomLink}
              onClick={() => setZoom(true)}
            >
              <FaSearchPlus />
            </button>
          </div>
          {data.datoCmsProduct.images.map((image, index) => (
            <div
              key={index}
              className={productStyles.productThumbnail}
              onClick={() => setSelectedImage(index)}
            >
              <Img fluid={image.fluid} />
            </div>
          ))}
        </section>
        <section className={productStyles.productDetails + " thinColumn"}>
          <header>
            <h1>{data.datoCmsProduct.name}</h1>
            <small>{data.datoCmsProduct.code}</small>
          </header>
          <section className={productStyles.productPrice}>
            {data.datoCmsProduct.price} zł
          </section>
          <section>
            <h2>Opis</h2>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsProduct.descriptionNode.childMarkdownRemark.html,
              }}
            />
          </section>
          <section>
            <h2>Skład</h2>
            {data.datoCmsProduct.build.map(part => (
              <article key={part.name}>
                <h4>{part.name}</h4>
                <dl>
                  {part.values.map(({ name, percentage }) => (
                    <React.Fragment key={name}>
                      <dt>{name}</dt>
                      <dd>{percentage}%</dd>
                    </React.Fragment>
                  ))}
                </dl>
              </article>
            ))}
          </section>
        </section>
      </article>

      {zoom && (
        <div
          className={productStyles.imageZoomContainer}
          onClick={() => setZoom(false)}
        >
          <Img fluid={data.datoCmsProduct.images[selectedImage].fluid} />
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($slug: String!) {
    datoCmsProduct(slug: { eq: $slug }) {
      name
      code
      price
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      images {
        fluid {
          ...GatsbyDatoCmsSizes
        }
      }
      build {
        name
        values {
          name
          percentage
        }
      }
    }
  }
`
