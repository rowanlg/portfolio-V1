import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomePage from "../components/pagecomponents/homepage"
import WorkPage from "../components/pagecomponents/workpage"

import Box from "../images/box.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome :)" description="Rowan Gordon's Portfolio"/>

    <Wrapper>
      <HomePage />
      <WorkPage />
    </Wrapper>

  </Layout>
)

const Wrapper = styled.div `
  overflow: scroll;
  height: 100%;
  scroll-snap-type: y mandatory;

  div {
    scroll-snap-align: end;
  }
`


export default IndexPage
