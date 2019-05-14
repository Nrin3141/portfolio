import React from "react"
import Paper from "@material-ui/core/Paper"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const styles = {
  white: {
    width: "80%",
    margin: 10,
    padding: 20,
    textAlign: "center",
  },
}
const Projects = ({ classes }) => {
  return (
    return (  <Paper className={classes.white}>
        <h2>
          <i className="fas fa-code" /> Projects
        </h2>
        <div className="icon-container">
          <a className="size" href="https://chess.ricotrebeljahr.de" target="blank">
            <div className="tile large" id="chess" />
            <div className="absolute">
              <h2>Curious?</h2>
            </div>
          </a>
          <a
            className="size"
            href="https://tic-tac-toe.ricotrebeljahr.de"
            target="blank"
          >
            <div className="tile large" id="tictactoe" />
            <div className="absolute">
              <h2>View me!</h2>
            </div>
          </a>
          <a
            className="size"
            href="https://nrin3141.github.io/Snake-2.0/"
            target="blank"
          >
            <div className="tile large" id="snake" />
            <div className="absolute">
              <h2>Check me out!</h2>
            </div>
          </a>
          <a className="size" href="https://photodyssee.com" target="blank">
            <div className="tile large" id="img" />
            <div className="absolute">
              <h2>Take a look!</h2>
            </div>
          </a>
        </div>
        <style jsx>{`
          h2 {
            text-align: center;
          }
          .icon-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          .tile {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
          a {
            text-decoration: none;
            color: black;
          }
          .absolute {
            display: none;
          }
          .size:hover > .absolute {
            background: rgb(20, 20, 20);
            color: white;
            display: flex;
            justify-content: center;
            width: 100%;
            margin: 0;
            position: absolute;
            text-align: center;
          }
          .size {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 80vw;
            width: 80vw;
            padding: 0;
            margin: 5px;
          }
          .size:hover {
            background-color: black;
          }
          .large {
            width: 80vw;
            height: 80vw;
          }
          .size:hover > .large {
            width: 80vw;
            height: 80vw;
            opacity: 0.7;
          }
          @media only screen and (min-width: 400px) {
            .size {
              height: 34vw;
              width: 34vw;
            }
            .large {
              width: 32vw;
              height: 32vw;
            }
            .size:hover > .large {
              width: 34vw;
              height: 34vw;
            }
          }
          @media only screen and (min-width: 1000px) {
            .large {
              width: 15vw;
              height: 15vw;
            }
            .size {
              height: 16vw;
              width: 16vw;
            }
            .size:hover > .large {
              width: 16vw;
              height: 16vw;
            }
          }
          #img {
            background-image: url("/static/images/profile.jpg");
          }
          #chess {
            background-image: url("/static/images/chess.png");
          }
          #tictactoe {
            background-image: url("/static/images/tictactoe.png");
          }
          #snake {
            background-image: url("/static/images/snake.png");
          }
        `}</style>
      </Paper>)
  )
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Projects)
