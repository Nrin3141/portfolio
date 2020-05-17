import React, { useState } from "react"
import Gallery from "../components/gallery"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "../css/photography.css"

const Photography = ({ data }) => {
  const [gallery, setGallery] = useState(true)
  const [index, setIndex] = useState(0)

  const nextImage = () => {
    setIndex(old => old + 1)
  }
  const previousImage = () => {
    setIndex(old => old - 1)
  }
  const collapse = () => {
    setGallery(false)
    setIndex(0)
  }
  const handleClick = i => {
    setGallery(true)
    setIndex(i)
  }
  let imgs = data.allFile.big
  return (
    <Layout disableMenu={gallery} noSpacing={gallery}>
      <SEO
        title="Home"
        addition="Rico's Photography"
        keywords={[`gatsby`, `application`, `react`]}
      />
      {gallery ? (
        <Gallery
          index={index}
          maxIndex={imgs.length - 1}
          nextImage={nextImage}
          previousImage={previousImage}
          collapse={collapse}
          imageData={
            imgs[index < imgs.length ? index : imgs.length - 1].node.img.fluid
          }
        />
      ) : (
        <div className="masonry">
          {data.allFile.small.map((e, i) => (
            <div className="item" key={i} onClick={() => handleClick(i)}>
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
}

export const query = graphql`
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
`

export default Photography
