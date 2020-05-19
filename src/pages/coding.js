import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import AboutMe from "../components/about"
import Technologies from "../components/technologies"
import Sketch from "../components/sketch"
import Header from "../components/header"
import MobileMenu from "../components/menus/Mobile"

const Coding = () => (
  <Layout>
    <Header />
    <MobileMenu color="white" />
    <Sketch />
    <AboutMe />
    <Projects />
    <Technologies />
  </Layout>
)

export default Coding
