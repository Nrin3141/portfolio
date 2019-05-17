import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { theme } from "../../utils/getPageContext.js"

const styles = {
  appBar: {
    width: "100%",
    position: "relative",
    zIndex: 3,
    background: "white",
    padding: "20px",
  },
  toolbar: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    [theme.breakpoints.up(750)]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up(1500)]: {
      justifyContent: "center",
    },
  },
  Button: {
    color: "white",
    textDecoration: "none",
    textTransform: "capitalize",
    [theme.breakpoints.up(1500)]: {
      margin: "0 20px",
    },
  },
  buttonwrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down(400)]: {
      flexDirection: "column",
      width: "auto",
    },
    [theme.breakpoints.up(1500)]: {
      justifyContent: "center",
      width: "auto",
    },
  },
}

class BottomAppBar extends React.Component {
  render() {
    const { classes, children } = this.props
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.buttonwrapper}>
            <Button
              className={classes.Button}
              style={{ textDecoration: "none" }}
              href={"https://github.com/Nrin3141"}
              target="blank"
              rel="noopener"
            >
              Github <i className="fab fa-github" />
            </Button>
            <Button
              className={classes.Button}
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/ricotrebeljahr"
              target="blank"
              rel="noopener"
            >
              Linked
              <i className="fab fa-linkedin" style={{ color: "#4875B4" }} />
            </Button>
          </div>
          <div className={classes.buttonwrapper}>
            <Button
              className={classes.Button}
              style={{ textDecoration: "none" }}
              href="https://stackoverflow.com/story/ricotrebeljahr"
              target="blank"
              rel="noopener"
            >
              <i
                className="fab fa-stack-overflow"
                style={{ color: "#F48024" }}
              />{" "}
              Stackoverflow
            </Button>
            <Button
              className={classes.Button}
              style={{ textDecoration: "none" }}
              href="https://codepen.io/Nrin/"
              target="blank"
              rel="noopener"
            >
              Codepen{" "}
              <i
                className="fab fa-codepen"
                style={{ color: "rgb(100, 100, 100)" }}
              />
            </Button>
          </div>
        </Toolbar>
        {children}
      </AppBar>
    )
  }
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BottomAppBar)
