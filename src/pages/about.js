import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import * as aboutUI from '../styles/about/ui'
import { Trans, useTranslation } from 'react-i18next'

const About = ({ data, location }) => {
  const { t } = useTranslation()

  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth="1400px">
        <SEO
          title="About"
          ogImage={
            data.personalImg?.childImageSharp?.gatsbyImageData?.images?.fallback
              ?.src
          }
          ogImageAlt="a picture of me"
          description={t('meta.about-description')}
          location={location}
        />
        <ui.PageHeader>{t('about.headline')}</ui.PageHeader>
        <aboutUI.PageContent>
          <aboutUI.Container>
            <aboutUI.TwoColumnGrid>
              <ui.ImgWrapper>
                <GatsbyImage
                  alt="a picture of Marco Heine"
                  image={data.personalImg.childImageSharp.gatsbyImageData}
                />
              </ui.ImgWrapper>
              <div>
                <p>
                  Hi!{' '}
                  <ui.WaveHand
                    role="img"
                    aria-label="waving hand emoji"
                  >
                    👋🏻
                  </ui.WaveHand>{' '}
                  <Trans i18nKey={'about.text-one'} />
                </p>
                <p>
                  <Trans i18nKey={'about.text-two'} />
                </p>
              </div>
            </aboutUI.TwoColumnGrid>
            <p>{t('about.text-three')}</p>
            <p>{t('about.text-four')}</p>
          </aboutUI.Container>

          <aboutUI.Container>
            <h2>{t('about.subline-one')}</h2>
            <p>{t('about.text-five')}</p>
            <p>
              {t('about.text-six')}
              <a
                href="https://www.goodreads.com/user/show/145214426-marco-k-hbauch"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('about.text-seven')}
              </a>
              .
            </p>
            <p>{t('about.text-eight')}</p>
            <p>
              {t('about.text-nine')} <Link to="/blog">blog</Link>{' '}
            </p>
          </aboutUI.Container>
          <aboutUI.Container>
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
          </aboutUI.Container>
        </aboutUI.PageContent>
      </Layout>
    </ThemeProvider>
  )
}

export default About

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
    personalImg: file(relativePath: { eq: "marco-heine.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 300)
      }
    }
  }
`
