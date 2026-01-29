import * as React from 'react'
import { useRouter } from 'next/router'
import { Trans, useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from 'components/layout'
import SEO from 'components/seo'
import MarcoHeineImg from 'public/images/marco-heine.webp'
import { CustomLink } from '@/components/customlink'

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const About = () => {
  const { t } = useTranslation()
  const location = useRouter()

  return (
    <Layout maxWidth="max-w-[1400px]">
      <SEO
        title="About | Marco Heine - Freelance Web Developer"
        ogImage={MarcoHeineImg}
        ogImageAlt="a picture of Marco Heine"
        description={t('meta.about-description')}
        location={location.asPath}
      />
      <h1 className="mb-0 text-center">{t('about.headline')}</h1>
      <section className="mx-auto mt-20 mb-0">
        <div className="mx-auto mt-0 mb-20 max-w-2xl">
          <div className="grid justify-center gap-5 sm:grid-cols-[auto_auto]">
            <Image
              alt="a picture of Marco Heine"
              src={MarcoHeineImg}
              className="mb-10 max-w-[300px] rounded-xl sm:mb-20"
              priority
            />

            <div>
              <p>
                Hi!{' '}
                <span
                  className="mb-0 inline-block rotate-[-20deg] animate-wave transition-transform"
                  role="img"
                  aria-label="waving hand emoji"
                >
                  👋🏻
                </span>{' '}
                <Trans i18nKey={'about.text-one'} />
              </p>
              <p>
                <Trans i18nKey={'about.text-two'} />
              </p>
            </div>
          </div>
          <p>{t('about.text-three')}</p>
          <p>{t('about.text-four')}</p>
        </div>

        <section
          className="mx-auto mb-20 max-w-2xl"
          id="values"
        >
          <h2>{t('about.subline-three')}</h2>
          <ul>
            <li>{t('about.value-one')}</li>
            <li>{t('about.value-two')}</li>
            <li>{t('about.value-three')}</li>
            <li>{t('about.value-four')}</li>
            <li>{t('about.value-five')}</li>
            <li>{t('about.value-six')}</li>
            <li>{t('about.value-seven')}</li>
          </ul>
        </section>

        <div className="mx-auto mt-0 mb-20 max-w-2xl">
          <h2>{t('about.subline-one')}</h2>
          <p>{t('about.text-five')}</p>
          <p>
            {t('about.text-six')}
            <CustomLink href="https://www.goodreads.com/user/show/145214426-marco-heine">
              {t('about.text-seven')}
            </CustomLink>
            .
          </p>
          <p>{t('about.text-eight')}</p>
          <p>
            {t('about.text-nine')}{' '}
            <CustomLink href="/blog/">blog</CustomLink>{' '}
          </p>
        </div>
        {/* <aboutUI.Container>
            <details>
              <summary className="text-3xl font-serif cursor-pointer">
                {t('about.subline-two')}
              </summary>
              <>
                <p>
                  I did my <strong>bachelors degree</strong> in{' '}
                  <a
                    href="http://www.md-phw.de/2013/studium/bachelor/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    media & educational management
                  </a>{' '}
                  where I learned a lot about the main concepts of computer
                  sience, web design & development, e-learning, psychology and
                  communication. I improved my web development skills in group
                  projects where we developed apps and websites for real
                  clients.
                </p>
                <p>
                  In this projects we designed and developed a new website for a
                  big concert hall in Germany, we developed a power saving app
                  for an energy company and the result of our final project was
                  an{' '}
                  <a
                    href="http://www.md-phw.de/2013/index.php?id=12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Augmented Reality app
                  </a>{' '}
                  for our university to teach new students about the campus, its
                  buildings and everything they need to know about them while
                  they had so solve a murder at the same time.
                </p>
                <p>
                  I wrote my bachelor thesis about{' '}
                  <strong>responsive information visualization</strong> where I
                  developed approaches to transfer the principles of Responsive
                  Web Design into the field of Information Visualization.
                </p>
                <p>
                  In my <strong>masters degree</strong> in{' '}
                  <a
                    href="http://www.uni-passau.de/en/ma-mediacomm/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    media and communication
                  </a>{' '}
                  I focused on media computer science and media education and
                  learned more about digital learning & teaching, database
                  systems, information visualization and information retrieval.
                </p>
                <p>
                  In my <strong>master thesis</strong> I developed an
                  information- and communication concept for an institute of the
                  university of Passau to improve the dissemination of their
                  scientific publications. Therefore I analyzed all
                  communication channels of the institute to check to what
                  extent they are used to disseminate the publications.
                </p>
                <p>
                  Additionally I developed a prototype which automatically
                  gathers all scientific publications from social networks for
                  scientists, deploys them on the institutes website and
                  anounces them via Twitter and web notifications. The code for
                  the prototype can be found{' '}
                  <a
                    href="https://github.com/mkuehb/disseminationapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </>
            </details>
          </aboutUI.Container> */}
      </section>
    </Layout>
  )
}

export default About
