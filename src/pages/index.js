import Main from "../components/main"
import React from "react"
import SEO from "../components/seo"

const Home = ({ classes }) => (
  <div>
    <SEO
      title="Home"
      addition="Rico's Page"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Main />
  </div>
)

export default Home
