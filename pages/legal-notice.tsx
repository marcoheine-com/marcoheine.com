import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import * as ui from '../styles/index/ui'

const LegalNotice = ({ location }) => (
  <Layout>
    <SEO
      title="Legal notice | Marco Heine - Freelance Web Developer"
      location={location}
    />
    <ui.PageHeader>Legal Notice</ui.PageHeader>
    <section className="my-10 mx-auto max-w-3xl">
      <p>Marco Heine</p>
      <p>Strohberg 26</p>
      <p>70180 Stuttgart </p>
      <p>Deutschland</p>
      <a href="mailto:marco@marcoheine.com">marco@marcoheine.com</a>
    </section>
    <section className="mx-auto max-w-3xl">
      <p>Verantwortlich im Sinne von § 55 Abs. 2 RStV:</p>
      <p>Marco Heine</p>
      <p>Strohberg 26</p>
      <p>70180 Stuttgart </p>
    </section>
    {/* <section className="max-w-3xl mx-auto">
        <p>Umsatzsteuer-Identifikationsnummer:</p>
      </section> */}
  </Layout>
)

export default LegalNotice
