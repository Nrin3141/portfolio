import React, { Component } from "react"

class IframeSketch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      w: 0,
      h: 0,
      resizeTaskId: null,
    }
  }
  componentDidMount = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight,
    })

    window.addEventListener("resize", () => {
      if (this.state.resizeTaskId !== null) {
        clearTimeout(this.state.resizeTaskId)
      }
      this.setState({
        resizeTaskId: setTimeout(this.resize, 1000),
      })
    })
  }
  componentWillUnmount = () => {
    clearTimeout(this.state.resizeTaskId)
  }
  resize = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight,
      resizeTaskId: null,
    })
  }
  render() {
    return (
      <div>
        {this.state.w < 500 ? (
          <div className="a">
            <div className="fixed">
              <h2>Develop your ideas</h2>
            </div>
          </div>
        ) : (
          <iframe
            src="https://nrin3141.github.io/portfolio-banner/"
            width={this.state.w}
            height={this.state.h / 2}
            scrolling="no"
            frameBorder="0"
          />
        )}
        <style jsx>{`
          .a {
            width: 100%;
            height: 30vh;
            background: rgb(51, 51, 51);
            color: rgb(249, 220, 92);
            overflow: hidden;
          }
          iframe {
            position: fixed;
            z-index: 0;
            overflow: hidden;
          }
          .fixed {
            position: fixed;
            display: flex;
            width: 100%;
            height: 30vh;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}
export default IframeSketch
