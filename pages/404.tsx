import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import * as ui from '../styles/index/ui'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ui.PageContent>
      <h1>Oh no!</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </ui.PageContent>
  </Layout>
)

export default NotFoundPage
