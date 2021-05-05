import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Purchase from "../components/sections/Purchase"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Purchase" />
      <Purchase />
    </Layout>
  )
}

export default IndexPage
