import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../css/about.css"

const AboutMe = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "images/rico.jpg" }) {
            img: childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div className="absolute">
            <div className="row">
              <Img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  margin: "5vh",
                }}
                fluid={data.file.img.fluid}
              />
              <div className="width column">
                <h2 className="headline">About Me</h2>
                <p>
                  Hi there, I am Rico - a self-taught full-stack-developer from
                  Berlin. I like problem solving. I like programming. I like
                  photography. And I am a passionate traveler.
                </p>
              </div>
            </div>
            <div className="column">
              <h2>How can I help you?</h2>
              <p>
                Do you want to have your own website too? Or a Web app? Mobile
                game? Online Shop? Blog?! Or do you have an amazing idea but
                lack the technical skills to actually do it? Don't hesitate to
                ask.
              </p>
              <Link to="/contact">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: "5vh" }}
                >
                  Get in touch
                </Button>
              </Link>
              <p>
                Or are you in search of a full-stack developer to expand your
                team? Somebody who can easily learn and integrate new
                technologies and loves to expand his expertise constantly?
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}
export default AboutMe
