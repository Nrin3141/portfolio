import React from "react"

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
          <div style={{ position: "relative" }}>
            <iframe
              src="https://trebeljahr.github.io/portfolio-banner/"
              width={this.state.w - 80}
              height={this.state.h * 0.7}
              scrolling="no"
              frameBorder="0"
              title="Develop your ideas interactive banner"
            />
          </div>
        )}
        <style jsx>{`
          .a {
            width: 100%;
            height: 30vh;
            background: rgb(51, 51, 51);
            color: rgb(249, 220, 92);
            overflow: hidden;
          }
          .fixed {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
export default IframeSketch
