import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import indexStyles from "../pages/index.module.scss"

export default (props) => (
  <article className={indexStyles.navItem}>
    <div className={indexStyles.navItemCaption}>
      <div
        dangerouslySetInnerHTML={{
          __html: props.caption.childMarkdownRemark.html,
        }}
      />
      <Link to={props.link}>{props.linkCaption}</Link>
    </div>
    <Img fluid={props.image.fluid} />
  </article>
)
