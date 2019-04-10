import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <h1>{data.datoCmsProduct.name}</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </Layout>
)

export const query = graphql`
  query ProductQuery($slug: String!) {
    datoCmsProduct(slug: { eq: $slug }) {
      name
    }
  }
`
