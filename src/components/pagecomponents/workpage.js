import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import AsadoBarcaThumb from "../../images/asadobarca-thumbnail.jpg"

const WorkPage = () => {
  return (
    <WorkPageContainer id="work">
      <ContentContainer>
        <h2>work</h2>
        <ItemsContainer>

          <Item>
            <Thumbnail src={AsadoBarcaThumb} />
            <h3>Asado Barcelona</h3>
            <p>Asado restaurant situated in Barcelona. Static website, using GatsbyJS, with Sass and Bulma.</p>
          </Item>

          <Item>
            <Thumbnail src={AsadoBarcaThumb} />
            <h3>Asado Barcelona</h3>
            <p>Asado restaurant situated in Barcelona. Static website, using GatsbyJS, with Sass and Bulma.</p>
          </Item>

          <Item>
            <Thumbnail src={AsadoBarcaThumb} />
            <h3>Asado Barcelona</h3>
            <p>Asado restaurant situated in Barcelona. Static website, using GatsbyJS, with Sass and Bulma.</p>
          </Item>
          
          <Item>
            <Thumbnail src={AsadoBarcaThumb} />
            <h3>Asado Barcelona</h3>
            <p>Asado restaurant situated in Barcelona. Static website, using GatsbyJS, with Sass and Bulma.</p>
          </Item>
          
          <Item>
            <Thumbnail src={AsadoBarcaThumb} />
            <h3>Asado Barcelona</h3>
            <p>Asado restaurant situated in Barcelona. Static website, using GatsbyJS, with Sass and Bulma.</p>
          </Item>
          
          <Item>
            <Thumbnail src={AsadoBarcaThumb} />
            <h3>Asado Barcelona</h3>
            <p>Asado restaurant situated in Barcelona. Static website, using GatsbyJS, with Sass and Bulma.</p>
          </Item>
          
        </ItemsContainer>
      </ContentContainer>
    </WorkPageContainer>
  )
}

const WorkPageContainer = styled.div `
  min-height: 100vh;
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
  padding-top: 10%;
  padding-bottom: 10%;

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

  max-width: 80rem;
  
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
  box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.56);
`

export default WorkPage


