import React, { useState, useEffect } from "react"
import MobileMenu from "../components/menus/Mobile"
import { graphql } from "gatsby"
import Header from "../components/header"
import "../css/main.css"
import "../css/section.css"
import Typed from "react-typed"
import "react-typed/dist/animatedCursor.css"
import Img from "gatsby-image"

const sections = [
  { text: "Programmer", link: "/coding", imgPath: "programmer" },
  { text: "Photographer", link: "/photography", imgPath: "photographer" },
  { text: "Traveler", link: "https://photodyssee.com", imgPath: "traveler" },
]

const computeSources = (active, data) => {
  const img = data.images.edges.find(
    ({ node }) => node.name === sections[active].imgPath
  )
  const sources = [
    img.node.small.fluid,
    { ...img.node.medium.fluid, media: "(min-width: 700px)" },
    { ...img.node.large.fluid, media: "(min-width: 1800px)" },
    { ...img.node.full.fluid, media: "(min-width: 3000px)" },
  ]
  return sources
}
const Main = ({ data }) => {
  const [active, setActive] = useState(2)
  const nextSection = () => {
    setActive(old => old + 1)
  }
  return (
    <div className="section-container">
      <Header />
      <MobileMenu color="white" display={true} />
      {sections.map((_, index) => (
        <Img
          key={"section-img" + index}
          className={
            active % sections.length === index
              ? "section-image "
              : "hidden-section"
          }
          fluid={computeSources(index, data)}
        />
      ))}
      <div className="section-container">
        <div className="section-header">
          <h1>
            I am a{" "}
            <Typed
              strings={sections.map(section => section.text)}
              typeSpeed={70}
              backSpeed={50}
              backDelay={1000}
              preStringTyped={nextSection}
              loop
              smartBackspace={false}
            />
          </h1>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    images: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "images/banners" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          name
          small: childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
          medium: childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
          large: childImageSharp {
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(maxWidth: 4000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Main
