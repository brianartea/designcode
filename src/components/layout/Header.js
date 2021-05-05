import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          <MenuButton item={item} key={index} />
        ))}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  max-width: 1234px;
  height: 44px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  padding: 60px 30px;
  z-index: 3;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
  position: absolute;

  -webkit-box-pack: justify;
  justify-content: flex-end;
  max-width: 1234px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  padding: 0px 30px;
  z-index: 3;

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`
