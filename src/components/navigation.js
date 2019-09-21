import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import SideMenu from "./sidemenu.js"
// import Search from "./Search"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { theme } from "../utils/getPageContext.js"

// const searchIndices = [
//   { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
//   { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
// ]

function Navigation({ siteTitle }) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="root">
        <AppBar color="primary" position="static">
          <Toolbar>
            <SideMenu />
            <Typography className="title" variant="h6" color="inherit" noWrap>
              {siteTitle}
            </Typography>
            <div className="grow" />
            {/* <Search collapse indices={searchIndices} /> */}
          </Toolbar>
        </AppBar>
      </div>
      <style jsx>{`
        .root {
          width: 100%;
        }
        .root :global(.title) {
          display: none;
        }
        .grow {
          flex-grow: 1;
        }
        @media only screen and (max-width: 600px) {
          .root :global(.title) {
            display: block;
          }
        }
      `}</style>
    </MuiThemeProvider>
  )
}

export default Navigation
