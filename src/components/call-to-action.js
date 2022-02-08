import { Link } from 'gatsby'
import * as React from 'react'

const CLASS_NAMES =
  'inline-block bg-primaryColorTwo py-3 px-4 text-white mt-6 hover:text-white hover:bg-linkHover'

export const CallToAction = ({ children, isInternalLink = false, href }) => {
  return isInternalLink ? (
    <Link to={href} className={CLASS_NAMES}>
      {children}
    </Link>
  ) : (
    <a className={CLASS_NAMES} href={href}>
      {children}
    </a>
  )
}
