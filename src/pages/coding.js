import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import AboutMe from "../components/about"
import Technologies from "../components/technologies"
import Sketch from "../components/sketch"
import Header from "../components/header"

const Coding = () => (
  <Layout>
    <Header />
    <Sketch />
    <AboutMe />
    <Projects />
    <Technologies />
  </Layout>
)

export default Coding
