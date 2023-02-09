import * as React from 'react'
import { Trans, useTranslation } from 'next-i18next'
import { CallToAction } from '../components/call-to-action'
import Layout from '../components/layout'
import PageHeader from '../components/pageheader'
import SEO from '../components/seo'
import { WebProjects } from '../components/web-projects'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

const Work = () => {
  const { t } = useTranslation()
  const location = useRouter()

  return (
    <Layout maxWidth="max-w-[1920px]">
      <SEO
        title="Work with me | Marco Heine - Freelance Web Developer"
        ogImage={'/images/marco-heine.webp'}
        ogImageAlt="a picture of Marco Heine"
        description={t('meta.work-description')}
        location={location.asPath}
      />
      <section className="flex w-full flex-col items-center">
        <PageHeader title="Work with me" />
        <section className="flex w-full flex-col items-center gap-24">
          <article className="max-w-2xl">
            <h2 className="mb-12 text-primaryColorTwo">
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
            <CallToAction href="mailto:hello@marcoheine.com">
              {t('work.call-to-action')}
            </CallToAction>
          </article>
          <article className="max-w-2xl">
            <h2 className="mb-12 text-primaryColorTwo">
              {t('work.headline-two')}
            </h2>
            <section
              className="mb-10"
              id="web-development"
            >
              <h3>🛠 {t('work.subline-one')}</h3>
              <p>{t('work.text-one')}</p>
              <ul className="ml-8 mb-4 flex list-disc flex-col gap-2">
                <li>
                  <Trans i18nKey={'work.service-one'} />
                </li>
                <li>
                  <Trans i18nKey={'work.service-two'} />
                </li>
                <li>
                  <Trans i18nKey={'work.service-three'} />
                </li>
                <li>
                  <Trans i18nKey={'work.service-four'} />
                </li>
                <li>
                  <Trans i18nKey={'work.service-five'} />
                </li>
                <li>
                  <Trans i18nKey={'work.service-six'} />
                </li>
              </ul>
              <p>{t('work.text-two')}</p>
            </section>
            <section className="mb-10">
              <h4>{t('work.tech-stack')}</h4>
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
              <ul className="flex list-none flex-wrap gap-x-4 gap-y-2 text-xl">
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
            <section
              className="mb-10"
              id="seo"
            >
              <h3>🔎 SEO</h3>
              <p>
                <Trans i18nKey={'work.seo-one'} />
              </p>
              <h4>On-Site Check</h4>
              <p>
                <Trans i18nKey={'work.seo-two'} />
              </p>
              <h4>Content Check</h4>
              <p>
                <Trans i18nKey={'work.seo-three'} />
              </p>
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
              <CallToAction href="mailto:hello@marcoheine.com">
                {t('work.technical-writing-cta')}
              </CallToAction>
            </section>
          </article>

          <WebProjects showAll />
        </section>
      </section>
    </Layout>
  )
}

export default Work
