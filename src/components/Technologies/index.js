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
const Technologies = ({ classes }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)|(svg)/" }
              relativeDirectory: { eq: "images/technologies" }
            }
          ) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
                extension
                publicURL
              }
            }
          }
        }
      `}
      render={data => {
        console.log(data)
        return (
          <Paper className={classes.white}>
            <h2>Technologies I use and love: </h2>
            <div className="icon-container">
              {data.allFile.edges.map((img, i) => (
                <div>
                  <Img fluid={img.node.childImageSharp.fluid} />
                </div>
              ))}
              <div className="size">
                <div className="tile small" id="html" />
              </div>
              <div className="size">
                <div className="tile small" id="css" />
              </div>
              <div className="size">
                <div className="tile small" id="js" />
              </div>
              <div className="size">
                <div className="tile small" id="meteor" />
              </div>
              <div className="size">
                <div className="tile small" id="react" />
              </div>
              <div className="size">
                <div className="tile small" id="node" />
              </div>
              <div className="size">
                <div className="tile small" id="graphql" />
              </div>
              <div className="size">
                <div className="tile small" id="mongo" />
              </div>
              <div className="size">
                <div className="tile small" id="bash" />
              </div>
              <div className="size">
                <div className="tile small" id="material" />
              </div>
              <div className="size">
                <div className="tile small" id="next" />
              </div>
              <div className="size">
                <div className="tile small" id="p5" />
              </div>
              <div className="size">
                <div className="tile small" id="atom" />
              </div>
            </div>

            <style jsx>{`
              .icon-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
              }
              .tile {
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
              }

              .size {
                height: 10vw;
                width: 10vw;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .small {
                width: 8vw;
                height: 8vw;
              }
              .small:hover {
                width: 10vw;
                height: 10vw;
              }
              @media only screen and (max-width: 800px) {
                .size {
                  height: 22vw;
                  width: 22vw;
                }
                .small {
                  width: 15vw;
                  height: 15vw;
                }
                .small:hover {
                  width: 22vw;
                  height: 22vw;
                }
              }
              #material {
                background-image: url("/static/images/material.png");
              }
              #atom {
                background-image: url("/static/images/atom.png");
              }
              #html {
                background-image: url("/static/images/html5.svg");
              }
              #bash {
                background-image: url("/static/images/bash.png");
              }
              #p5 {
                background-image: url("/static/images/p5js.png");
              }
              #next {
                background-image: url("/static/images/nextjs.png");
              }
              #css {
                background-image: url("/static/images/css3.svg");
              }
              #js {
                background-image: url("/static/images/javascript.png");
              }
              #meteor {
                background-image: url("/static/images/meteor-text.svg");
              }
              #mongo {
                background-image: url("/static/images/mongo.svg");
              }
              #graphql {
                background-image: url("/static/images/graphql.svg");
              }
              #node {
                background-image: url("/static/images/node.svg");
              }
              #react {
                background-image: url("/static/images/react.svg");
              }
            `}</style>
          </Paper>
        )
      }}
    />
  )
}
Technologies.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Technologies)
