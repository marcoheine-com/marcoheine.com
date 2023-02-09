import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <section className="mx-auto mt-20 mb-0">
        <h1>Oh no!</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </Layout>
  )
}

export default NotFoundPage
