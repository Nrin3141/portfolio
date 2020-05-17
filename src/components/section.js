import React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../css/section.css"

const Section = ({ headline, href, images, counter }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(
          filter: {
            extension: { regex: "/(jpg)|(jpeg)|(png)/" }
            relativeDirectory: { eq: "images/banners" }
          }
          sort: { fields: name, order: ASC }
        ) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 970) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div>
          <div className="absolute">
            <div>
              <h2 style={{ marginLeft: "0.4em" }}>I am a</h2>
              <h2 style={{ marginLeft: "0.4em" }} className="muiheadline">
                {headline} <div className="blinking-dash" />
              </h2>
            </div>
            {href !== "https://photodyssee.com" ? (
              <Button
                variant="contained"
                color="secondary"
                className="muibutton"
              >
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to={href}
                >
                  See for yourself!
                </Link>
              </Button>
            ) : (
              <Button
                href={href}
                variant="contained"
                color="secondary"
                className="muibutton"
              >
                See for yourself!
              </Button>
            )}
          </div>
          <Img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              opacity: 0.8,
            }}
            fluid={
              data.allFile.edges[
                counter === 0 &&
                typeof window !== "undefined" &&
                window.innerWidth < 500
                  ? 3
                  : counter
              ].node.childImageSharp.fluid
            }
          />
        </div>
      )
    }}
  />
)

export default Section
