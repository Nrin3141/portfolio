import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../css/technologies.css"

const Technologies = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <>
            <h2>Tech and Tools </h2>
            <h4>(I use and love) </h4>
            <div>
              {data.allFile.edges.map((img, i) => (
                <Img
                  key={`technology-${i}`}
                  fluid={img.node.childImageSharp.fluid}
                />
              ))}
            </div>
          </>
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
