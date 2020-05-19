import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../css/projects.css"

const Projects = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div>
            <h2>
              <i className="fas fa-code" /> past projects
            </h2>
            <div className="icon-container">
              {data.allFile.edges.map((img, i) => (
                <SingleProject img={img} i={i} />
              ))}
            </div>
          </div>
        )
      }}
    />
  )
}

const ImageToLinkMap = {
  snake: "https://trebeljahr.github.io/Snake-2.0/",
  tictactoe: "https://tic-tac-toe.ricotrebeljahr.de",
  chess: "https://chess.ricotrebeljahr.de",
  traveler: "https://photodyssee.com",
}

const SingleProject = ({ img, i }) => (
  <a href={ImageToLinkMap[img.node.name]} target="blank">
    <Img fluid={img.node.childImageSharp.fluid} />
    <h2 className="banner">
      {["Curious?", "View Me!", "Check me out!", "Discover?"][i]}
    </h2>
  </a>
)
const query = graphql`
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
`

export default Projects
