import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Technologies = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className="technologies-container">
            <h2>Tech and Tools </h2>
            <h4>(I use and love) </h4>
            <div className="technology-image-container">
              {data.allFile.edges.map((img, i) => (
                <div className="technology">
                  <Img
                    key={`technology-${i}`}
                    className="technology-image"
                    fluid={img.node.childImageSharp.fluid}
                  />
                </div>
              ))}
            </div>
          </div>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
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
          name
          extension
          publicURL
        }
      }
    }
  }
`

export default Technologies
