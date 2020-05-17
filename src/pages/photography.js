import React, { useState } from "react"
import Gallery from "../components/gallery"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "../css/photography.css"

const Photography = () => {
  const [gallery, setGallery] = useState(true)
  const [index, setIndex] = useState(0)

  nextImage = () => {
    setIndex(old => old + 1)
  }
  previousImage = () => {
    setIndex(old => old - 1)
  }
  collapse = () => {
    setGallery(false)
    setIndex(0)
  }
  handleClick = i => {
    setGallery(true)
    setIndex(i)
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              relativeDirectory: { eq: "images/gallery" }
            }
          ) {
            big: edges {
              node {
                img: childImageSharp {
                  fluid(maxWidth: 4000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            small: edges {
              node {
                img: childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        let imgs = data.allFile.big
        return (
          <Layout
            disableMenu={gallery}
            noSpacing={gallery}
          >
            <SEO
              title="Home"
              addition="Rico's Photography"
              keywords={[`gatsby`, `application`, `react`]}
            />
            {gallery ? (
              <Gallery
                index={index}
                maxIndex={imgs.length - 1}
                nextImage={this.nextImage}
                previousImage={this.previousImage}
                collapse={this.collapse}
                imageData={
                  imgs[
                    index < imgs.length
                      ? index
                      : imgs.length - 1
                  ].node.img.fluid
                }
              />
            ) : (
              <div className="masonry">
                {data.allFile.small.map((e, i) => (
                  <div
                    className="itemnder()this.handleClick(i)}
                  >
                    <Img
                      style={{ width: "100%", height: "100%" }}
                      fluid={e.node.img.fluid}
                    />
                  </div>
                ))}
              </div>
            )}
          </Layout>
        )
      }}
    />
  )
}

export default Photography
