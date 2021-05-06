import React from "react"
import styled from "styled-components"

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      {/* <Animation src="/images/animations/squares7.svg" /> */}
      <Wave
        src="/images/waves/course-wave1.svg"
        style={{ top: "100px", filter: "blur(60px)" }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "350px" }} />
      <BottomWave src="/images/waves/hero-wave3.svg" style={{ top: "550px" }} />
    </Wrapper>
  )
}

// const animateSquare = keyframes`
//     0% {
//       opacity: 0;
//       transform: rotate(180deg);
//     }
//     50% {
//       transform: rotate(0deg);
//       opacity: 0.5;
//     }
//     100% {
//       transform: rotate(180deg);
//       opacity: 0;
//     }
// `

const Wrapper = styled.div`
  position: relative;
`

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`

const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url("/images/waves/hero-wave3-dark.svg");
  }
`

const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`

// const Animation = styled.img`
//   animation: ${animateSquare} 5s infinite;
//   position: absolute;
//   width: 1000px;
//   height: 1000px;
//   top: -130px;
//   left: -100px;
//   opacity: 0.5;

//   @media (min-width: 1920px) {
//     display: none;
//   }
//   @media (min-width: 1591px) {
//     display: contents;
//   }
//   @media (max-width: 1401px) {
//     display: none;
//   }
// `
