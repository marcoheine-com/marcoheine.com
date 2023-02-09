import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MarcoHeineImg from '../public/images/marco-heine.webp'
import { useRouter } from 'next/router'

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const Contact = () => {
  const location = useRouter()
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        title="Contact | Marco Heine - Freelance Web Developer"
        ogImage={MarcoHeineImg}
        ogImageAlt="a picture of me"
        description={t('meta.contact-description')}
        location={location.asPath}
      />
      <h1 className="mb-0 text-center">{t('contact.headline')}</h1>

      <section className="mx-auto mt-20 mb-0 max-w-2xl">
        <h2>{t('contact.subline')}</h2>
        <p>
          <Trans i18nKey={'contact.text-one'} />
          <Link href="/work/"> Work</Link>
        </p>
        <p>{t('contact.text-two')}</p>
        <p>
          {t('contact.text-three')}
          <a href="mailto:hello@marcoheine.com">hello@marcoheine.com</a>.
        </p>
        <p>
          {t('contact.text-four')}
          <a href="https://twitter.com/marcoheine_com">@marcoheine_com.</a>
        </p>
        <p>
          {t('contact.text-five')}
          <a href="https://github.com/marcoheine-com">GitHub</a>.
        </p>
      </section>
    </Layout>
  )
}

export default Contact
