import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const ContactPage = () => {
  return (
    <div>
      <WorkPageContainer>
        <ContentContainer>
          <h2>contact</h2>
          
        </ContentContainer>
      </WorkPageContainer>
      <Footer>
          © {new Date().getFullYear()} - Designed and Developed by Rowan Gordon
        </Footer>
    </div>
  )
}

const WorkPageContainer = styled.div `
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2F2323;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: 'Montserrat';
    font-weight: bold;
    border-bottom: solid 8px #fff9f2;
    font-size: 4rem;
    color: #fff9f2;
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
    font-size: 1rem;
    color: #fff9f2;
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

const Footer = styled.footer `
  font-family: 'Montserrat';
  font-weight: bold;
  color: #fff9f2;
  z-index: 25;
  margin-top: -1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #2F2323;
  `

export default ContactPage


