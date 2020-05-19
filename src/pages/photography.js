import React, { useState } from "react"
import Gallery from "../components/gallery"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import { Navigation } from "../components/layout"
import MobileMenu from "../components/menus/Mobile"
import "../css/photography.css"

const Photography = ({ data }) => {
  let imgs = data.allFile.big
  const [gallery, setGallery] = useState(false)
  const [index, setIndex] = useState(0)
  const next = () => {
    setIndex(old => (old + 1 > imgs.length - 1 ? old : old + 1))
  }
  const previous = () => {
    setIndex(old => (old - 1 < 0 ? old : old - 1))
  }
  const collapse = () => {
    setGallery(false)
    setIndex(0)
  }
  const handleClick = i => {
    if (window.innerWidth < 800) {
      return
    }
    setGallery(true)
    setIndex(i)
  }
  return (
    <>
      <Header />
      <MobileMenu color="white" />
      <Navigation />
      {gallery ? (
        <Gallery
          index={index}
          max={imgs.length - 1}
          next={next}
          previous={previous}
          collapse={collapse}
          imageData={
            imgs[index < imgs.length ? index : imgs.length - 1].node.img.fluid
          }
        />
      ) : (
        <div className="masonry">
          {data.allFile.small.map((e, i) => (
            <button className="item" key={i} onClick={() => handleClick(i)}>
              <Img
                style={{ width: "100%", height: "100%" }}
                fluid={e.node.img.fluid}
              />
            </button>
          ))}
        </div>
      )}
    </>
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
