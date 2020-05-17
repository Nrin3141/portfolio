import React from "react"
import "../css/headline.css"

const Headline = ({ text, secondText, parallax }) => (
  <div className={"container " + (parallax ? "absolute" : "top-margin")}>
    <div>
      <div className="caption">{text}</div>
    </div>
    <div className="white">
      <h1>{secondText}</h1>
    </div>
  </div>
)
export default Headline
