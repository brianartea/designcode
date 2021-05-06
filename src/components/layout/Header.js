import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuTooltip from "../tooltips/MenuTooltip"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  function handleClick(e) {
    setIsOpen(!isOpen)
    e.preventDefault()
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      console.log("Thanks for checkin out the website!")
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Wrapper>
      <Link to="/">
        <img
          src="/images/logos/logo.svg"
          alt="Logo"
          // style={{ cursor: "pointer" }}
        />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton item={item} key={index} onClick={e => handleClick(e)} />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
            onClick={e => handleClick(e)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  /* position: fixed; */
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  max-width: 1234px;
  height: 44px;
  left: 0px;
  right: 0px;

  margin: 0px auto;
  padding: 60px 30px;
  z-index: 5;

  img > svg {
    /* background: url("/images/logos/logo.svg"); */
    width: 44px;
    height: 44px;
    z-index: 999;
  }

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
  /* background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  border-radius: 30px; */

  -webkit-box-pack: justify;
  justify-content: flex-end;
  align-items: center;
  max-width: 1234px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  padding: 10px 30px;
  z-index: -1;

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
