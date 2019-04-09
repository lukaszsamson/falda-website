import React, { useState } from "react"
import Layout from "../components/layout"
import Product from "../components/product"
import { Link, graphql } from "gatsby"

function maybeSerachResults(data, nameFilter) {
  const filtered = data.allDatoCmsProduct.edges.filter(
    ({ node: product }) =>
      nameFilter === "" || product.name.includes(nameFilter)
  )
  if (filtered.length === 0) {
    return (
      <div className="simpleMessage">
        Brak wyników dla <i>{nameFilter}</i>.
      </div>
    )
  } else {
    return (
      <ul>
        {filtered.map(({ node: product }) => (
          <li>
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
        <div className="productsSearch grid3">
          <div className="centeredColumn">
            <input
              type="text"
              value={nameFilter}
              onChange={event => setNameFilter(event.target.value)}
              placeholder="Szukaj"
            />
          </div>
          {maybeSerachResults(data, nameFilter)}
        </div>
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
        }
      }
    }
  }
`
