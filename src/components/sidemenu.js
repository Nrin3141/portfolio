import React from "react"
import Drawer from "@material-ui/core/Drawer"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import { Link } from "gatsby"
import Photography from "@material-ui/icons/PhotoCamera"
import Home from "@material-ui/icons/Home"
import Create from "@material-ui/icons/Create"
import Coding from "@material-ui/icons/Code"
import Contact from "@material-ui/icons/Send"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import "../css/sidemenu.css"

const SideMenu = () => {
  const [drawer, setDrawer] = useState(false)

  const toggleDrawer = () => () => {
    setDrawer(old => !old)
  }

  const sideList = (
    <div className="list">
      {["Home", "Photography", "Coding", "Blog", "Contact"].map((text, i) => {
        if (text === "Blog") {
          const linkTo = process.env.GATSBY_GHOST_URL
          return (
            <a key={i} href={linkTo} target="_blank" rel="noopener noreferrer">
              <ListItem key={text} button>
                {" "}
                <ListItemIcon>
                  <Create color="primary" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          )
        } else {
          const linkTo = "/" + (text === "Home" ? "" : text.toLowerCase())

          return (
            <ListItem
              key={i}
              component={Link}
              to={linkTo}
              activeClassName="active"
              partiallyActive={text !== "Home" ? true : false}
              button
            >
              <ListItemIcon>
                {text === "Photography" ? (
                  <Photography color="primary" />
                ) : text === "Coding" ? (
                  <Coding color="primary" />
                ) : text === "Home" ? (
                  <Home color="primary" />
                ) : text === "Contact" ? (
                  <Contact color="primary" />
                ) : (
                  <Create color="primary" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        }
      })}
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
      <Drawer open={drawer} onClose={toggleDrawer}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          {sideList}
        </div>
      </Drawer>
    </div>
  )
}

export default SideMenu
