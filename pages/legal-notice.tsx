import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useTranslation } from 'next-i18next'

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const LegalNotice = () => {
  const location = useRouter()
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        title="Legal notice | Marco Heine - Freelance Web Developer"
        location={location.asPath}
      />
      <h1 className="mb-0 text-center">{t('legal.headline')}</h1>
      <section className="my-10 mx-auto max-w-3xl">
        <p>Marco Heine</p>
        <p>Richard-Wagner-Str. 15</p>
        <p>71116 Gärtringen</p>
        <p>Deutschland</p>
        <p>
          E-Mail: <a href="mailto:marco@marcoheine.com">marco@marcoheine.com</a>
        </p>
        <p>Phone: +49 152 09904711</p>
      </section>
      <section className="mx-auto max-w-3xl">
        <p>Verantwortlich im Sinne von § 55 Abs. 2 RStV:</p>
        <p>Marco Heine</p>
        <p>Richard-Wagner-Str. 15</p>
        <p>71116 Gärtringen</p>
      </section>
      <section className="mx-auto max-w-3xl">
        <p>Umsatzsteuer-Identifikationsnummer: DE349427157</p>
      </section>
    </Layout>
  )
}

export default LegalNotice
