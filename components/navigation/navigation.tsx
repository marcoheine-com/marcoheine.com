import Link from 'next/link'
import * as React from 'react'
import * as ui from './ui'
import { useTranslation } from 'next-i18next'

const Navigation = () => {
  const [isToggled, setIsToggled] = React.useState(false)
  const handleOnClick = () => setIsToggled(!isToggled)
  const { i18n } = useTranslation()

  return (
    <>
      <ui.NavIcon
        aria-label="toggle menu"
        onClick={handleOnClick}
      >
        <ui.NavIconSpan isToggled={isToggled} />
        <ui.NavIconSpan isToggled={isToggled} />
        <ui.NavIconSpan isToggled={isToggled} />
      </ui.NavIcon>

      <ui.Nav isToggled={isToggled}>
        <ui.List>
          <ui.ListItem isToggled={isToggled}>
            <Link href="/work/">Work</Link>
          </ui.ListItem>
          <ui.ListItem isToggled={isToggled}>
            <Link href="/blog/">Blog</Link>
          </ui.ListItem>
          <ui.ListItem isToggled={isToggled}>
            <Link href="/today-i-learned/">Today I learned</Link>
          </ui.ListItem>
          <ui.ListItem isToggled={isToggled}>
            <Link href="/about/">About</Link>
          </ui.ListItem>
          <ui.ListItem isToggled={isToggled}>
            <Link href="/contact/">Contact</Link>
          </ui.ListItem>
          <li>
            <ul className="m-0 flex list-none gap-4">
              <span className="m-0 hidden md:block">|</span>
              {i18n.languages.map((lng) => (
                <li
                  key={lng}
                  className={`${
                    lng === i18n.language ? 'font-bold' : 'font-normal'
                  } lang-link m-0`}
                >
                  <Link href={i18n.language}>{lng}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ui.List>
      </ui.Nav>
    </>
  )
}

export default Navigation
