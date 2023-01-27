import * as React from 'react'
import Header from './header'
import Footer from './footer'
import Main from './main'

const Layout = ({ children, maxWidth = '960px' }) => (
  <div className="flex min-h-screen flex-col">
    <hr className="sticky top-0 z-[2] border-t-[6px] border-t-primaryColorTwo" />
    <Header />
    {/* <Main maxWidth={maxWidth}>{children}</Main> */}
    <Footer />
  </div>
)
export default Layout
