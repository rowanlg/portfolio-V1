import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { device } from "./mediaquery"

import SidebarBg from "../images/sidebar-bg.jpg"


const Header = () => {

  const [nav, showNav] = useState(false)

  return (
    <div>
      <HeaderContainer>
        <MenuButtonOpen>
          <MenuIconClosed nav={nav} icon={faChevronLeft} onClick={() => showNav(!nav)} />
        </MenuButtonOpen>
      </HeaderContainer>

      <SidebarContainer nav={nav}>
        <Wrapper>
          <LinkWrapper>
            <MenuLinks>
              <ul>
                <li><Link to="/#work" onClick={() => showNav(false)}>work</Link></li>
                <li><Link to="/#about" onClick={() => showNav(false)}>about</Link></li>
                <li><Link to="/#people" onClick={() => showNav(false)}>people</Link></li>
                <li><Link to="/#contact" onClick={() => showNav(false)}>contact</Link></li>
              </ul>
            </MenuLinks>
          </LinkWrapper>
        </Wrapper>
      </SidebarContainer>
    </div>
    
  )
}

const HeaderContainer = styled.div `
  position: absolute;
  height: 6rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  right: 0;
  left: 0;
  

  h2 {
    font-family: 'Montserrat';
    font-size: 2rem;
    color: #fff9f2;
  }
`
const MenuIconClosed = styled(FontAwesomeIcon) `
  font-size: 1.8rem;
  position: relative;
  z-index: 20;
  mix-blend-mode: ${({nav}) => nav ? 'none' : 'difference'};

  transition: transform 300ms;
  transform: ${({nav}) => nav ? 'rotate(180deg)' : 'rotate(0)'};
  color: ${({nav}) => nav ? '#2F2323' : '#fff9f2'};

  :hover {
    @media ${device.laptopmin} {
      font-size: 2.5rem;
    }
    
  }
`

const SidebarContainer = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  height: 100%;
  width: 100vw;
  background-image: url(${SidebarBg});
  background-repeat: no-repeat;
  background-size: 100vw;
  background-position: right top;

  box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.56);
  
  transition: transform 300ms;
  transform: ${({ nav }) => nav ? "translateX(0)" : "translateX(100%)" };

  @media ${device.tabletmin} {
    background-size: 41.5rem;
    width: 41.5rem;
  }

`

const Wrapper = styled.div `
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

const LinkWrapper = styled.div `
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`

const MenuLinks = styled.nav` 
margin-top: 1rem;
margin-left: -1rem;

  ul {
    list-style-type: none;
  }
  li {
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
    color: #2F2323;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1.6rem;
  }
`

const ButtonContainer = styled.div`
  position: absolute;
  height: 6rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  right: 0;
  left: 0;

`
const MenuButtonOpen = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  
`

const MenuButtonClose = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  z-index: 5;
  outline: none;
`

const MenuIconOpen = styled(FontAwesomeIcon) `
  font-size: 2rem;
  color: #2F2323;
  position: relative;

  :hover {
    font-size: 2.5rem;
  }
`

export default Header

