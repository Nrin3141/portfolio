import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../css/technologies.css"

const Technologies = () => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => {
        return (
          <div style={{ margin: "5vh 0", padding: "5vh", textAlign: "center" }}>
            <h2 style={{ margin: "2vh 0" }}>Tech and Tools </h2>
            <h4>(I use and love) </h4>
            <div className="icon-container">
              {data.allFile.edges.map((img, i) => (
                <div key={`technology-${i}`} className="size">
                  {!img.node.childImageSharp && img.node.extension === "svg" ? (
                    <img
                      className="small"
                      style={{
                        margin: 0,
                        objectPosition: "50% 50%",
                      }}
                      alt={img.node.name}
                      src={img.node.publicURL}
                    />
                  ) : (
                    <div className="small">
                      <Img
                        imgStyle={{
                          width: "100%",
                          height: "100%",
                          margin: 0,
                          objectFit: "contain",
                        }}
                        style={{ width: "100%", height: "100%" }}
                        placeholderClassName="small"
                        fluid={img.node.childImageSharp.fluid}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      }}
    />
  )
}

export default Technologies
