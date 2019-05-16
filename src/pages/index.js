import Main from "../components/Main"
import React from "react"
import SEO from "../components/seo"
import withStyles from "@material-ui/styles/withStyles"
import PropTypes from "prop-types"

const styles = {
  red: {},
}
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
Home.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Home)
