import React from "react"
import Menu from "./menu.js"
import Header from "./header.js"
import Footer from "./footer.js"
import layoutStyles from "./layout.module.scss"

export default ({ children }) => (
  <div className={layoutStyles.wrap}>
    <Header />
    <div>
    <Menu />
    <button className={layoutStyles} aria-label="Menu"><i /></button>
    <div className={layoutStyles.menuOverlay}></div>
    </div>
    {children}
    <Footer />
  </div>
)
