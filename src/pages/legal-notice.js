import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import { graphql } from 'gatsby'

const LegalNotice = ({ location }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO
        title="Legal notice"
        location={location}
      />
      <ui.PageHeader>Legal Notice</ui.PageHeader>
      <section className="max-w-3xl my-10 mx-auto">
        <p>Marco Heine</p>
        <p>Strohberg 26</p>
        <p>70180 Stuttgart </p>
        <p>Deutschland</p>
        <a href="mailto:marco@marcoheine.com">marco@marcoheine.com</a>
      </section>
      <section className="max-w-3xl mx-auto">
        <p>Verantwortlich im Sinne von § 55 Abs. 2 RStV:</p>
        <p>Marco Heine</p>
        <p>Strohberg 26</p>
        <p>70180 Stuttgart </p>
      </section>
      {/* <section className="max-w-3xl mx-auto">
        <p>Umsatzsteuer-Identifikationsnummer:</p>
      </section> */}
    </Layout>
  </ThemeProvider>
)

export default LegalNotice

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
