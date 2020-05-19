import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
          <div className="about-me-container">
            <h2>... together with me</h2>
            <Img
              className="circular about-me-image"
              fluid={data.file.img.fluid}
            />
            <div>
              <p>
                You want to develop your own website? Or a Web app? Mobile game?
                Something in the app store? Online Shop? Blog? Let me turn your
                next project into something remarkable.
              </p>
            </div>
            <Link to="/contact">Get in touch</Link>
          </div>
        )
      }}
    />
  )
}
export default AboutMe
