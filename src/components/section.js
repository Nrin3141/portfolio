import React from "react"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import { Link } from "gatsby"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { theme } from "../utils/getPageContext.js"

const Section = ({ headline, href, images, counter }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(
          filter: {
            extension: { regex: "/(jpg)|(jpeg)|(png)/" }
            relativeDirectory: { eq: "images/banners" }
          }
          sort: { fields: name, order: ASC }
        ) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 970) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div>
          <div className="absolute">
            <Paper className={"muipaper"}>
              <h2 style={{ marginLeft: "0.4em" }}>I am a</h2>
              <h2 style={{ marginLeft: "0.4em" }} className="muiheadline">
                {headline} <div className="blinking-dash" />
              </h2>
            </Paper>
            <MuiThemeProvider theme={theme}>
              {href !== "https://photodyssee.com" ? (
                <Button
                  variant="contained"
                  color="secondary"
                  className="muibutton"
                >
                  <Link
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                    to={href}
                  >
                    See for yourself!
                  </Link>
                </Button>
              ) : (
                <Button
                  href={href}
                  variant="contained"
                  color="secondary"
                  className="muibutton"
                >
                  See for yourself!
                </Button>
              )}
            </MuiThemeProvider>
          </div>
          <Img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              opacity: 0.8,
            }}
            fluid={
              data.allFile.edges[
                counter === 0 &&
                typeof window !== "undefined" &&
                window.innerWidth < 500
                  ? 3
                  : counter
              ].node.childImageSharp.fluid
            }
          />
          <style jsx>{`
            .absolute :global(.muipaper) {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              background: white;
              flex-wrap: wrap;
              min-width: 20vw;
              max-width: 80vw;
              padding: 1em 2em;
            }

            .absolute :global(.muibutton) {
              margin-top: 40px;
              text-decoration: none;
              color: black;
              display: relative;
              z-index: 2;
              padding: 10px 20px;
              text-decoration: none;
            }
            .absolute :global(.muiheadline) {
              display: flex;
              flex-direction: row;
              align-items: center;
            }
            div {
              width: 100%;
              height: 100%;
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
            }
            .off {
              display: none;
            }
            @keyframes blink {
              0% {
                background: black;
              }
              50% {
                background: white;
              }
              100% {
                background: black;
              }
            }
            .blinking-dash {
              background: black;
              line-height: 1em;
              margin-left: 3px;
              animation: blink 0.8s infinite;
              width: 3px;
              height: 1em;
            }
            h2 {
              font-size: 1em;
              margin: 0;
              padding: 0;
            }
            .absolute {
              position: absolute;
              top: 20%;
              width: 80vw;
              height: auto;
              z-index: 4;
            }
            @media only screen and (min-width: 900px) {
              .absolute :global(.muipaper) {
                padding: 1em 10em;
              }
            }
          `}</style>
        </div>
      )
    }}
  />
)

export default Section
