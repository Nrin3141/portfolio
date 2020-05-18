import React from "react"

const BottomAppBar = () => {
  return (
    <div className="socials-bar">
      <div>
        <a href={"https://github.com/Nrin3141"} target="blank" rel="noopener">
          Github <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/ricotrebeljahr"
          target="blank"
          rel="noopener"
        >
          Linked
          <i className="fab fa-linkedin" style={{ color: "#4875B4" }} />
        </a>
      </div>
      <div>
        <a
          href="https://stackoverflow.com/story/ricotrebeljahr"
          target="blank"
          rel="noopener"
        >
          <i className="fab fa-stack-overflow" style={{ color: "#F48024" }} />{" "}
          Stackoverflow
        </a>
        <a href="https://codepen.io/Nrin/" target="blank" rel="noopener">
          Codepen{" "}
          <i
            className="fab fa-codepen"
            style={{ color: "rgb(100, 100, 100)" }}
          />
        </a>
      </div>
    </div>
  )
}

export default BottomAppBar
