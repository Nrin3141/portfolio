import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import MobileMenu from "../components/menus/Mobile"

const NotFoundPage = () => (
  <Layout>
    <Header />
    <MobileMenu color="black" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
