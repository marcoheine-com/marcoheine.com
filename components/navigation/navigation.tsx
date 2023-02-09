import Link from 'next/link'
import * as React from 'react'
import { useRouter } from 'next/router'

const NAV_SPAN_BASIC_STYLES =
  'absolute left-0 h-[3px] w-full rotate-0 bg-primaryColorTwo opacity-100 outline-0 transition-all ease-in-out origin-[left_center]'

const LI_BASIC_STYLES = 'uppercase text-[22px] lg:normal-case lg:mb-0'

const NAV_LINK_BASIC_STYLES =
  'text-primaryColorOne block py-2 px-4 hover:bg-primaryColorTwo hover:text-white'
const Navigation = () => {
  const [isToggled, setIsToggled] = React.useState(false)
  const handleOnClick = () => setIsToggled(!isToggled)
  const { locale, locales, asPath } = useRouter()

  return (
    <>
      <button
        className="absolute right-[5%] top-[26px] h-10 w-[35px] rotate-0 cursor-pointer border-0 bg-white outline-0 transition-all ease-in-out sm:top-[32px] lg:hidden"
        aria-label="toggle menu"
        onClick={handleOnClick}
      >
        <span
          className={`${NAV_SPAN_BASIC_STYLES} top-0 ${
            isToggled && 'left-0 rotate-45'
          }`}
        />
        <span
          className={`${NAV_SPAN_BASIC_STYLES} top-[10px] ${
            isToggled && 'w-0 translate-x-[-20px] opacity-0'
          }`}
        />
        <span
          className={`${NAV_SPAN_BASIC_STYLES} top-[20px] ${
            isToggled && 'top-[25px] -rotate-45'
          }`}
        />
      </button>

      <nav
        className={`max-h-0 self-center overflow-hidden text-center transition-all ease-out ${
          isToggled
            ? 'max-h-[600px] translate-y-[40px] opacity-100'
            : 'opacity-0'
        } lg:max-h-full lg:opacity-100`}
      >
        <ul className="ml-0 flex list-none flex-col items-center pb-10 lg:mb-0 lg:flex-row lg:pb-0">
          <li
            className={`${LI_BASIC_STYLES} ${isToggled && 'w-full lg:w-auto'}`}
          >
            <Link
              className={NAV_LINK_BASIC_STYLES}
              href="/work/"
            >
              Work
            </Link>
          </li>
          <li
            className={`${LI_BASIC_STYLES} ${isToggled && 'w-full lg:w-auto'}`}
          >
            <Link
              className={NAV_LINK_BASIC_STYLES}
              href="/blog/"
            >
              Blog
            </Link>
          </li>
          <li
            className={`${LI_BASIC_STYLES} ${isToggled && 'w-full lg:w-auto'}`}
          >
            <Link
              className={NAV_LINK_BASIC_STYLES}
              href="/today-i-learned/"
            >
              Today I learned
            </Link>
          </li>
          <li
            className={`${LI_BASIC_STYLES} ${isToggled && 'w-full lg:w-auto'}`}
          >
            <Link
              className={NAV_LINK_BASIC_STYLES}
              href="/about/"
            >
              About
            </Link>
          </li>
          <li
            className={`${LI_BASIC_STYLES} ${isToggled && 'w-full lg:w-auto'}`}
          >
            <Link
              className={NAV_LINK_BASIC_STYLES}
              href="/contact/"
            >
              Contact
            </Link>
          </li>
          <li>
            <ul className="m-0 flex list-none gap-4">
              <li className="m-0 hidden lg:block">|</li>
              {locales?.map((lng) => {
                return (
                  <li
                    key={lng}
                    className={`${
                      lng === locale ? 'font-bold' : 'font-normal'
                    } lang-link m-0`}
                  >
                    <Link
                      href={asPath}
                      locale={lng}
                    >
                      {lng}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
