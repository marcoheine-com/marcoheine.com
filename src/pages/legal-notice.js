import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import { graphql } from 'gatsby'

const LegalNotice = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Legal notice" />
      <ui.PageHeader>Legal Notice</ui.PageHeader>
      <ui.PageContent>
        <p>Marco Kühbauch</p>
        <p>Strohberg 26</p>
        <p>70180 Stuttgart </p>
        <p>Germany</p>
        <a href="mailto:marco@marcokuehbauch.com">marco@marcokuehbauch.com</a>
      </ui.PageContent>
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
