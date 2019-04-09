import React from "react"
import footerStyles from "./footer.module.scss"

export default () => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.content + ' grid3 container'}>
      <section>
        <address className={footerStyles.contactInfo}>
          <h3 className="seo">Informacje kontaktowe</h3>
          <div className={footerStyles.companyName}>
            <h4 className="seo">Nazwa firmy</h4>
            Falda
          </div>
          <div className={footerStyles.companyAddress}>
            <h4 className="seo">Adres</h4>
            Ulica 123/45
            <br />
            12-123 Miasto
          </div>
          <div className={footerStyles.companyEmail}>
            <h4 className="seo">Adres email</h4>
            <a href="mailto:kontakt@falda.pl">kontakt@falda.pl</a>
          </div>
        </address>
      </section>
      <nav className={footerStyles.links}>
        <h3 className="seo">Odnośniki do informacji prawnych</h3>
        <ul>
          <li>
            <a href="#">Regulamin</a>
          </li>
          <li>
            <a href="#">Polityka prywatności</a>
          </li>
          <li>
            <a href="#">Polityka zwrotów</a>
          </li>
        </ul>
      </nav>
      <div />
    </div>
    <section className={footerStyles.copyrightInfo}>
      <h3 className="seo">Informacje o prawach autorskich</h3>
      Copyright Ⓒ Falda
    </section>
  </footer>
)
