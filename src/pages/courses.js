import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Courses from "../components/sections/Courses"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Courses" />
      <Courses />
    </Layout>
  )
}

export default IndexPage
