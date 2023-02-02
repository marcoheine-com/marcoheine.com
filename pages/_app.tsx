import '../styles/styles.css'
import '../styles/night-owl.min.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { MDXProvider } from '@mdx-js/react'
import { CoffeeHint } from '../components/coffeehint'

const components = {
  CoffeeHint,
  pre: ({ children }) => <pre className="mb-12">{children}</pre>,
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default appWithTranslation(MyApp)
