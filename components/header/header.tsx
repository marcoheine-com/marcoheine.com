import Link from 'next/link'
import React from 'react'
import Navigation from '../navigation'
import config from '../../config'
import * as ui from './ui'

const Header = () => {
  return (
    <ui.HeaderWrapper>
      <ui.Header>
        <ui.Headline>
          <Link href="/">
            {config.author}
            <ui.Blink>_</ui.Blink>
          </Link>
        </ui.Headline>

        <Navigation />
      </ui.Header>
    </ui.HeaderWrapper>
  )
}

export default Header
