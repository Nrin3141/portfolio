import React from "react"
import { Link } from "gatsby"

const MenuLinks = () => (
  <div className="menu-links">
    <Link to="/" activeStyle={{ textDecoration: "underline" }}>
      <h1 id="navigation-header">trebeljahr</h1>
    </Link>
    <Link to="/coding" activeStyle={{ textDecoration: "underline" }}>
      <i className="fas fa-code"></i>
      <p>coding</p>
    </Link>
    <Link to="/photography" activeStyle={{ textDecoration: "underline" }}>
      <i className="fas fa-camera"></i>
      <p>photography</p>
    </Link>
    {/* <a href={process.env.GATSBY_GHOST_URL}>
      <i className="fas fa-pen"></i>blog
    </a> */}
    <Link to="/contact" activeStyle={{ textDecoration: "underline" }}>
      <i className="fas fa-paper-plane"></i>
      <p>contact</p>
    </Link>
  </div>
)

export default MenuLinks
