import React, { useState } from "react"
import Layout from "../components/layout"
import Product from "../components/product"
import { graphql } from "gatsby"
import productsStyles from "./products.module.scss"

function maybeSerachResults(data, nameFilter) {
  const filtered = data.allDatoCmsProduct.edges.filter(
    ({ node: product }) =>
      nameFilter === "" || product.name.includes(nameFilter)
  )
  if (filtered.length === 0) {
    return (
      <div className={productsStyles.simpleMessage}>
        Brak wyników dla <i>{nameFilter}</i>.
      </div>
    )
  } else {
    return (
      <ul className={productsStyles.searchResults + " grid3"}>
        {filtered.map(({ node: product }) => (
          <li key={product.id} className={productsStyles.productsItem}>
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
      <h1>Nasza kolekcja</h1>
      <div>
        <div className={productsStyles.productsSearch + " grid3"}>
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
    </Layout>
  )
}

export const query = graphql`
  query ProductsQuery {
    allDatoCmsProduct(sort: { fields: [name], order: ASC }) {
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
  }
`
