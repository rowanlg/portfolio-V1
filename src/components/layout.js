/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"

const Layout = ({ children }) => {
  

  return (
    <Wrapper>
      <Global />
      <Header />
   
      <Content>{children}</Content>
      
    </Wrapper>
  )
}

const Global = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`

const Content = styled.main `
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  height: 100vh;
`

const Wrapper = styled.div `
  height: 100%;
  position: relative;
  overflow-x: hidden;
`

export default Layout
