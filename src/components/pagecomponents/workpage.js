import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import AsadoBarcaThumb from "../../images/asadobarca-thumbnail.jpg"

const WorkPage = () => {
  return (
    <WorkPageContainer>
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
  height: 100vh;
  scroll-snap-align: start;
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

export default WorkPage


