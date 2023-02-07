import '../styles/styles.css'
import '../styles/night-owl.min.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { MDXProvider } from '@mdx-js/react'
import { mdxcomponents } from 'components/MDXComponents'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={mdxcomponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default appWithTranslation(MyApp)
