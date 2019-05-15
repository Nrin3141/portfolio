import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { theme } from "../../utils/getPageContext.js"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const styles = theme => ({
  bigAvatar: {
    width: "30vw",
    height: "30vw",
    backgroundImage: `url(${""})`,
  },
  width: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  col: {
    flexDirection: "column",
  },
  headline: {
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2vh",
    padding: "5vh",
  },
  responsive: {
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
})

const AboutMe = props => {
  const { classes } = props

  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "images/rico.jpg" }) {
            img: childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <MuiThemeProvider theme={theme}>
            <Paper
              className={classNames(classes.container, classes.responsive)}
            >
              <Img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  margin: "5vh",
                }}
                fluid={data.file.img.fluid}
              />
              <div className={classNames(classes.width, classes.col)}>
                <h2 className={classes.headline}>About Me</h2>
                <p>
                  Hi there, I am Rico - a self-taught full-stack-developer from
                  Berlin. I like problem solving. I like programming. I like
                  photography. And I am a passionate traveler.
                </p>
              </div>
            </Paper>
            <Paper className={classes.container}>
              <h2>How can I help you?</h2>
              <p>
                Do you want to have your own website too? Or a Web app? Mobile
                game? Online Shop? Blog?! Or do you have an amazing idea but
                lack the technical skills to actually do it? Don't hesitate to
                ask.
              </p>
              <Link to="/contact">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: "5vh" }}
                >
                  Get in touch
                </Button>
              </Link>
              <p>
                Or are you in search of a full-stack developer to expand your
                team? Somebody who can easily learn and integrate new
                technologies and loves to expand his expertise constantly?
              </p>
            </Paper>
            <style>{`
              p {
                margin: 0;
                padding: 0;
              }
              `}</style>
          </MuiThemeProvider>
        )
      }}
    />
  )
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutMe)
