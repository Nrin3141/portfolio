import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Navigation from "./navigation.js"
import Social from "./social"
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
      <Social>
        <div>
          © {new Date().getFullYear()}, Built with{` `}
          <i className="fas fa-heart"></i>
          {` `}by Rico
        </div>
      </Social>
    </footer>
  )
}
export default Layout
