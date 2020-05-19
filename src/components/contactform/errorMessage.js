import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import WarningIcon from "@material-ui/icons/Warning"

const ErrorMessage = ({ show }) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={show}
        ContentProps={{
          "aria-describedby": "error-message",
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          },
        }}
        message={
          <div
            style={{ color: "white", display: "flex", alignItems: "center" }}
          >
            <WarningIcon style={{ fontSize: "1em", marginRight: "5px" }} />
            <span id="message-id">This is not a valid E-Mail!</span>
          </div>
        }
      />
    </div>
  )
}

export default ErrorMessage
