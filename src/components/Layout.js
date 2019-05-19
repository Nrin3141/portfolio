import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Navigation from "./navigation.js"
import Social from "./Social"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import "./layout.css"
import { theme } from "../utils/getPageContext"
import withRoot from "../utils/withRoot"
import HeartIcon from "@material-ui/icons/Favorite"

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
            <main
              style={{
                padding: noSpacing ? "0" : "40px 0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "90vh",
              }}
            >
              {children}
            </main>
            {disableMenu ? (
              ""
            ) : (
              <footer
                style={{
                  textAlign: "center",
                }}
              >
                <Social>
                  <div>
                    © {new Date().getFullYear()}, Built with{` `}
                    <HeartIcon
                      style={{
                        fontSize: "0.7em",
                        color: theme.palette.tertiary.color,
                      }}
                    />
                    {` `}by Rico
                  </div>
                </Social>
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
