import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Snackbar from "@material-ui/core/Snackbar"
import WarningIcon from "@material-ui/icons/Warning"
import { theme } from "../../utils/getPageContext.js"

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
})

const ErrorMessage = ({ classes, show, email }) => {
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
            background: theme.palette.error.dark,
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

ErrorMessage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ErrorMessage)
