import React from 'react'
import * as ui from './ui'

const Button = ({ children, onClick }) => {
  return (
    <ui.Button
      onClick={onClick}
      type="button"
    >
      {children}
    </ui.Button>
  )
}

export default Button
