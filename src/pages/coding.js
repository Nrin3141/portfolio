import React from "react"
import Layout from "../components/Layout"
import Developer from "../components/Developer"

const Coding = () => (
  <Layout>
    <Developer />
    <style jsx>{`
      div {
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
    `}</style>
  </Layout>
)

export default Coding
