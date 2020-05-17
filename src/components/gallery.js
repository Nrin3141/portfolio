import React, { useState } from "react"
import Img from "gatsby-image"
import "../css/gallery.css"
import { useEffect } from "react"

const Gallery = ({ collapse, next, previous, index, maxIndex, imageData }) => {
  useEffect(() => {
    document.removeEventListener("keydown", handleKey)
    document.removeEventListener("touchstart", touchstart)
    document.removeEventListener("touchend", touchend)
    return () => {
      document.addEventListener("keydown", handleKey)
      document.addEventListener("touchstart", touchstart)
      document.addEventListener("touchend", touchend)
    }
  }, [])

  const [x, setX] = useState(0)
  const touchstart = e => {
    setX(e.targetTouches[0].clientX)
  }
  const touchend = e => {
    if (e.changedTouches[0].clientX - x > 60) {
      previous()
    } else if (e.changedTouches[0].clientX - x < -60) {
      next()
    }
    setX(0)
  }
  const handleCollapse = () => {
    collapse()
  }

  const handleKey = e => {
    if (e.key === "Escape") {
      handleCollapse()
    }
    if (
      e.key === "ArrowRight" ||
      e.key === "ArrowDown" ||
      e.key === "j" ||
      e.key === "l" ||
      e.key === "d"
    ) {
      next()
    }
    if (
      e.key === "ArrowLeft" ||
      e.key === "ArrowUp" ||
      e.key === "k" ||
      e.key === "h" ||
      e.key === "a"
    ) {
      previous()
    }
  }

  return (
    <div className="slideshow-container">
      <div
        className={
          "gallery-control-button-container button" +
          (index === 0 ? " cursor" : "")
        }
        onClick={previous}
      >
        <div
          className={
            "gallery-control-buttons fas fa-angle-double-left" +
            (index === 0 ? " hidden" : "")
          }
        />
      </div>
      <div className="img-container">
        <Img
          style={{
            maxHeight: "100vh",
            width: "100%",
            maxWidth: "100%",
            minWidth: "100%",
            margin: 0,
            padding: 0,
          }}
          imgStyle={{
            objectFit: "contain",
            margin: 0,
            padding: 0,
          }}
          fluid={imageData}
        />
        <div id="collapse-button-container">
          <div
            onClick={handleCollapse}
            className="handle-collapse button fas fa-times"
          />
        </div>
      </div>

      <div
        className={
          "gallery-control-button-container button" +
          (index === maxIndex ? " cursor" : "")
        }
        onClick={next}
      >
        <div
          className={
            "gallery-control-buttons fas fa-angle-double-right" +
            (index === maxIndex ? " hidden" : "")
          }
        />
      </div>
    </div>
  )
}

export default Gallery
