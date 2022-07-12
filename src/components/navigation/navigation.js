import * as React from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import * as ui from './ui'

const Navigation = () => {
  const [isToggled, setIsToggled] = React.useState(false)
  const handleOnClick = () => setIsToggled(!isToggled)
  const { languages, originalPath, language } = useI18next()

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
            <Link to="/work/">Work</Link>
          </ui.ListItem>
          <ui.ListItem isToggled={isToggled}>
            <Link to="/blog/">Blog</Link>
          </ui.ListItem>
          <ui.ListItem isToggled={isToggled}>
            <Link to="/today-i-learned/">Today I learned</Link>
          </ui.ListItem>
          <ui.ListItem isToggled={isToggled}>
            <Link to="/about/">About</Link>
          </ui.ListItem>
          <ui.ListItem isToggled={isToggled}>
            <Link to="/contact/">Contact</Link>
          </ui.ListItem>
          <li>
            <ul className="flex gap-4 list-none m-0">
              <span className="hidden m-0 md:block">|</span>
              {languages.map((lng) => (
                <li
                  key={lng}
                  className={`${
                    lng === language ? 'font-bold' : 'font-normal'
                  } lang-link m-0`}
                >
                  <Link
                    to={originalPath}
                    language={lng}
                  >
                    {lng}
                  </Link>
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
