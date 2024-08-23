import '../styles/styles.css'
import '../styles/night-owl.min.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { MDXProvider } from '@mdx-js/react'
import { mdxcomponents } from 'components/MDXComponents'
import PlausibleProvider from 'next-plausible'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="marcoheine.com">
      <MDXProvider components={mdxcomponents}>
        <Component {...pageProps} />
        <PrismicPreview repositoryName={repositoryName} />
      </MDXProvider>
    </PlausibleProvider>
  )
}

export default appWithTranslation(MyApp)
