import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { H1, MediumText } from "../components/styles/TextStyles"
import { themes } from "../components/styles/ColorStyles"
import styled from "styled-components"

function SecondPage() {
  return (
    <Layout>
      <SEO title="Page two" />
      <Title>Purchase Page</Title>
      <Description>
        Welcome to purchase page by clicking the purchase button
      </Description>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

const Title = styled(H1)`
  color: ${themes.dark.text1};
  margin-bottom: 20px;
`

const Description = styled(MediumText)`
  color: ${themes.dark.text2};
  margin-bottom: 20px;
`
