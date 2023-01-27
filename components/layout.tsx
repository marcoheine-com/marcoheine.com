import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import Main from './main'
import GlobalStylesheet from './GlobalStylesheet'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const HorizontalLine = styled.hr`
  border-top: 6px solid ${({ theme }) => theme.primaryColorTwo};
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 2;
`

const Layout = ({ children, maxWidth = '960px' }) => (
  <Page>
    <GlobalStylesheet />
    <HorizontalLine />
    <Header />
    <Main maxWidth={maxWidth}>{children}</Main>
    <Footer />
  </Page>
)
export default Layout
