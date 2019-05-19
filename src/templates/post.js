import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.allGhostPost.edges[0].node
  return (
    <Layout>
      <div>
        <SEO
          title="Blog"
          addition={post.title}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <img src={post.feature_image} alt="Blog Post Banner" />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allGhostPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          id
          slug
          published_at(formatString: "dddd DD MMMM YYYY")
          feature_image
          primary_author {
            name
            profile_image
          }
          html
          tags {
            id
            name
            slug
          }
        }
      }
    }
  }
`
