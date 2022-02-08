import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import { Link } from 'gatsby'

const Contact = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Contact" />
      <ui.PageHeader>Contact</ui.PageHeader>

      <section className="mt-20 mx-auto mb-0 max-w-2xl">
        <h3>Thanks for your interest in getting in touch!</h3>
        <p>
          If you're interested in <strong>working with me</strong>, head over to
          my <Link to="/work/">work</Link> page. There you will find all the
          information about how I work and how I can help you.
        </p>
        <p>
          If you have a question about one of my blog posts or one of my
          today-I-learned posts feel free to send me an email.{' '}
        </p>
        <p>
          You can reach out to me via email at{' '}
          <a href="mailto:hello@marcokuehbauch.com">hello@marcokuehbauch.com</a>
          .
        </p>
        <p>
          You can also find me on Twitter at{' '}
          <a href="https://twitter.com/Mkuehb">@mkuehb.</a>
        </p>
        <p>
          A few samples of my work as well as the source code of this website
          are available on <a href="https://github.com/mkuehb">GitHub</a>.
        </p>
      </section>
    </Layout>
  </ThemeProvider>
)

export default Contact
