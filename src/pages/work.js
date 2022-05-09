import { graphql } from 'gatsby'
import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import { CallToAction } from '../components/call-to-action'
import Layout from '../components/layout'
import PageHeader from '../components/pageheader'
import SEO from '../components/seo'
import theme from '../styles/theme'

const Work = () => {
  const { t } = useTranslation()
  const testimonials = [
    // {
    //   text: t('work.testimonials.one'),
    //   author: 'Dom Habersack - fn teach',
    // },
    // {
    //   text: t('work.testimonials.two'),
    //   author: 'Dom Habersack - fn teach',
    // },
    // {
    //   text: t('work.testimonials.three'),
    //   author: 'Dom Habersack - fn teach',
    // },
  ]

  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth="1920px">
        <SEO title="Work with me" />
        <section className="flex flex-col items-center">
          <PageHeader title="Work with me" />
          <section className="flex flex-col items-center gap-24">
            <article className="max-w-2xl">
              <h2 className="text-primaryColorTwo mb-12">
                {t('work.headline-one')}
              </h2>
              <p>
                <Trans i18nKey={'work.what-i-do.one'} />
              </p>
              <p>
                <Trans i18nKey={'work.what-i-do.two'} />
              </p>
              <p>
                <Trans i18nKey={'work.what-i-do.three'} />
              </p>
              <p>
                <Trans i18nKey={'work.what-i-do.four'} />
              </p>
              <p>
                <Trans i18nKey={'work.what-i-do.five'} />
              </p>
              <CallToAction href="mailto:hello@marcokuehbauch.com">
                {t('work.call-to-action')}
              </CallToAction>
            </article>
            <article className="max-w-2xl">
              <h2 className="text-primaryColorTwo mb-12">
                {t('work.headline-two')}
              </h2>
              <section className="mb-10">
                <h3>🛠 {t('work.subline-one')}</h3>
                <p>{t('work.text-one')}</p>
                <ul className="list-disc ml-8 mb-4 flex flex-col gap-2">
                  <li>Landing Pages</li>
                  <li>Blogs</li>
                  <li>CMS integrations</li>
                  <li>Multilanguage Pages</li>
                  <li>Online Shops</li>
                  <li>more complex Fullstack Web Applications</li>
                </ul>
                <p>{t('work.text-two')}</p>
              </section>
              <section className="mb-10">
                <h3>{t('work.tech-stack')}</h3>
                <p>
                  {t('work.tech-stack-text-one')}
                  <a
                    href="https://jamstack.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jamstack
                  </a>
                  . {t('work.tech-stack-text-two')}
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xl ml-0">
                  <li className="mb-0">HTML & CSS</li>
                  <li>JavaScript</li>
                  <li className="mb-0">TypeScript</li>
                  <li className="mb-0">
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React
                    </a>
                  </li>
                  <li className="mb-0">
                    <a
                      href="https://www.gatsbyjs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gatsby
                    </a>
                  </li>
                  <li className="mb-0">
                    <a
                      href="https://nextjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NextJS
                    </a>
                  </li>
                  <li className="mb-0">
                    <a
                      href="https://tailwindcss.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TailwindCSS
                    </a>
                  </li>
                  <li className="mb-0">
                    <a
                      href="https://prismic.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Headless CMS (Prismic)
                    </a>
                  </li>
                  <li className="mb-0">
                    <a
                      href="https://www.netlify.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Netlify
                    </a>
                  </li>
                  <li className="mb-0">
                    <a
                      href="https://vercel.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vercel
                    </a>
                  </li>
                </ul>
              </section>
              <section className="mb-10">
                <h3>🎨 {t('work.subline-two')}</h3>
                <p>
                  <Trans i18nKey={'work.web-design-one'} />
                </p>
                <p>
                  <Trans i18nKey={'work.web-design-two'} />
                </p>
              </section>
              <section>
                <h3>📄 Technical Writing</h3>
                <p>
                  <Trans i18nKey={'work.technical-writing-one'} />
                </p>
                <p>
                  <Trans i18nKey={'work.technical-writing-two'} />
                </p>
                <CallToAction href="mailto:marcokuehbauch.com">
                  {t('work.technical-writing-cta')}
                </CallToAction>
              </section>
            </article>
            {testimonials.length ? (
              <article className="max-w-7xl">
                <h2 className="text-primaryColorTwo mb-12 text-center">
                  {t('work.headline-three')}
                </h2>
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                  {testimonials?.map((testimonial, index) => (
                    <article key={index}>
                      <p>{testimonial.text}</p>
                      <span className="italic">{testimonial.author}</span>
                    </article>
                  ))}
                </section>
              </article>
            ) : null}
          </section>
        </section>
      </Layout>
    </ThemeProvider>
  )
}

export default Work

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
