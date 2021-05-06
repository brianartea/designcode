import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Tutorials from "../components/sections/Tutorials"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Courses" />
      <Tutorials />
    </Layout>
  )
}

export default IndexPage
