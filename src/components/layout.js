import React, { useState, useEffect } from "react"
import Menu from "./menu.js"
import Header from "./header.js"
import Footer from "./footer.js"
import layoutStyles from "./layout.module.scss"
import { FaBars } from "react-icons/fa"

export default ({ children }) => {
  const [menuShown, setMenuShown] = useState(false)
  const upHandler = ({ key }) => {
    if (key === "Escape") {
      setMenuShown(false);
    }
  }
  useEffect(() => {
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keyup', upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
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
      <div className={layoutStyles.content}>{children}</div>
      <Footer />
    </div>
  )
}
