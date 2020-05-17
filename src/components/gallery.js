import React from "react"
import Img from "gatsby-image"
import "../css/gallery.css"

export default class Gallery extends React.Component {
  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKey)
    document.removeEventListener("touchstart", this.touchstart)
    document.removeEventListener("touchend", this.touchend)
  }
  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKey)
    document.addEventListener("touchstart", this.touchstart)
    document.addEventListener("touchend", this.touchend)
  }

  x = 0
  touchstart = e => {
    this.x = e.targetTouches[0].clientX
    document.addEventListener("touchmove", this.touchmove)
  }
  touchmove = e => {}
  touchend = e => {
    if (e.changedTouches[0].clientX - this.x > 60) {
      this.previousImage()
    } else if (e.changedTouches[0].clientX - this.x < -60) {
      this.nextImage()
    }
    this.x = 0
  }
  nextImage = () => {
    if (this.props.index < this.props.maxIndex) {
      this.props.nextImage()
    }
  }
  previousImage = () => {
    if (this.props.index > 0) {
      this.props.previousImage()
    }
  }
  handleCollapse = () => {
    this.props.collapse()
  }

  handleKey = e => {
    if (e.key === "Escape") {
      this.handleCollapse()
    }
    if (
      e.key === "ArrowRight" ||
      e.key === "ArrowDown" ||
      e.key === "j" ||
      e.key === "l" ||
      e.key === "d"
    ) {
      this.nextImage()
    }
    if (
      e.key === "ArrowLeft" ||
      e.key === "ArrowUp" ||
      e.key === "k" ||
      e.key === "h" ||
      e.key === "a"
    ) {
      this.previousImage()
    }
  }

  render() {
    let { imageData, index, maxIndex } = this.props
    return (
      <div className="slideshow-container">
        <div
          className={
            "gallery-control-button-container button" +
            (index === 0 ? " cursor" : "")
          }
          onClick={this.previousImage}
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
              onClick={this.handleCollapse}
              className="handle-collapse button fas fa-times"
            />
          </div>
        </div>

        <div
          className={
            "gallery-control-button-container button" +
            (index === maxIndex ? " cursor" : "")
          }
          onClick={this.nextImage}
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
}
