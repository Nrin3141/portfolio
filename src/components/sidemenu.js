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
import { MuiThemeProvider } from "@material-ui/core/styles"
import { theme } from "../utils/getPageContext.js"

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
        {["Home", "Photography", "Coding", "Blog", "Contact"].map(
          (text, index) => {
            return (
              <ListItem
                key={text}
                component={Link}
                to={"/" + (text === "Home" ? "" : text.toLowerCase())}
                activeClassName="active"
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
        )}
        <style>{`
          .active {
            background: #f9dc5c !important;
          }
          `}</style>
      </div>
    )

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <div style={{ marginRight: "20px" }}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
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
      </MuiThemeProvider>
    )
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SideMenu)
