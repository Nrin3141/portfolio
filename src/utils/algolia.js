const postQuery = `{
    posts: allGhostPost{
      edges {
        node {
          objectID: id
          title
          slug
          published_at(formatString: "dddd DD MMMM YYYY")
          tags {
            name
          }
          excerpt
        }
      }
}
}`

const flatten = arr =>
  arr.map(({ node: { ...rest } }) => ({
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

const query = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
]

module.exports = query
