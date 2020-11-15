import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons"

import Box from "../../images/box.png"

const HomePage = () => (
    <HomePageContainer>
      <CenterFlexContainer>
        <img src={Box} />
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
        <ScrollDownIcon icon={faAngleDoubleDown} />
      </ScrollIconContainer>

    </HomePageContainer>
)


const HomePageContainer = styled.div `
  padding-top: 8rem;
  background-color: #000000;
  height: 100%;
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
  }
`

const ScrollDownIcon = styled(FontAwesomeIcon) `
  color: #fff9f2;
  font-size: 4rem;
`

const ScrollIconContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10rem;
  padding-bottom: 4rem;
`

export default HomePage
