import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import classnames from "classnames"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Fade from "@material-ui/core/Fade"
import Button from "@material-ui/core/Button"
import Tooltip from "@material-ui/core/Tooltip"
import { Link } from "gatsby"
import { theme } from "../utils/getPageContext.js"

const styles = theme => ({
  card: {
    margin: "10px 0",
    width: "90vw",
    [theme.breakpoints.up("md")]: {
      width: "45vw",
      height: "45vw",
    },
    [theme.breakpoints.up("lg")]: {
      width: "30vw",
      height: "30vw",
    },
    [theme.breakpoints.up("xl")]: {
      width: "23vw",
      height: "23vw",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  root: {
    [theme.breakpoints.up("md")]: {
      maxHeight: "80%",
    },
    backgroundSize: "contain",
    overflow: "hidden",
  },
})

class BlogPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false, like: false }
  }
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }
  like = () => {
    this.setState(state => ({ like: !state.like }))
  }
  render() {
    const {
      slug,
      avatar,
      author,
      classes,
      title,
      image,
      excerpt,
      date,
    } = this.props
    return (
      <Card className={classes.card}>
        <div className={classes.actions}>
          <CardHeader title={title}> </CardHeader>

          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </div>
        <Fade in={!this.state.expanded} unmountOnExit>
          <Link to={"/blog/" + slug}>
            <CardContent classes={{ root: classes.root }}>{image}</CardContent>
          </Link>
        </Fade>
        <Fade in={this.state.expanded} unmountOnExit>
          <div>
            <div className={classes.actions}>
              <CardHeader
                avatar={
                  <Tooltip title={"by " + author}>
                    <div className={classes.avatar}>{avatar}</div>
                  </Tooltip>
                }
                subheader={
                  <div>
                    Published on <br />
                    {date}
                  </div>
                }
              />
              <CardActions className={classes.actions} disableActionSpacing>
                <Tooltip title="Share">
                  <div>
                    <IconButton color="primary" aria-label="Share this">
                      <ShareIcon />
                    </IconButton>
                  </div>
                </Tooltip>

                <Tooltip
                  title={this.state.like ? "Remove Like" : "Like"}
                  placement="right"
                >
                  <IconButton aria-label="Add to favorites" onClick={this.like}>
                    <FavoriteIcon
                      style={this.state.like ? theme.palette.tertiary : {}}
                    />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </div>
            <CardContent>
              <Typography component="p">{excerpt} </Typography>
            </CardContent>
            <CardContent>
              <Link to={"/blog/" + slug}>
                <Button variant="contained" color="secondary">
                  Read on
                </Button>
              </Link>
            </CardContent>
          </div>
        </Fade>
      </Card>
    )
  }
}

BlogPreview.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BlogPreview)
