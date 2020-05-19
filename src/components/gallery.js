import React, { useEffect } from "react"
import Img from "gatsby-image"
import "../css/gallery.css"

const Gallery = ({ collapse, next, previous, index, max, imageData }) => {
  useEffect(() => {
    const handleKey = e => {
      if (e.key === "Escape") {
        collapse()
      }
      if (e.key === "ArrowRight" || e.key === "d") {
        next()
      }
      if (e.key === "ArrowLeft" || e.key === "a") {
        previous()
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("keydown", handleKey)
    }
  }, [collapse, next, previous])

  return (
    <div className="slideshow-container">
      <div className="collapse-button-container">
        <button onClick={collapse}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className={`gallery-button ${index === 0 ? " invisible" : ""}`}>
        <button onClick={previous}>
          <i className="fas fa-angle-double-left"></i>
        </button>
      </div>
      <Img
        className="gallery-image"
        imgStyle={{
          objectFit: "contain",
          margin: 0,
          padding: 0,
        }}
        fluid={imageData}
      />
      <div className={`gallery-button ${index === max ? " invisible" : ""}`}>
        <button onClick={next}>
          <i className="fas fa-angle-double-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Gallery
