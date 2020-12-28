import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../mediaquery"



import AsadoBarcaThumb from "../../images/asadobarca-thumbnail.jpg"
import AsadoBristolThumb from "../../images/asadobristol-thumbnail.jpg"
import PortfolioThumb from "../../images/portfolio-thumbnail.jpg"

const WorkPage = () => {
  return (
    <WorkPageContainer id="work">
      <ContentContainer>
        <h2>work</h2>
        <ItemsContainer>

          <Item data-sal="fade" data-sal-duration="2000" data-sal-delay="0" data-sal-easing="ease">
            <Thumbnail src={AsadoBarcaThumb} />
            <h3>Asado Barcelona</h3>
            <p>Asado restaurant situated in Barcelona. A static site, using GatsbyJS, with Sass and Bulma.</p>
            <a href="http://asadobarcelona.com/" target="_blank"><ButtonYellow type="submit">Visit Site</ButtonYellow></a>
          </Item>

          <Item data-sal="fade" data-sal-duration="2000" data-sal-delay="100" data-sal-easing="ease">
            <Thumbnail src={AsadoBristolThumb} />
            <h3>Asado Bristol</h3>
            <p>Original Asado restaurant situated in Bristol, UK. A static site, using GatsbyJS, with Sass and Bulma.</p>
            <a href="http://asadobristol.com/" target="_blank"><ButtonPink type="submit">Visit Site</ButtonPink></a>
          </Item>

          <Item data-sal="fade" data-sal-duration="2000" data-sal-delay="200" data-sal-easing="ease">
            <Thumbnail src={PortfolioThumb} />
            <h3>This Website</h3>
            <p>And of course, I created this website as well. A static site, using GatsbyJS, with styled-components.</p>
            <a href="http://rowangordon.co.uk/" target="_blank"><ButtonGreen type="submit">Visit Site</ButtonGreen></a>
          </Item>

          {/* 
          <Item data-sal="fade" data-sal-duration="2000" data-sal-delay="300" data-sal-easing="ease">
            <Thumbnail src={AsadoBarcaThumb} />
            <h3>Asado Barcelona</h3>
            <p>Asado restaurant situated in Barcelona. Static website, using GatsbyJS, with Sass and Bulma.</p>
            <a href="http://asadobarcelona.com/" target="_blank"><ButtonPink type="submit">Visit Site</ButtonPink></a>
          </Item>
          
          <Item data-sal="fade" data-sal-duration="2000" data-sal-delay="400" data-sal-easing="ease">
            <Thumbnail src={AsadoBarcaThumb} />
            <h3>Asado Barcelona</h3>
            <p>Asado restaurant situated in Barcelona. Static website, using GatsbyJS, with Sass and Bulma.</p>
            <a href="http://asadobarcelona.com/" target="_blank"><ButtonGreen type="submit">Visit Site</ButtonGreen></a>
          </Item>
          
          <Item data-sal="fade" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
            <Thumbnail src={AsadoBarcaThumb} />
            <h3>Asado Barcelona</h3>
            <p>Asado restaurant situated in Barcelona. Static website, using GatsbyJS, with Sass and Bulma.</p>
            <a href="http://asadobarcelona.com/" target="_blank"><ButtonYellow type="submit">Visit Site</ButtonYellow></a>
          </Item>
      */}    
        </ItemsContainer>
      </ContentContainer>
    </WorkPageContainer>
  )
}

const WorkPageContainer = styled.div `
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff9f2;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;

  @media ${device.mobileXLmin} {
    padding-top: 5%;
    padding-bottom: 5%;
  }
  //padding-top: 10%;
  //padding-bottom: 10%;

  h2 {
    font-family: 'Montserrat';
    font-weight: bold;
    border-bottom: solid 8px #2F2323;
    font-size: 4rem;
    color: #2F2323;
  }

  h3 {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 1.5rem;
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

  max-width: 75rem;
  padding-bottom: 5rem;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  margin: 2rem;
`

const ButtonYellow = styled.button `
  margin: 0.5rem;
    width: 5rem;
    border-radius: 5px;
    padding: 5px;
    border: none;
    font-family: 'Montserrat';
    background-color: #fedc01;
    cursor: pointer;
`

const ButtonPink = styled.button `
  margin: 0.5rem;
    width: 5rem;
    border-radius: 5px;
    padding: 5px;
    border: none;
    font-family: 'Montserrat';
    background-color: #ff8686;
    cursor: pointer;
`

const ButtonGreen = styled.button `
  margin: 0.5rem;
    width: 5rem;
    border-radius: 5px;
    padding: 5px;
    border: none;
    font-family: 'Montserrat';
    background-color: #04bf7f;
    cursor: pointer;
`

const Thumbnail = styled.img`
  width: 15rem;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.56);
`

export default WorkPage


