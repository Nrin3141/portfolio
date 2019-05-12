/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Navigation from "./navigation.js"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import "./layout.css"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { theme } from "../templates/theme"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navigation siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Helmet>
            <title>No TITLE!!!</title>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
              rel="stylesheet"
            />
          </Helmet>
          <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
