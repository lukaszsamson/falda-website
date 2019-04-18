import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import produktStyles from "./produkt.module.scss"
import Img from "gatsby-image"
import { FaSearchPlus } from "react-icons/fa"

export default ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [zoom, setZoom] = useState(false)
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsProduct.seoMetaTags}>
        <html lang="pl_PL" />
        <link
          rel="canonical"
          href={"https://falda.pl/produkty/" + data.datoCmsProduct.slug}
        />
      </HelmetDatoCms>

      <article className="grid5">
        <div className={produktStyles.productDetails + " thinColumn"}>
          <header>
            <h1>{data.datoCmsProduct.name}</h1>
            <small>{data.datoCmsProduct.code}</small>
          </header>
          <section className={produktStyles.productPrice}>
            <h3 className="seo">Cena</h3>
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
        </div>
        <section className={"wideColumn " + produktStyles.productImages}>
          <h2 className="seo">Zdjęcia sukienki</h2>
          <div className={produktStyles.productMainImage}>
            <Img fluid={data.datoCmsProduct.images[selectedImage].fluid} />
            <button
              className={produktStyles.zoomLink}
              onClick={() => setZoom(true)}
            >
              <FaSearchPlus />
            </button>
          </div>
          {data.datoCmsProduct.images.map((image, index) => (
            <div
              key={index}
              className={produktStyles.productThumbnail}
              onClick={() => setSelectedImage(index)}
            >
              <Img fluid={image.fluid} />
            </div>
          ))}
        </section>
      </article>

      {zoom && (
        <div
          className={produktStyles.imageZoomContainer}
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
        values
      }
    }
  }
`
