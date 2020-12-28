import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../mediaquery"

import "@fontsource/montserrat"

const ContactPage = () => {
  return (
    <div>
      <WorkPageContainer id="contact">
        <ContentContainer>
          <h2>contact</h2>

          <Form name="contact" method="POST" data-netlify="true" >

            <input type="hidden" name="form-name" value="contact" />
   
            <input type="text" name="name" placeholder="Your name..." 
            data-sal="fade" data-sal-duration="2000" data-sal-delay="0" data-sal-easing="ease"
            />  

            <input type="email" name="email" placeholder="Your email address..." 
            data-sal="fade" data-sal-duration="2000" data-sal-delay="200" data-sal-easing="ease"
            />

            <textarea name="message" placeholder="Say hi!"
            data-sal="fade" data-sal-duration="2000" data-sal-delay="400" data-sal-easing="ease"
            ></textarea>

            <button type="submit"
            data-sal="fade" data-sal-duration="2000" data-sal-delay="600" data-sal-easing="ease"
            >Send</button>

          </Form>

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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #04bf7f;
  
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

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

const Form = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  textarea {
    height: 8rem;
  }
  
  input, textarea {
    margin: 0.5rem;
    width: 80%;
    border-radius: 5px;
    padding: 5px;
    border: none;
    font-family: 'Montserrat';
    background-color: #fff9f2;
    //box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.56);

    @media ${device.mobileXLmin} {
      width: 32rem;
    }
  }

  button {
    margin: 0.5rem;
    width: 5rem;
    border-radius: 5px;
    padding: 5px;
    border: none;
    font-family: 'Montserrat';
    background-color: #fedc01;
    //box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.56);
  }
  
`

const Footer = styled.footer `
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 0.5rem;
  color: #fff9f2;
  z-index: 25;
  margin-top: -1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${device.tabletmin} {
      font-size: 1rem;
    }
  `

export default ContactPage


