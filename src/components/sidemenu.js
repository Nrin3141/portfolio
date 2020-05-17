import React, { useState } from "react"
import Drawer from "@material-ui/core/Drawer"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import { Link } from "gatsby"
import Photography from "@material-ui/icons/PhotoCamera"
import Home from "@material-ui/icons/Home"
import Blog from "@material-ui/icons/Create"
import Coding from "@material-ui/icons/Code"
import Contact from "@material-ui/icons/Send"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import "../css/sidemenu.css"

const SingleListItem = ({ children, text, linkTo }) => {
  return (
    <ListItem
      className="side-menu-item"
      component={Link}
      to={linkTo}
      activeClassName="active"
    >
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

const SideMenu = () => {
  const [drawer, setDrawer] = useState(true)

  const toggleDrawer = () => () => {
    setDrawer(old => !old)
  }

  const links = [
    {
      link: "/photography",
      text: "Photography",
      icon: <Photography color="primary" />,
    },
    {
      link: "/",
      text: "Home",
      icon: <Home color="primary" />,
    },
    {
      link: "/coding",
      text: "Coding",
      icon: <Coding color="primary" />,
    },
    {
      link: "/contact",
      text: "Contact",
      icon: <Contact color="primary" />,
    },
    {
      link: process.env.GATSBY_GHOST_URL,
      text: "Blog",
      icon: <Blog color="primary" />,
    },
  ]
  const sideList = (
    <div className="list">
      {links.map(({ link, text, icon }, index) => (
        <SingleListItem
          Icon={icon}
          text={text}
          linkTo={link}
          key={`link-${index}`}
        >
          {icon}
        </SingleListItem>
      ))}
    </div>
  )

  return (
    <div>
      <div
        style={{
          marginRight: "20px",
          background: "white",
          borderRadius: "50%",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <div
        className="side-menu-drawer"
        tabIndex={0}
        role="button"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        {sideList}
      </div>
    </div>
  )
}

export default SideMenu
