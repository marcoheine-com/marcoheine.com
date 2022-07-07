import React from 'react'
import PropTypes from 'prop-types'
import * as ui from './ui'

const Main = ({ children, maxWidth = '960px' }) => (
  <ui.Main maxWidth={maxWidth}>{children}</ui.Main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string.isRequired,
}

export default Main
