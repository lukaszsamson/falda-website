import React, { useState } from "react"
import Layout from "../components/layout"
import Product from "../components/product"
import { graphql } from "gatsby"
import produktyStyles from "./produkty.module.scss"
import { HelmetDatoCms } from "gatsby-source-datocms"

function maybeSerachResults(data, nameFilter) {
  const filtered = data.products.edges.filter(
    ({ node: product }) =>
      nameFilter === "" || product.name.includes(nameFilter)
  )
  if (filtered.length === 0) {
    return (
      <div className={produktyStyles.simpleMessage}>
        Brak wyników dla <i>{nameFilter}</i>.
      </div>
    )
  } else {
    return (
      <ul className={produktyStyles.searchResults + " grid3"}>
        {filtered.map(({ node: product }) => (
          <li key={product.id} className={produktyStyles.productsItem}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    )
  }
}

export default ({ data }) => {
  const [nameFilter, setNameFilter] = useState("")
  return (
    <Layout>
      {/* TODO */}
      <HelmetDatoCms seo={data.info.seoMetaTags}>
        <html lang="pl_PL" />
        <link rel="canonical" href="https://falda.pl/produkty" />
      </HelmetDatoCms>
      <section>
      <h1>{data.title}</h1>
      <div>
        <div className={produktyStyles.productsSearch + " grid3"}>
          <div className="centeredColumn">
            <input
              type="text"
              value={nameFilter}
              onChange={event => setNameFilter(event.target.value)}
              placeholder="Szukaj"
            />
          </div>
          
        </div>
        {maybeSerachResults(data, nameFilter)}
      </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ProductsQuery {
    products: allDatoCmsProduct(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          slug
          images {
            fluid(maxWidth: 250) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    info: datoCmsProductsPage {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
