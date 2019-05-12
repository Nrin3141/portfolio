import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
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

const styles = {
  list: {
    width: 250,
    display: "flex",
    flexDirection: "column",
  },
}

class SideMenu extends React.Component {
  state = {
    drawer: false,
  }

  toggleDrawer = open => () => {
    this.setState({
      drawer: open,
    })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        {["Home", "Photography", "Coding", "Contact"].map((text, index) => {
          return (
            <a
              key={text}
              href={
                "https://ricotrebeljahr.de/" +
                (text === "Home" ? "" : text.toLowerCase())
              }
            >
              <ListItem button>
                <ListItemIcon>
                  {text === "Photography" ? (
                    <Photography color="primary" />
                  ) : text === "Coding" ? (
                    <Coding color="primary" />
                  ) : text === "Home" ? (
                    <Home color="primary" />
                  ) : (
                    <Contact color="primary" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          )
        })}
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <Create color="primary" />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
        </Link>
      </div>
    )

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Open drawer"
          onClick={this.toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.drawer} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SideMenu)
