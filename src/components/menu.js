import React from "react"
import menuStyles from "./menu.module.scss"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default () => (
  <nav className={menuStyles.menu}>
    <h5 className="seo">Menu główne</h5>
    <div className={menuStyles.logo}>
      <Link to="/" title="Strona główna">
        <img src="/img/logo/Falda_logo_vertical_black.svg" alt="Logo Falda" />
      </Link>
    </div>
    <ul>
      <li><Link to="/about">Kim jesteśmy</Link></li>
      <li><Link to="/products">Nasza kolekcja</Link></li>
      <li>Zaprojektuj własną spódnicę</li>
      <li>Tkaniny i dodatki</li>
      <li>Warunki zakupów</li>
      <li>Koszyk</li>
      <li>Kontakt</li>
      <li>Falda w obiektywie</li>
    </ul>

    <section className={menuStyles.social}>
      <h3 className="seo">
        Odnośniki do profili Falda na portalach społecznościowych
      </h3>
      <a>
      <FaFacebook />
      </a>
      <a>
      <FaInstagram />
      </a>
      <a>
      <FaTwitter />
      </a>
    </section>
  </nav>
)
