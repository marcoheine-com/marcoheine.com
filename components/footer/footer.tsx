import * as React from 'react'
import {
  FooterDocument,
  FooterDocumentDataNavigationItem,
} from '@/prismicio-types'
import { PrismicRichText } from '@prismicio/react'
import { getIcon } from './getIcon'
import { PrismicNextLink } from '@prismicio/next'
import { CustomLink } from '../customlink'

const LI_STYLES_BASIC = 'inline border-b-0 pr-5'

const Footer = ({ footer }: { footer: FooterDocument }) => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer bg-primaryColorTwo py-8 text-center text-[14px] text-white">
      <a
        href="#"
        className="mb-8 text-white hover:border-b-2 hover:border-dotted hover:border-b-white hover:text-white"
      >
        {footer?.data.linktotop}
      </a>
      <nav>
        <ul className="mt-8 flex list-none justify-center gap-4">
          {footer?.data.navigation.map(
            (item: FooterDocumentDataNavigationItem, index: number) => {
              return (
                <li
                  key={index}
                  className={LI_STYLES_BASIC}
                >
                  <PrismicNextLink field={item.link}>
                    {getIcon(item.icon)}
                  </PrismicNextLink>
                </li>
              )
            }
          )}
        </ul>
      </nav>

      <PrismicRichText
        field={footer?.data.content}
        components={{
          hyperlink: ({ children, node }) => {
            return (
              <CustomLink
                className="text-white"
                color="white"
                href={node.data.url}
              >
                {children}
              </CustomLink>
            )
          },
        }}
      />
    </footer>
  )
}

export default Footer
