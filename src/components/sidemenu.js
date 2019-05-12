import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}

class SideMenu extends React.Component {
  state = {
    drawer: false,
  }

  toggleDrawer = open => () => {
    this.setState({
      drawer: open,
    })
  }

  render() {
    const { classes } = this.props

    const sideList = <div className={classes.list} />

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Open drawer"
          onClick={this.toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.drawer} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SideMenu)
