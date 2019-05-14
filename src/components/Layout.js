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
import withRoot from "../utils/withRoot"
import Icon from "@material-ui/core/Icon"
const Layout = ({ children, disableMenu, noSpacing }) => (
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
        {disableMenu ? (
          ""
        ) : (
          <Navigation siteTitle={data.site.siteMetadata.title} />
        )}
        <div
          style={{
            margin: noSpacing ? "0" : "0px auto",
            padding: noSpacing ? "0" : "0px 1.45rem",
            paddingTop: 0,
          }}
        >
          <Helmet>
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
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
              integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
              crossorigin="anonymous"
            />
          </Helmet>
          <div>
            <main style={{ padding: noSpacing ? "0" : "40px 0px" }}>
              {children}
            </main>
            {disableMenu ? (
              ""
            ) : (
              <footer
                style={{ textAlign: "center", margin: "0", padding: "0" }}
              >
                © {new Date().getFullYear()}, Built with{` `}
                <Icon style={{ fontSize: "0.7em" }} color="secondary">
                  favorite
                </Icon>
                {` `}by Rico
              </footer>
            )}
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withRoot(Layout)
