import React from "react"
//import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"
import Image from "gatsby-image"

import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <h1>Amazing Pandas Eating Things</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
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
            excerpt={node.excerpt}
            date={node.frontmatter.date}
          />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM, YYYY")
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
