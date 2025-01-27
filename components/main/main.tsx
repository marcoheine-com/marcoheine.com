import React from 'react'

interface MainProps {
  maxWidth?: string
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children, maxWidth = '960px' }) => (
  <main
    className={`mx-auto flex w-full grow flex-col items-center px-5 pt-16 pb-40 ${
      maxWidth ? maxWidth : 'max-w-4xl'
    }`}
  >
    {children}
  </main>
)

export default Main
