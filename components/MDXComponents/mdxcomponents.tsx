import { CoffeeHint } from 'components/coffeehint'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

const CustomLink = (props) => {
  const isInternalLink =
    props.href && (props.href.startsWith('/') || props.href.startsWith('#'))
  if (isInternalLink) {
    return (
      <Link
        href={props.href}
        {...props}
        className="hover:border-b-2 hover:border-dotted hover:border-b-primaryColorTwo"
      >
        {props.children}
      </Link>
    )
  }
  return (
    <a
      target={'_blank'}
      rel={'noopener noreferrer'}
      className="outgoing-link-trigger break-all border-b-4 border-b-transparent hover:border-dotted hover:border-b-primaryColorTwo"
      {...props}
    >
      {props.children} <span> &#8599;</span>
    </a>
  )
}

export const mdxcomponents = {
  CoffeeHint: CoffeeHint,
  pre: ({ children }) => <pre className="mb-12">{children}</pre>,
  a: CustomLink,
  hr: () => <hr className="my-10" />,
  Image: (props) => (
    <Image
      src={props.src}
      alt={props.alt}
      sizes="(max-width: 600px) 100vw, 600px"
    />
  ),
}
