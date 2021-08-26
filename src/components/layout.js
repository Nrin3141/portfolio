import React from "react"
import MenuLinks from "./menus/MenuLinks"
import "../css/layout.css"

const Layout = ({ withFooter = true, withNavigation = true, children }) => (
  <>
    {withNavigation && <Navigation />}
    {children}
    {withFooter && <Footer />}
  </>
)

export const Navigation = () => {
  return (
    <header>
      <div className="navigation-bar">
        <MenuLinks />
      </div>
    </header>
  )
}

export const Footer = () => {
  return (
    <footer>
      <div className="socials-bar">
        <a href={"https://github.com/trebeljahr"} target="blank" rel="noopener">
          Github <i className="fab fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/ricotrebeljahr">
          Linked
          <i className="fab fa-linkedin" />
        </a>
        <a href="https://stackoverflow.com/story/ricotrebeljahr">
          <i className="fab fa-stack-overflow" /> Stackoverflow
        </a>
        <a href="https://codepen.io/Nrin/">
          Codepen <i className="fab fa-codepen" />
        </a>
      </div>
      <div className="copyrights-bar">
        <p>© {new Date().getFullYear()}, Built with</p>
        <i className="fas fa-heart"></i>
        <p>by Rico</p>
      </div>
    </footer>
  )
}

export default Layout
