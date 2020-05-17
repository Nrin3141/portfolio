import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../css/projects.css"

const Projects = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              relativeDirectory: { eq: "images/projects" }
            }
          ) {
            edges {
              node {
                name
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div>
            <h2 style={{ paddingTop: "5vh" }}>
              <i className="fas fa-code" /> Projects
            </h2>
            <div className="icon-container">
              {data.allFile.edges.map((img, i) => (
                <a
                  key={i}
                  href={
                    img.node.name === "snake"
                      ? "https://trebeljahr.github.io/Snake-2.0/"
                      : img.node.name === "tictactoe"
                      ? "https://tic-tac-toe.ricotrebeljahr.de"
                      : img.node.name === "chess"
                      ? "https://chess.ricotrebeljahr.de"
                      : "https://photodyssee.com"
                  }
                  target="blank"
                  className="imgContainer"
                >
                  <Img
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    fluid={img.node.childImageSharp.fluid}
                  />
                  <div className="absolute shadow" />
                  <div className="absolute">
                    <h2 className="banner">
                      {
                        ["Curious?", "View Me!", "Check me out!", "Discover?"][
                          i
                        ]
                      }
                    </h2>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )
      }}
    />
  )
}

export default Projects
