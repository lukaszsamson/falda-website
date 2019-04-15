import React from "react"
import menuStyles from "./menu.module.scss"
import { Link, StaticQuery } from "gatsby"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

function render(data) {
  return (
    <nav className={menuStyles.menu}>
      <h5 className="seo">Menu główne</h5>
      <div className={menuStyles.logo}>
        <Link to="/" title="Strona główna">
          <img src="/img/logo/Falda_logo_vertical_black.svg" alt="Logo Falda" />
        </Link>
      </div>
      <ul>
        {data.datoCmsHomePage.menu.map((item) => (
          <li>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <section className={menuStyles.social}>
        <h3 className="seo">
          Odnośniki do profili Falda na portalach społecznościowych
        </h3>
        <a href="#TODO">
          <FaFacebook />
        </a>
        <a href="#TODO">
          <FaInstagram />
        </a>
        <a href="#TODO">
          <FaTwitter />
        </a>
      </section>
    </nav>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        datoCmsHomePage {
          menu {
            link
            label
          }
        }
      }
    `}
    render={render}
  />
)
