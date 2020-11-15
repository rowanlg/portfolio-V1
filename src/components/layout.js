/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header />
   
        <main>{children}</main>

        <Footer>
          © {new Date().getFullYear()} - Designed and Developed by Rowan Gordon
        </Footer>
      
    </Wrapper>
  )
}

const Wrapper = styled.div `
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
`

const Footer = styled.footer `
  font-family: 'Montserrat';
  font-weight: bold;
  color: #2F2323;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`


export default Layout
