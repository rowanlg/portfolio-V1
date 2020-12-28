import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown} from "@fortawesome/free-solid-svg-icons"
import { device } from "../mediaquery"

import Box from "../../images/box3.png"

const HomePage = () => (
    <HomePageContainer>
      <CenterFlexContainer data-sal="fade">
        <BoxImage src={Box}  data-sal="fade" data-sal-duration="2000" data-sal-delay="0" data-sal-easing="ease" />
      </CenterFlexContainer>

      <HeroTextContainer>
        <h2 data-sal="fade" data-sal-duration="2000" data-sal-delay="100" data-sal-easing="ease">
          Create.
        </h2>
        <h2 data-sal="fade" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
          Design.
        </h2>
        <h2 data-sal="fade" data-sal-duration="2000" data-sal-delay="1000" data-sal-easing="ease">
          Develop.
        </h2>
        
          
        
      </HeroTextContainer>

      <ScrollIconContainer>
        <ScrollDownIcon icon={faChevronDown} />
      </ScrollIconContainer>

    </HomePageContainer>
)

const HomePageContainer = styled.div `
  background-color: #1f1717;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
`

const BoxImage = styled.img `
  width: 90%;
  display: inline;
  margin-top: -30%;
  
  @media ${device.mobileSmin} {
      width: 85%;
    }
  @media ${device.mobileMmin} {
      width: 80%;
      margin-top: -20%;
    }
  @media ${device.mobileLmin} {
      width: 22rem;
      margin-top: -10%;
    }
  @media ${device.laptopmin} {
      width: 28rem;
      margin-top: 0;
    }
  
`

const CenterFlexContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const HeroTextContainer = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  padding-right: 1rem;
  position: relative;
  margin-top: -105vh;
  
  height: 99vh;
  width: 97vw;

  h2 {
    font-family: 'Montserrat';
    color: #fff9f2;
    font-size: 3.1rem;
    text-align: right;
    z-index: 10;
    mix-blend-mode: difference;
    margin-bottom: 1rem;
    padding-right: 0.1rem;
    line-height: 0.5rem;
  
    @media ${device.tabletmin} {
      font-size: 4.3rem;
      line-height: 1rem;
    }
    @media ${device.laptopmin} {
      font-size: 6rem;
    }
  }
`

const ScrollDownIcon = styled(FontAwesomeIcon) `
  color: #fff9f2;
  font-size: 1.8rem;
  mix-blend-mode: difference;
  //margin-top: -1.5rem;
 `

const ScrollIconContainer = styled.div `
  justify-content: center;
  align-items: center;
  display: none;
  margin-top: -2rem;

  @media ${device.mobileXLmin} {
    width: 100vw;
    padding: 0;
    display: flex;
  }
 `


export default HomePage
