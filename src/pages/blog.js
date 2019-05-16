import React from "react"
//import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Card from "../components/card"
import Image from "gatsby-image"
import SEO from "../components/seo"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { theme } from "../utils/getPageContext.js"
import withStyles from "@material-ui/styles/withStyles"

const styles = theme => ({
    root: {
      fontWeight: "bold",
    },
  }),
  Home = ({ data }) => {
    return (
      <Layout>
        <SEO
          title="Home"
          addition="Rico's Blog"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <MuiThemeProvider theme={theme}>
          <h1>All the posts</h1>
          <h4>Total: {data.allMarkdownRemark.totalCount}</h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Card
                key={node.id}
                title={node.frontmatter.title}
                slug={node.frontmatter.slug}
                image={
                  <Image
                    fluid={node.frontmatter.hero.childImageSharp.fluid}
                    alt="Jellyfish"
                  />
                }
                avatar={
                  <Image
                    fluid={node.frontmatter.avatar.childImageSharp.fluid}
                    alt="Author Avatar"
                    style={{ borderRadius: "50%" }}
                  />
                }
                author={node.frontmatter.author}
                excerpt={node.excerpt}
                date={node.frontmatter.date}
              />
            ))}
          </div>
        </MuiThemeProvider>
      </Layout>
    )
  }

export default withStyles(styles)(Home)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM, YYYY")
            author
            hero {
              childImageSharp {
                fluid(maxWidth: 970) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            avatar {
              childImageSharp {
                fluid(maxWidth: 970) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
