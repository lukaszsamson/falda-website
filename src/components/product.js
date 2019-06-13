import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import produktyStyles from "../pages/produkty.module.scss"

export default ({ product }) => (
  <article>
    <Link to={"/kolekcja/" + product.slug}>
      <Img fluid={product.images[0].fluid} />
    </Link>
    <h2 className={produktyStyles.productsItemLabel}>{product.name}</h2>
  </article>
)
