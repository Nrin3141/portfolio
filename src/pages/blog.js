import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import Card from "../components/card"
import SEO from "../components/seo"
// import { MuiThemeProvider } from "@material-ui/core/styles"
// import { theme } from "../utils/getPageContext.js"
import withRoot from "../utils/withRoot"

const Home = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        addition="Rico's Blog"
        keywords={[`gatsby`, `application`, `react`]}
      />
      
      {/* <MuiThemeProvider theme={theme}>
        <h1>All the posts</h1>
        <h4>Total: {data.allGhostPost.totalCount}</h4>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.allGhostPost.edges.map(({ node }) => (
            <Card
              key={node.id}
              title={node.title}
              slug={node.slug}
              image={<img src={node.feature_image} alt="Jellyfish" />}
              avatar={
                <img
                  src={node.primary_author.profile_image}
                  alt="Author Avatar"
                  style={{ borderRadius: "50%" }}
                />
              }
              author={node.primary_author.name}
              excerpt={node.excerpt}
              date={node.published_at}
            />
          ))}
        </div> 
            </MuiThemeProvider> */}
      <style jsx>{`
        .root {
          font-weight: bold;
        }
      `}</style>
    </Layout>
  )
}

export default withRoot(Home)

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }

//     allGhostPost(sort: { fields: [published_at], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           title
//           id
//           slug
//           published_at(formatString: "dddd DD MMMM YYYY")
//           feature_image
//           primary_author {
//             name
//             profile_image
//           }
//           excerpt
//           tags {
//             id
//             name
//             slug
//           }
//         }
//       }
//     }
//   }
// `
