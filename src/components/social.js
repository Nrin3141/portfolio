import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"

const BottomAppBar = () =>  {
    return (
      <AppBar position="fixed">
        <Toolbar >
          <div >
            <Button
              
              style={{ textDecoration: "none" }}
              href={"https://github.com/Nrin3141"}
              target="blank"
              rel="noopener"
            >
              Github <i className="fab fa-github" />
            </Button>
            <Button
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/ricotrebeljahr"
              target="blank"
              rel="noopener"
            >
              Linked
              <i className="fab fa-linkedin" style={{ color: "#4875B4" }} />
            </Button>
          </div>
          <div >
            <Button
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

export default BottomAppBar
