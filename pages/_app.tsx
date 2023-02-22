import '../styles/styles.css'
import '../styles/night-owl.min.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { MDXProvider } from '@mdx-js/react'
import { mdxcomponents } from 'components/MDXComponents'
import PlausibleProvider from 'next-plausible'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="marcoheine.com">
      <MDXProvider components={mdxcomponents}>
        <Script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        />
        <Component {...pageProps} />
      </MDXProvider>
    </PlausibleProvider>
  )
}

export default appWithTranslation(MyApp)
