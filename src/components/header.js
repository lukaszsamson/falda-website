import React from "react"
import headerStyles from "./header.module.scss"

export default () => (
  <header className={headerStyles.header}>
    <img
      src="/img/logo/Falda_logo_horizontal_black.svg"
      className={headerStyles.logo}
      alt="Logo firmy Falda"
    />
    <div className={headerStyles.buttons}>
      <a>
        <i />
        <span>Koszyk</span>
      </a>
      <a>
        <i />
        <span>Zaloguj</span>
      </a>
    </div>
  </header>
)
