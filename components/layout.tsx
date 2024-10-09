import * as React from 'react'
import Header from './header'
import Footer from './footer'
import Main from './main'
import { FooterDocument, HeaderDocument } from '@/prismicio-types'
import { Language } from '@prismicio/client'

interface LayoutProps {
  children: React.ReactNode
  maxWidth?: 'max-w-full' | 'max-w-4xl' | 'max-w-[1400px]' | 'max-w-[1920px]'
  header: HeaderDocument
  locales: Language[]
  footer: FooterDocument
}

const Layout: React.FC<LayoutProps> = ({
  header,
  locales,
  children,
  maxWidth = 'max-w-4xl',
  footer,
}) => (
  <div className="flex min-h-screen flex-col">
    <hr className="sticky top-0 z-[2] mb-0 border-t-[6px] border-t-primaryColorTwo" />
    <Header
      header={header}
      locales={locales}
    />
    <Main maxWidth={maxWidth}>{children}</Main>
    <Footer footer={footer} />
  </div>
)
export default Layout
