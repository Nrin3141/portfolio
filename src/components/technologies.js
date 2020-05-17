import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Technologies = ({ classes }) => {
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
                <div key={i} className="size">
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
            <style jsx>{`
              .icon-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
              }
              .size {
                height: 11vw;
                width: 11vw;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0.5vw;
              }
              .size > * {
                margin: 0;
              }
              .small {
                width: 10vw;
                height: 10vw;
              }
              .small:hover {
                width: 11vw;
                height: 11vw;
              }
              @media only screen and (max-width: 800px) {
                .size {
                  height: 30vw;
                  width: 30vw;
                }
                .small {
                  width: 25vw;
                  height: 25vw;
                }
                .small:hover {
                  width: 30vw;
                  height: 30vw;
                }
              }
            `}</style>
          </div>
        )
      }}
    />
  )
}

export default Technologies
