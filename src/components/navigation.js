import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MobileMenu from "./menus/Mobile"
import "../css/navigation.css"

function Navigation({ siteTitle }) {
  return (
    <div className="root">
      <AppBar color="primary" position="static">
        <Toolbar>
          <MobileMenu />
          <Typography className="title" variant="h6" color="inherit" noWrap>
            {siteTitle}
          </Typography>
          <div className="grow" />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation
