import * as React from 'react'
import Header from './header'
import Footer from './footer'
import Main from './main'

interface LayoutProps {
  children: React.ReactNode
  maxWidth?: 'max-w-full' | 'max-w-4xl' | 'max-w-[1400px]' | 'max-w-[1920px]'
}

const Layout: React.FC<LayoutProps> = ({
  children,
  maxWidth = 'max-w-4xl',
}) => (
  <div className="flex min-h-screen flex-col">
    <hr className="sticky top-0 z-[2] mb-0 border-t-[6px] border-t-primaryColorTwo" />
    <Header />
    <Main maxWidth={maxWidth}>{children}</Main>
    <Footer />
  </div>
)
export default Layout
