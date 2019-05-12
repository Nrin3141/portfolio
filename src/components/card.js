import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { Link } from "gatsby"

const styles = theme => ({
  card: {
    maxWidth: 400,
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
})

const BlogPreview = ({
  slug,
  avatar,
  classes,
  title,
  image,
  excerpt,
  date,
}) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<div className={classes.avatar}>{avatar}</div>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <Link to={slug}>
        <CardContent>{image}</CardContent>
      </Link>
      <CardContent>
        <Typography component="p">{excerpt}</Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
BlogPreview.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BlogPreview)
