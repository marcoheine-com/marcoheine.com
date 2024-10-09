import Link from 'next/link'
import * as React from 'react'
import { useRouter } from 'next/router'
import {
  HeaderDocument,
  HeaderDocumentDataNavigationItem,
} from '@/prismicio-types'
import { Language } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'

const NAV_SPAN_BASIC_STYLES =
  'absolute left-0 h-[3px] w-full rotate-0 bg-primaryColorTwo opacity-100 outline-0 transition-all ease-in-out origin-[left_center]'

const LI_BASIC_STYLES = 'text-[22px] lg:mb-0'

const NAV_LINK_BASIC_STYLES =
  'text-primaryColorOne block py-2 px-4 hover:bg-primaryColorTwo hover:text-white'

const Navigation = ({
  header,
  locales,
}: {
  header: HeaderDocument
  locales: Language[]
}) => {
  const [isToggled, setIsToggled] = React.useState(false)
  const handleOnClick = () => setIsToggled(!isToggled)
  const currentLocale = useRouter()

  const getLangLabel = (lang: string) => {
    switch (lang) {
      case 'en-us':
        return 'en'
      case 'de-de':
        return 'de'
      default:
        return 'de'
    }
  }

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
          {header.data.navigation.map(
            (item: HeaderDocumentDataNavigationItem) => (
              <li
                key={item.navigationlabel}
                className={`${LI_BASIC_STYLES} ${
                  isToggled ? 'w-full lg:w-auto' : ''
                }`}
              >
                <Link
                  className={NAV_LINK_BASIC_STYLES}
                  href={item.navigationitem.url}
                >
                  {item.navigationlabel}
                </Link>
              </li>
            )
          )}
          <li className="lg:ml-8">
            <ul className="m-0 flex list-none gap-2">
              {locales
                ?.sort((a, b) => (a.id > b.id ? 1 : -1))
                ?.map((locale: any) => (
                  <li
                    key={locale.id}
                    className={`${LI_BASIC_STYLES} ${
                      currentLocale.locale === locale.lang ? 'font-bold' : ''
                    }`}
                  >
                    <PrismicNextLink
                      href={locale.url}
                      locale={locale.lang}
                      className={`flex items-center justify-between py-3 text-primaryColorOne hover:text-primaryColorOne`}
                    >
                      {getLangLabel(locale.lang)}
                    </PrismicNextLink>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
