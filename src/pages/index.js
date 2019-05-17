import Main from "../components/Main"
import React from "react"
import SEO from "../components/seo"
import withRoot from "../utils/withRoot"

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

export default withRoot(Home)
