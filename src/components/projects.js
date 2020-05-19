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
            <h2 className="projects-header">
              <i className="fas fa-code" /> past projects
            </h2>
            <div className="projects-container">
              {data.allFile.edges.map((img, i) => (
                <SingleProject key={`project-${i}`} img={img} />
              ))}
            </div>
          </div>
        )
      }}
    />
  )
}

const imageMap = {
  tictactoe: {
    href: "https://tic-tac-toe.ricotrebeljahr.de",
    text: "a game of tic tac toe",
  },
  chess: { href: "https://chess.ricotrebeljahr.de", text: "a game of chess" },
  travel: { href: "https://photodyssee.com", text: "a travel blog" },
  swantje: {
    href: "https://swantjefurtak.com",
    text: "a site for a filmmaker",
  },
  amit: {
    href: "https://brave-morse-b2bb17.netlify.app/",
    text: "a portfolio for a copywriter",
  },
  asteroids: {
    href: "https://confident-aryabhata-d5dc3d.netlify.app/",
    text: "a game in space",
  },
  "fractal-tree": {
    href: "https://trebeljahr.github.io/fractal-tree/",
    text: "a fractal tree",
  },
  "barnsley-fern": {
    href: "https://trebeljahr.github.io/barnsley-fern/",
    text: "a barnsley fern",
  },
}

const SingleProject = ({ img }) => (
  <a href={imageMap[img.node.name].href} target="blank" className="project">
    <Img className="project-image" fluid={img.node.childImageSharp.fluid} />
    <div className="project-header-container">
      <h2 className="project-header">{imageMap[img.node.name].text}</h2>
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
