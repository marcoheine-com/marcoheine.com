import '../styles/styles.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { MDXProvider } from '@mdx-js/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default appWithTranslation(MyApp)
