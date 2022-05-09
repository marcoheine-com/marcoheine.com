import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import { graphql, Link } from 'gatsby'
import { Trans, useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Contact" />
        <ui.PageHeader>{t('contact.headline')}</ui.PageHeader>

        <section className="mt-20 mx-auto mb-0 max-w-2xl">
          <h3>{t('contact.subline')}</h3>
          <p>
            <Trans i18nKey={'contact.text-one'} />
            <Link to="/work/">work</Link>
          </p>
          <p>{t('contact.text-two')}</p>
          <p>
            {t('contact.text-three')}
            <a href="mailto:hello@marcokuehbauch.com">
              hello@marcokuehbauch.com
            </a>
            .
          </p>
          <p>
            {t('contact.text-four')}
            <a href="https://twitter.com/Mkuehb">@mkuehb.</a>
          </p>
          <p>
            {t('contact.text-five')}
            <a href="https://github.com/mkuehb">GitHub</a>.
          </p>
        </section>
      </Layout>
    </ThemeProvider>
  )
}

export default Contact

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
