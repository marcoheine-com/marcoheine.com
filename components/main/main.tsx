import React from 'react'

interface MainProps {
  maxWidth?: string
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children, maxWidth = '960px' }) => (
  <main
    className={`mx-auto w-full grow px-5 pt-16 pb-40 ${
      maxWidth ? maxWidth : 'max-w-4xl'
    }`}
  >
    {children}
  </main>
)

export default Main
