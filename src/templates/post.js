import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import Avatar from "@material-ui/core/Avatar"

export default ({ data }) => {
  const post = data.post
  return (
    <Layout noSpacing={true}>
      <SEO
        title="Blog"
        addition={post.title}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <h1 style={{ marginTop: "20px" }}>{post.title}</h1>
      <h3 className="post-info">
        <Avatar
          src={post.primary_author.profile_image}
          style={{ display: "inline-block", marginRight: "10px" }}
        />
        by {post.primary_author.name} {` `}
        {post.published_at}
      </h3>
      <img src={post.feature_image} id="banner" alt="Blog Post Banner" />
      <div className="container">
        <Paper className="paper">
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Paper>
      </div>
      <style jsx>{`
        .container :global(.paper) {
          padding: 20px 20px;
          width: 100%;
          font-size: 1.25em;
          line-height: 1.5em;
        }
        #banner {
          margin: 0;
          padding: 0;
          width: 100% !important;
          max-width: 100% !important;
        }
        .container {
          margin-bottom: 40px;
        }
        .post-info {
          text-align: center;
          display: none;
        }
        h1,
        h2,
        h3 {
          text-align: center;
        }
        @media only screen and (min-width: 700px) {
          .container :global(.paper) {
            padding: 40px 60px;
            width: 70vw;
            margin-top: -150px;
            font-size: 100%;
          }
          .post-info {
            display: flex;
            align-items: center;
          }
        }
      `}</style>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: ghostPost(slug: { eq: $slug }) {
      title
      id
      slug
      published_at(formatString: "DD MMMM YYYY")
      feature_image
      html
      primary_author {
        name
        profile_image
      }
      excerpt
      tags {
        name
        slug
      }
    }
  }
`
