import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import SideMenu from "./sidemenu.js"
import Search from "./Search"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { theme } from "../utils/getPageContext.js"

const styles = theme => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
})
const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

function Navigation(props) {
  const { classes, siteTitle } = props
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <SideMenu />
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              {siteTitle}
            </Typography>
            <div className={classes.grow} />
            <Search collapse indices={searchIndices} />
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  )
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navigation)
