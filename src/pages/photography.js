import React from "react"
import Gallery from "../components/Gallery"
import Layout from "../components/Layout"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

class Photography extends React.Component {
  constructor(props) {
    super(props)
    this.state = { gallery: false, index: 0 }
  }
  nextImage = () => {
    this.setState(state => ({ index: this.state.index + 1 }))
  }
  previousImage = () => {
    this.setState(state => ({ index: this.state.index - 1 }))
  }
  collapse = () => {
    this.setState({ gallery: false, index: 0 })
  }
  handleClick = i => {
    this.setState({ gallery: true, index: i })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allFile(
              filter: {
                extension: { regex: "/(jpg)|(jpeg)|(png)/" }
                relativeDirectory: { eq: "images/gallery" }
              }
            ) {
              big: edges {
                node {
                  img: childImageSharp {
                    fluid(maxWidth: 4000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              small: edges {
                node {
                  img: childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          let imgs = data.allFile.big
          return (
            <Layout
              disableMenu={this.state.gallery}
              noSpacing={this.state.gallery}
            >
              <SEO
                title="Home"
                addition="Rico's Photography"
                keywords={[`gatsby`, `application`, `react`]}
              />
              {this.state.gallery ? (
                <Gallery
                  index={this.state.index}
                  maxIndex={imgs.length - 1}
                  nextImage={this.nextImage}
                  previousImage={this.previousImage}
                  collapse={this.collapse}
                  imageData={
                    imgs[
                      this.state.index < imgs.length
                        ? this.state.index
                        : imgs.length - 1
                    ].node.img.fluid
                  }
                />
              ) : (
                <div className="masonry">
                  {data.allFile.small.map((e, i) => (
                    <div
                      className="item"
                      key={i}
                      onClick={() => this.handleClick(i)}
                    >
                      <Img
                        style={{ width: "100%", height: "100%" }}
                        fluid={e.node.img.fluid}
                      />
                    </div>
                  ))}
                </div>
              )}
              <style jsx>{`
                .masonry {
                  column-count: 1;
                  column-gap: 0.5em;
                }
                @media only screen and (min-width: 400px) {
                  .masonry {
                    column-count: 2;
                  }
                }
                @media only screen and (min-width: 800px) {
                  .masonry {
                    column-count: 3;
                  }
                }
                @media only screen and (min-width: 1600px) {
                  .masonry {
                    column-count: 4;
                  }
                }
                .item {
                  display: inline-block;
                  background-color: #eee;
                  margin: 0 0 0.5em;
                  width: 100%;
                  cursor: pointer;
                }
              `}</style>
            </Layout>
          )
        }}
      />
    )
  }
}

export default Photography
