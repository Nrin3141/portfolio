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
const Section = ({ classes, headline, href, images }) => (
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
            relativeDirectory: { eq: "gallery" }
          }
        ) {
          edges {
            node {
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
      console.log(data)
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
              <Link to={href}>
                <Button
                  href={href === "https://photodyssee.com" ? href : ""}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  See for yourself!
                </Button>
              </Link>
            </MuiThemeProvider>
          </div>
          <Img
            style={{ width: "100vw", height: "100vh" }}
            fixed={data.allFile.edges[0].node.childImageSharp.fluid}
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
            #programmer {
              background-size: 200%;
              background-position: 50% 80%;
            }
            #photographer {
              background-position: 80% 80%;
              background-size: cover;
            }
            #traveler {
              background-size: cover;
              background-position: 80% 80%;
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
            .img {
              background-repeat: no-repeat;
              opacity: 0.7;
              width: 100vw;
            }

            @media only screen and (min-width: 850px) {
              #photographer {
                background-position: 80% 20%;
              }
              #traveler {
                background-position: 70% 50%;
              }
            }
            @media only screen and (min-width: 650px) {
              #programmer {
                background-position: 50% 20%;
                background-size: cover;
              }
            }
            @media only screen and (max-width: 650px) {
              #programmer {
                background-size: cover;
                background-position: 48% 50%;
              }
            }
            @media only screen and (max-width: 500px) {
              #traveler {
                background-position: 70% 20%;
              }
            }
            @media (orientation: portrait) {
              background-size: auto 100vh;
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
