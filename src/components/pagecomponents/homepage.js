import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown} from "@fortawesome/free-solid-svg-icons"


import Box from "../../images/box3.png"

const HomePage = () => (
    <HomePageContainer>
      <CenterFlexContainer>
        <BoxImage src={Box} />
      </CenterFlexContainer>

      <HeroTextContainer>
        <h2>
          Create.
          <br/>
          Design.
          <br/>
          Develop.
        </h2>
      </HeroTextContainer>
      
      <ScrollIconContainer>
        <ScrollDownIcon icon={faChevronDown} />
      </ScrollIconContainer>

    </HomePageContainer>
)


const HomePageContainer = styled.div `
  padding-top: 8rem;
  background-color: #000000;
  height: 100%;
`

const BoxImage = styled.img `
  width: 30.2rem;
`

const CenterFlexContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`

const HeroTextContainer = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;
  margin-top: -15rem;

  h2 {
    font-family: 'Montserrat';
    color: #fff9f2;
    font-size: 7rem;
    text-align: right;
    z-index: 10;
    mix-blend-mode: difference;
  }
`

const ScrollDownIcon = styled(FontAwesomeIcon) `
  color: #fff9f2;
  font-size: 3rem;
`

const ScrollIconContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -8rem;
  padding-bottom: 2.8rem;
`

export default HomePage
