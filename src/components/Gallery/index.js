import React from "react"
import Img from "gatsby-image"

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
            }}
            imgStyle={{
              objectFit: "contain",
            }}
            fluid={imageData}
            critical
            fadeIn={false}
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

        <style jsx>{`
          p {
            text-align: center;
          }
          .hidden {
            visibility: hidden;
          }
          .handle-collapse {
            border-radius: 50%;
            width: 2em;
            height: 2em;
            line-height: 2em;
          }
          .button {
            cursor: pointer;
            background: black;
            border: none;
            color: white;
            text-align: center;
          }
          .cursor {
            cursor: default !important;
          }
          .handle-collapse:hover {
            background: grey;
          }
          .gallery-control-button-container {
            display: flex;
            align-items: center;
            justify-content: center;
            background: black;
            padding: 0;
          }
          .gallery-control-buttons {
            line-height: 2em;
            font-size: 2em;
            width: 3em;
            height: 2em;
            border-radius: 50%;
            margin: 5%;
          }
          .gallery-control-button-container:hover > div {
            background: grey;
          }
          .slideshow-container {
            display: grid;
            grid-template-columns: 1fr 15fr 1fr;
            background: white;
            width: 100vw;
            height: 100vh;
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 5% 0 5%;
          }
          @media (pointer: coarse) {
            .gallery-control-buttons {
              display: none;
            }
            .slideshow-container {
              grid-template-columns: 1fr;
              width: 100%;
              height: 100vh;
            }
            #collapse-button-container {
              right: 0;
              justify-content: flex-end;
            }
          }

          #collapse-button-container {
            position: absolute;
            top: 1%;
            width: 100;
            display: flex;
            justify-content: center;
          }
          .img-container {
            position: relative;
            background: black;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .large {
            max-height: 100%;
            max-width: 100%;
          }
        `}</style>
      </div>
    )
  }
}
