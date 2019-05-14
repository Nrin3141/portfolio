import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import AboutMe from "../components/AboutMe"
import Technologies from "../components/Technologies"
import IframeSketch from "../components/IframeSketch"
import SEO from "../components/seo"

const Coding = () => (
  <Layout>
    <SEO
      title="Home"
      addition="Portfolio"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <IframeSketch />
    <AboutMe />
    <Projects />
    <Technologies />
  </Layout>
)

export default Coding
