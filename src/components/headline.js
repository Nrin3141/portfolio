import React from "react"
const Headline = ({ text, secondText, parallax }) => (
  <div className={"container " + (parallax ? "absolute" : "top-margin")}>
    <div>
      <div className="caption">{text}</div>
    </div>
    <div className="white">
      <h1>{secondText}</h1>
    </div>
    <style jsx>{`
      .top-margin {
        margin-top: 4%;
      }
      .white {
        width: 100%;
        background: white;
      }
      h1 {
        color: seagreen;
        opacity: 0.65;
      }
      .absolute {
        position: absolute;
        left: 0;
        top: 30%;
        margin: 0%;
      }
      .container {
        flex-direction: column;
        width: 100%;
        color: #000;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .caption {
        background-color: #111;
        color: #fff;
        padding: 18px;
        font-size: 25px;
        letter-spacing: 10px;
      }
    `}</style>
  </div>
)
export default Headline
