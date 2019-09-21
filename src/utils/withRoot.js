import React, { Fragment } from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import JssProvider from "react-jss/lib/JssProvider"
import getPageContext from "./getPageContext"
import { Helmet } from "react-helmet"

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props)
      this.muiPageContext = getPageContext()
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side")
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return (
        <Fragment>
          <Helmet>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
              integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
              crossorigin="anonymous"
            />
          </Helmet>
          <JssProvider
            generateClassName={this.muiPageContext.generateClassName}
          >
            {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
            <MuiThemeProvider
              theme={this.muiPageContext.theme}
              sheetsManager={this.muiPageContext.sheetsManager}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...this.props} />
            </MuiThemeProvider>
          </JssProvider>
          <style jsx global>{`
            body {
              margin: 0;
              font-size: calc(
                14px + (26 - 14) * ((100vw - 300px) / (1600 - 300))
              );
              line-height: calc(
                1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300))
              );
              font-family: "Roboto", sans-serif;
            }
          `}</style>
        </Fragment>
      )
    }
  }

  return WithRoot
}

export default withRoot
