import React from "react"
import Navigation from "./navigation.js"
import "../css/layout.css"

const Layout = ({ children }) => (
  <>
    <Navigation />
    <div className="layout-content-container">{children}</div>
    <Footer />
  </>
)

const Footer = () => {
  return (
    <footer>
      <div className="socials-bar">
        <a href={"https://github.com/trebeljahr"} target="blank" rel="noopener">
          Github <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/ricotrebeljahr"
          target="blank"
          rel="noopener"
        >
          Linked
          <i className="fab fa-linkedin" style={{ color: "#4875B4" }} />
        </a>
        <a
          href="https://stackoverflow.com/story/ricotrebeljahr"
          target="blank"
          rel="noopener"
        >
          <i className="fab fa-stack-overflow" style={{ color: "#F48024" }} />{" "}
          Stackoverflow
        </a>
        <a href="https://codepen.io/Nrin/" target="blank" rel="noopener">
          Codepen{" "}
          <i
            className="fab fa-codepen"
            style={{ color: "rgb(100, 100, 100)" }}
          />
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
