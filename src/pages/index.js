import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "@fontsource/montserrat/700.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomePage from "../components/pagecomponents/homepage"
import WorkPage from "../components/pagecomponents/workpage"
import AboutPage from "../components/pagecomponents/aboutpage"
import PeoplePage from "../components/pagecomponents/peoplepage"
import ContactPage from "../components/pagecomponents/contactpage"

import Box from "../images/box.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome :)" description="Rowan Gordon's Portfolio"/>
    
      <PageSnap>
        <HomePage />
      </PageSnap>
      
      <PageSnapStart>
        <WorkPage id="work" />
      </PageSnapStart>
      <PageSnapStart>
        <AboutPage id="about" />
      </PageSnapStart>
      <PageSnap>
        <PeoplePage id="people" />
      </PageSnap>
      <PageSnapEnd>
        <ContactPage id="contact" />
      </PageSnapEnd>
      

  </Layout>
)

const PageSnap = styled.div `
  -webkit-overflow-scrolling: touch;
  scroll-snap-align: center;
`

const PageSnapStart = styled.div `
  -webkit-overflow-scrolling: touch;
  scroll-snap-align: start;
`

const PageSnapEnd = styled.div `
  -webkit-overflow-scrolling: touch;
  scroll-snap-align: start;
`



export default IndexPage
