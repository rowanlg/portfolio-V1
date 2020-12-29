import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../mediaquery"



import AsadoBarcaThumb from "../../images/asadobarca-thumbnail.jpg"

const PeoplePage = () => {
  return (
    <WorkPageContainer id="people">
      <ContentContainer>
        <h2>people</h2>
        <Testimonials>
          <Item  data-sal="flip-left" data-sal-duration="2000" data-sal-delay="0" data-sal-easing="ease">
            <p>Loved working with Rowan, he made every process as easy as it could be, and explained every step in a clear way. Will be working with him again for sure!</p>
            <h3>Lucien, Asado</h3>
          </Item>

{/* 
          <Item  data-sal="fade" data-sal-duration="2000" data-sal-delay="300" data-sal-easing="ease">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor elitr, sed diam nonumy eirmod tempor. </p>
            <h3>Sam, Bald Flavours</h3>
          </Item>
          
          <Break/>
          <Item>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor elitr, sed diam nonumy eirmod tempor. </p>
            <h3>Jane Doe</h3>
          </Item>

*/}
        </Testimonials>
      </ContentContainer>
    </WorkPageContainer>
  )
}

const Break = styled.div `
  flex-basis: 100%;
  height: 0;
`

const WorkPageContainer = styled.div `
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fedc01;

  @media (orientation: landscape) and (hover: none) and (pointer: coarse) {
    padding-bottom: 5rem;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: 'Montserrat';
    font-weight: bold;
    border-bottom: solid 8px #2F2323;
    font-size: 3rem;
    color: #2F2323;

    @media ${device.tabletmin} {
      font-size: 4rem;
    }
  }

  h3 {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 0.1rem;
    color: #2F2323;
  }

  p {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 1rem;
    color: #2F2323;
  }
`

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  max-width: 85%;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 18rem;
  margin: 2vw 10vw;
  flex-wrap: wrap;
`

const Thumbnail = styled.img`
  width: 15rem;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
`

const Testimonials = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -2rem;
`

export default PeoplePage


