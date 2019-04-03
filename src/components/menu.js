import React from "react"
import menuStyles from "./menu.module.scss"
import { Link } from "gatsby"

export default () => (
  <nav className={menuStyles.menu}>
    <h5 class="seo">Menu główne</h5>
    <div className={menuStyles.logo}>
      <Link href="/" title="Strona główna">
        <img src="/img/logo/Falda_logo_vertical_black.svg" alt="Logo Falda" />
      </Link>
    </div>
    <ul>
      <li>Kim jesteśmy</li>
      <li>Nasza kolekcja</li>
      <li>Zaprojektuj własną spódnicę</li>
      <li>Tkaniny i dodatki</li>
      <li>Warunki zakupów</li>
      <li>Koszyk</li>
      <li>Kontakt</li>
      <li>Falda w obiektywie</li>
    </ul>

    <section className={menuStyles.social}>
      <h3 class="seo">
        Odnośniki do profili Falda na portalach społecznościowych
      </h3>
      <a>
        <i />
      </a>
      <a>
        <i />
      </a>
      <a>
        <i />
      </a>
    </section>
  </nav>
)
