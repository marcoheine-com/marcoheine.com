import Link from 'next/link'
import * as React from 'react'

const CLASS_NAMES =
  'inline-block bg-primaryColorTwo py-3 px-4 text-white mt-6 text-white hover:bg-white hover:text-primaryColorTwo border-2 border-transparent hover:border-primaryColorTwo rounded-md transition-bg duration-100'

export const CallToAction = ({ children, isInternalLink = false, href }) => {
  return isInternalLink ? (
    <Link
      href={href}
      className={CLASS_NAMES}
    >
      {children}
    </Link>
  ) : (
    <a
      className={CLASS_NAMES}
      href={href}
    >
      {children}
    </a>
  )
}
