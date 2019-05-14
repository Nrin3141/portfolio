import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Projects from "../Projects"
import AboutMe from "../AboutMe"
import Technologies from "../Technologies"

const styles = {
  outer: {
    position: "relative",
    zIndex: 1,
    width: "100vw",
    background: "rgb(51, 51, 51)",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    borderRadius: "0 0 30px 30px",
    position: "relative",
    zIndex: 1,
    background: "white",
    width: "90vw",
    textAlign: "justify",
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    paddingBottom: "10%",
  },
}

const Developer = props => {
  const { classes } = props

  return (
    <div className={classes.outer}>
      <div className={classes.wrapper}>
        <AboutMe />
        <Projects />
        <Technologies />
      </div>
    </div>
  )
}

Developer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Developer)
