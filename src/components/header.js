import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
  return (
    <HeaderContainer>
      <a href=""><MenuIconClosed icon={faChevronLeft} /></a>
    </HeaderContainer>
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
  font-size: 2rem;
  color: #fff9f2;

  :hover {
    font-size: 2.5rem;
  }
`

export default Header
