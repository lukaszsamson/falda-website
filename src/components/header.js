import React from "react"
import headerStyles from "./header.module.scss"
// import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa'

export default () => (
  <header className={headerStyles.header}>
    <img
      src="/img/logo/Falda_logo_horizontal_black.svg"
      className={headerStyles.logo}
      alt="Logo firmy Falda"
    />
    {/* <div className={headerStyles.buttons}>
      <a>
        <FaShoppingCart />
        <span>Koszyk</span>
      </a>
      <a>
        <FaSignInAlt />
        <span>Zaloguj</span>
      </a>
    </div> */}
  </header>
)
