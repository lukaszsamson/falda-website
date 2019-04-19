import React from "react"
import footerStyles from "./footer.module.scss"
import { StaticQuery, Link, graphql } from "gatsby"

function infoLinks(infos) {
  return infos.map(({ node: info }) => (
    <li key={info.slug}>
      <Link to={"/informacje/" + info.slug}>{info.name}</Link>
    </li>
  ))
}

function render(data) {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.content + " grid3 container"}>
        <section>
          <address className={footerStyles.contactInfo}>
            <h3 className="seo">Informacje kontaktowe</h3>
            <div className={footerStyles.companyName}>
              <h4 className="seo">Nazwa firmy</h4>
              <p>{data.home.contactInfo[0].name}</p>
            </div>
            <div className={footerStyles.companyAddress}>
              <h4 className="seo">Adres</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.home.contactInfo[0].addressNode.childMarkdownRemark.html,
                }}
              >
              </div>
            </div>
            <div className={footerStyles.companyEmail}>
              <h4 className="seo">Adres email</h4>
              <a href={"mailto:" + data.home.contactInfo[0].email}>
                {data.home.contactInfo[0].email}
              </a>
            </div>
          </address>
        </section>
        <nav className={footerStyles.links}>
          <h3 className="seo">Odnośniki do informacji prawnych</h3>
          <ul>{infoLinks(data.allDatoCmsInfo.edges)}</ul>
        </nav>
        <div />
      </div>
      <section className={footerStyles.copyrightInfo}>
        <h3 className="seo">Informacje o prawach autorskich</h3>
        Copyright Ⓒ Falda
      </section>
    </footer>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query InfosQuery {
        allDatoCmsInfo: allDatoCmsInfo(sort: { fields: [name], order: ASC }) {
          edges {
            node {
              name
              slug
            }
          }
        }
        home: datoCmsHomePage {
          contactInfo {
            name
            addressNode {
              childMarkdownRemark {
                html
              }
            }
            email
          }
        }
      }
    `}
    render={render}
  />
)
