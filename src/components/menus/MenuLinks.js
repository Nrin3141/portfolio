import React from "react"
import { Link } from "gatsby"

const MenuLinks = () => (
  <>
    <Link to="/" activeStyle={{ textDecoration: "underline" }}>
      <h1 id="navigation-header">trebeljahr</h1>
    </Link>
    <Link to="/coding" activeStyle={{ textDecoration: "underline" }}>
      <i className="fas fa-code"></i> coding
    </Link>
    <Link to="/photography" activeStyle={{ textDecoration: "underline" }}>
      <i className="fas fa-camera"></i> photography
    </Link>
    {/* <a href={process.env.GATSBY_GHOST_URL}>
      <i className="fas fa-pen"></i>blog
    </a> */}
    <Link to="/contact" activeStyle={{ textDecoration: "underline" }}>
      <i className="fas fa-paper-plane"></i> contact
    </Link>
  </>
)

export default MenuLinks
