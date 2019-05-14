import React from "react"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f9dc5c",
    },
  },
  typography: {
    useNextVariants: true,
  },
})
const styles = {
  button: {
    marginTop: "40px",
    textDecoration: "none",
    color: "black",
    display: "relative",
    zIndex: 2,
    padding: "10px 20px",
  },
  white: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    padding: "1em 10em",
    flexWrap: "wrap",
    minWidth: "20vw",
  },
  dash: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}
const Section = ({ classes, headline, href, images, counter }) => (
  <StaticQuery
    /*query {
    file(relativePath: { eq: "images/rico.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 970) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }*/
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
      console.log(counter === 0 && window.innerWidth < 500 ? 4 : counter)
      return (
        <div>
          <div className="absolute">
            <Paper className={classes.white}>
              <h2 style={{ marginLeft: "0.4em" }}>I am a</h2>
              <h2 style={{ marginLeft: "0.4em" }} className={classes.dash}>
                {headline} <div className="blinking-dash" />
              </h2>
            </Paper>
            <MuiThemeProvider theme={theme}>
              {href !== "https://photodyssee.com" ? (
                <Link to={href}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    See for yourself!
                  </Button>
                </Link>
              ) : (
                <Button
                  href={href}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  See for yourself!
                </Button>
              )}
            </MuiThemeProvider>
          </div>
          <Img
            style={{ width: "100vw", height: "100vh", opacity: 0.8 }}
            fixed={
              data.allFile.edges[
                counter === 0 && window.innerWidth < 500 ? 3 : counter
              ].node.childImageSharp.fluid
            }
          />
          <style jsx>{`
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
          `}</style>
        </div>
      )
    }}
  />
)

export default withStyles(styles)(Section)

Section.propTypes = {
  classes: PropTypes.object.isRequired,
}
