import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import produktyStyles from "../pages/produkty.module.scss"

export default ({ fabric }) => (
  <article>
    <Link to={"/tkaniny/" + fabric.slug}>
      <Img fluid={fabric.images[0].fluid} />
    </Link>
    <h2 className={produktyStyles.productsItemLabel}>{fabric.name}</h2>
  </article>
)
