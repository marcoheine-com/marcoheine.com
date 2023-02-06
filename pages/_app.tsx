import '../styles/styles.css'
import '../styles/night-owl.min.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { MDXProvider } from '@mdx-js/react'
import { CoffeeHint } from '../components/coffeehint'
import Link from 'next/link'

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
      className="outgoing-link-trigger hover:border-b-4 hover:border-dotted hover:border-b-primaryColorTwo"
      {...props}
    >
      {props.children} <span> &#8599;</span>
    </a>
  )
}

const components = {
  CoffeeHint,
  pre: ({ children }) => <pre className="mb-12">{children}</pre>,
  a: CustomLink,
  hr: () => <hr className="my-10" />,
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default appWithTranslation(MyApp)
