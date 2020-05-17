import React from "react"
import { Link } from "gatsby"
import Photography from "@material-ui/icons/PhotoCamera"
import Home from "@material-ui/icons/Home"
import Blog from "@material-ui/icons/Create"
import Coding from "@material-ui/icons/Code"
import Contact from "@material-ui/icons/Send"

const MenuLinks = () => (
  <>
    <Link to="/home" activeStyle={{ textDecoration: "underline" }}>
      <Home color="primary" />
      home
    </Link>
    <Link to="/coding" activeStyle={{ textDecoration: "underline" }}>
      <Coding color="primary" />
      coding
    </Link>
    <Link to="/photography" activeStyle={{ textDecoration: "underline" }}>
      <Photography color="primary" />
      photography
    </Link>
    <a href={process.env.GATSBY_GHOST_URL}>
      <Blog color="primary" /> blog
    </a>

    <Link to="/contact" activeStyle={{ textDecoration: "underline" }}>
      <Contact color="primary" /> contact
    </Link>
  </>
)

export default MenuLinks
