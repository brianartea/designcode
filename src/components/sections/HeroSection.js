import React from "react"
import styled from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText, SmallText } from "../styles/TextStyles"
//import { Link } from "gatsby"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design
            <br /> and code React apps
          </Title>
          <Description>
            Don’t skip design. Learn design and
            <br /> code, by building real apps with React
            <br /> and Swift. Complete courses about the
            <br /> best tools.
          </Description>
          <PurchaseButton title="GET PRO ACCESS" subtitle="$19 per month" />
          <SubDescription>
            Purchase includes access to 30+ courses, 100+
            <br /> premium tutorials, 120+ hours of videos, source
            <br /> files and certificates.
          </SubDescription>
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 350px auto;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
`

const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
`

const SubDescription = styled(SmallText)`
  color: #fff;
`
