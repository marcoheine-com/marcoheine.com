import React from 'react'
import * as ui from './ui'

interface MainProps {
  maxWidth?: string
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children, maxWidth = '960px' }) => (
  <ui.Main maxWidth={maxWidth}>{children}</ui.Main>
)

export default Main
