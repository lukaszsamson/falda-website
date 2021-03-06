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
  // TODO refactor
  // https://github.com/nfl/react-helmet/issues/437
  // const upHandler = ({ key }) => {
  //   console.log(key)
  // }
  // useEffect(() => {
  //   console.log("a")
  //   window.addEventListener('keyup', upHandler);
  //   return () => {
  //     debugger
  //     console.log("b")
  //     window.removeEventListener('keyup', upHandler)
  //   }
  // }, []) // Empty array ensures that effect is only run on mount and unmount
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsProduct.seoMetaTags}>
        <html lang="pl_PL" />
        <link
          rel="canonical"
          href={"https://falda.pl/kolekcja/" + data.datoCmsProduct.slug}
        />
      </HelmetDatoCms>

      {!zoom && (
      <article className="grid5">
        <div className={produktStyles.productDetails + " thinColumn"}>
          <header>
            <h1>{data.datoCmsProduct.name}</h1>
            <small>{data.datoCmsProduct.code}</small>
          </header>
          <section className={produktStyles.productPrice}>
            <h3 className="seo">Cena</h3>
            <span>{data.datoCmsProduct.price}</span> <span>PLN</span>
          </section>
          <section>
            <h2>Opis</h2>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsProduct.descriptionNode.childMarkdownRemark.html,
              }}
            />
            <h4>Długość</h4>
            <p className={produktStyles.productLength}>{data.datoCmsProduct.length}<small>cm</small></p>
            <h4>Skład</h4>
            {data.datoCmsProduct.build.map(part => (
              <article key={part.name}>
                <h5>{part.name}</h5>
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
          <section>
            <h3>Dostępne rozmiary</h3>
            <ul className={produktStyles.productSizes}>
              {data.datoCmsProduct.sizes.map(({ size }) => (
                <li key={size}>{size}</li>
              ))}
            </ul>
          </section>
        </div>
        <section className={"wideColumn " + produktStyles.productImages}>
          <h2 className="seo">Zdjęcia sukienki</h2>
          <div className={produktStyles.productMainImage}>
            <Img fluid={data.datoCmsProduct.images[selectedImage].fluid} />
            <button
              className={produktStyles.zoomLink}
              style={{padding: "0", margin: "5px"}}
              onClick={() => setZoom(true)}
            >
              <FaSearchPlus style={{width: "50px", height: "50px"}}/>
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
      )}

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
      length
      sizes {
        size
      }
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
