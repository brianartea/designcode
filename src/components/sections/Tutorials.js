import React from "react"
import styled, { keyframes } from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBgTutorials from "../backgrounds/WaveBgTutorials"
import HomeButton from "../buttons/HomeButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText, SmallText } from "../styles/TextStyles"
import { Link } from "gatsby"
import Header from "../layout/Header"

function Courses() {
  return (
    <Wrapper>
      <Header />
      <WaveBgTutorials />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Tutorials
            <br /> that show <span>design</span> and code
          </Title>
          <Description>
            Don’t skip design. Learn design and
            <br /> code, by building real apps with React
            <br /> and Swift. Complete courses about the
            <br /> best tools.
          </Description>
          <Link to="/">
            <HomeButton
              title="BACK TO HOMEPAGE"
              subtitle="Click back to the homepage"
            />
          </Link>
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

export default Courses

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 350px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`

const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
`

const SubDescription = styled(SmallText)`
  color: grey;
`
