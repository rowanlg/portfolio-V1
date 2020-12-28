import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../mediaquery"

import AsadoBarcaThumb from "../../images/asadobarca-thumbnail.jpg"

const AboutPage = () => {
  return (
    <WorkPageContainer id="about">
      <ContentContainer>
        <h2>about</h2>
        <p data-sal="fade" data-sal-duration="2000" data-sal-delay="300" data-sal-easing="ease">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor elitr, sed diam nonumy eirmod tempor. 
          <br/><br/> Lorem ipsum dolor sit amet, consetetur.
          <br/><br/> Lorem ipsum.</p>
      </ContentContainer>
    </WorkPageContainer>
  )
}

const WorkPageContainer = styled.div `
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff8686;
  
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  

  h2 {
    font-family: 'Montserrat';
    font-weight: bold;
    border-bottom: solid 8px #fff9f2;
    font-size: 3rem;
    color: #fff9f2;

    @media ${device.tabletmin} {
      font-size: 4rem;
    }
  }

  h3 {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 0.1rem;
    color: #fff9f2;
  }

  p {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 1.3rem;
    color: #fff9f2;
    text-align: center;

    @media ${device.tabletmin} {
      font-size: 2rem;
    }
  }
`

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  max-width: 80%;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  margin: 2rem;
`

const Thumbnail = styled.img`
  width: 15rem;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
`

export default AboutPage


