import Link from 'next/link'
import * as React from 'react'
import Navigation from '../navigation'
import config from '../../config'

const Header = () => {
  return (
    <header className="transition-all duration-200 ease-in-out hover:shadow-header">
      <div className="mx-auto flex max-w-4xl flex-col justify-between pt-8 md:flex-row">
        <span className="my-5 inline-block text-[20px] ">
          <Link
            href="/"
            className="text-primaryColorTwo no-underline hover:border-b-0"
          >
            {config.author}
            <span className="animate-blink">_</span>
          </Link>
        </span>

        <Navigation />
      </div>
    </header>
  )
}

export default Header
