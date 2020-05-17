import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { StaticQuery, graphql } from "gatsby"
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
          <MuiThemeProvider theme={theme}>
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
                    Hi there, I am Rico - a self-taught full-stack-developer
                    from Berlin. I like problem solving. I like programming. I
                    like photography. And I am a passionate traveler.
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

            <style jsx>{`
              p {
                margin: 0;
                padding: 0;
              }
              .width {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
              }
              .column {
                flex-direction: column;
              }
              .headline {
                text-align: center;
              }
              .absolute :global(.muipaper) {
                display: flex;
                flex-direction: column;
                text-align: center;
                justify-content: center;
                align-items: center;
                margin-top: 2vh;
                padding: 5vh;
              }
              @media only screen and (min-width: 600px) {
                .absolute :global(.row) {
                  display: flex;
                  flex-direction: row;
                }
              }
            `}</style>
          </MuiThemeProvider>
        )
      }}
    />
  )
}
export default AboutMe
