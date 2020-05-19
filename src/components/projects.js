import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Projects = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className="projects-section">
            <h2>
              <i className="fas fa-code" /> past projects
            </h2>
            <div className="projects-container">
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
  tictactoe: "https://tic-tac-toe.ricotrebeljahr.de",
  chess: "https://chess.ricotrebeljahr.de",
  travel: "https://photodyssee.com",
  swantje: "https://swantjefurtak.com",
  amit: "https://brave-morse-b2bb17.netlify.app/",
  asteroids: "https://confident-aryabhata-d5dc3d.netlify.app/",
  "fractal-tree": "https://trebeljahr.github.io/fractal-tree/",
  "barnsley-fern": "https://trebeljahr.github.io/barnsley-fern/",
}

const SingleProject = ({ img, i }) => (
  <a href={ImageToLinkMap[img.node.name]} target="blank" className="project">
    <Img className="project-image" fluid={img.node.childImageSharp.fluid} />
    <div className="project-header-container">
      <h2 className="project-header">
        {["Curious?", "View Me!", "Check me out!", "Discover?"][i]}
      </h2>
    </div>
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
