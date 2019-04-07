import React, { useState } from "react"
import Menu from "./menu.js"
import Header from "./header.js"
import Footer from "./footer.js"
import layoutStyles from "./layout.module.scss"
import { FaBars } from "react-icons/fa"

export default ({ children }) => {
  const [menuShown, setMenuShown] = useState(false)
  return (
    <div className={layoutStyles.wrap}>
      <Header />
      <div className={menuShown ? layoutStyles.menuShown : ""}>
        <Menu />
        <button className={layoutStyles.menuIcon} aria-label="Menu" onClick={() => setMenuShown(!menuShown)}>
          <FaBars />
        </button>
        <div className={layoutStyles.menuOverlay} onClick={() => setMenuShown(false)}/>
      </div>
      <section className={layoutStyles.content}>{children}</section>
      <Footer />
    </div>
  )
}
