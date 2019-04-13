import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import productsStyles from "../pages/products.module.scss"

export default ({ product }) => (
  <article>
    <Link to={"/produkty/" + product.slug}>
      <Img fluid={product.images[0].fluid} />
    </Link>
    <h2 className={productsStyles.productsItemLabel}>{product.name}</h2>
  </article>
)
