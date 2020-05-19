import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import SuccessIcon from "@material-ui/icons/CheckCircle"

class ErrorMessage extends React.Component {
  state = { show: true }

  handleClose = () => {
    this.setState({ show: false })
  }
  render() {
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          onClose={this.handleClose}
          autoHideDuration={6000}
          open={this.state.show}
          ContentProps={{
            "aria-describedby": "error-message",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            },
          }}
          message={
            <div
              style={{ color: "white", display: "flex", alignItems: "center" }}
            >
              <SuccessIcon style={{ fontSize: "1em", marginRight: "5px" }} />
              <span id="message-id">Success!!!</span>
            </div>
          }
        />
      </div>
    )
  }
}

export default ErrorMessage
