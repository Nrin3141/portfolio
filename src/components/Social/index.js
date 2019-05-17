import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"

const styles = {
  appBar: {
    width: "100%",
    position: "relative",
    zIndex: 3,
    background: "white",
    padding: "20px",
  },
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    background: "white",
    flexWrap: "wrap",
  },
  Button: {
    color: "white",
    textDecoration: "none",
    textTransform: "capitalize",
  },
}

class BottomAppBar extends React.Component {
  render() {
    const { classes, children } = this.props
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
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
          <Button
            className={classes.Button}
            style={{ textDecoration: "none" }}
            href="https://stackoverflow.com/story/ricotrebeljahr"
            target="blank"
            rel="noopener"
          >
            <i className="fab fa-stack-overflow" style={{ color: "#F48024" }} />{" "}
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
