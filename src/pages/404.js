import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <section className="container">
      <HelmetDatoCms>
        <html lang="pl_PL" />
      </HelmetDatoCms>
      <h1>404 Nie znaleziono</h1>
      <p>Strona o tym adresie nie istnieje.</p>
    </section>
  </Layout>
)
