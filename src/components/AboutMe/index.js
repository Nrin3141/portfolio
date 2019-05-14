import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Link from "next/link"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"

import _JSXStyle from "styled-jsx/style"
import Avatar from "@material-ui/core/Avatar"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { theme } from "../../config/theme.js"

const styles = theme => ({
  basic: {
    paddingTop: "30px",
    width: "80vw",
    textAlign: "justify",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bigAvatar: {
    margin: "10px",
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
    margin: 10,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
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
    <MuiThemeProvider theme={theme}>
      <div className={classes.basic}>
        <Paper className={classNames(classes.container, classes.responsive)}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/profile.jpg"
            className={classes.bigAvatar}
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
            Do you want to have your own website too? Or a Web app? Mobile game?
            Online Shop? Blog?! Or do you have an amazing idea but lack the
            technical skills to actually do it? Don't hesitate to ask.
          </p>
          <Link href="/contact">
            <Button variant="contained" color="secondary">
              Get in touch
            </Button>
          </Link>
          <p>
            Or are you in search of a full-stack developer to expand your team?
            Somebody who can easily learn and integrate new technologies and
            loves to expand his expertise constantly?
          </p>
        </Paper>
      </div>
    </MuiThemeProvider>
  )
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutMe)

/*const AboutMe = () => (

    <style jsx>{`
    @media only screen and (min-width: 600px): {
      img {
        display: none,
      }
      img {
        display: block,
      }
      grid {
        align-items: start,
        display: grid,
        grid-template-areas:
          "p . h"
          "a a a"
          "b . d"
          "c c c",
        grid-template-columns: 1fr 0.2fr 1fr,
      }
    }
    @media only screen and (min-width: 900px) {
      .grid {
        align-items: start,
        display: grid,
        grid-template-areas:
          "p . h"
          "a a a"
          "b . d"
          "c c c",
        grid-template-columns: 1fr 0.2fr 1fr,
      }
    }
    `}</style>
  </div>
);
export default AboutMe;
*/
