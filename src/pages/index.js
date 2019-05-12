import React from "react"
//import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Card from "../components/card"
import Image from "gatsby-image"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>{data.site.siteMetadata.title}</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
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
    site {
      siteMetadata {
        title
      }
    }

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
