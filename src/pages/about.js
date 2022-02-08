import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import theme from '../styles/theme'
import * as ui from '../styles/index/ui'
import * as aboutUI from '../styles/about/ui'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      personalImg: file(relativePath: { eq: "marco_kuehbauch_square.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth="1400px">
        <SEO title="About" />
        <ui.PageHeader>About</ui.PageHeader>
        <aboutUI.PageContent>
          <aboutUI.Container>
            <aboutUI.TwoColumnGrid>
              <ui.ImgWrapper>
                <GatsbyImage
                  alt="a picture of Marco Kühbauch"
                  image={data.personalImg.childImageSharp.gatsbyImageData}
                />
              </ui.ImgWrapper>
              <div>
                <p>
                  Hi!{' '}
                  <ui.WaveHand role="img" aria-label="waving hand emojo">
                    👋🏻
                  </ui.WaveHand>{' '}
                  My name is Marco and I&apos;m a{' '}
                  <strong>Web Developer.</strong>
                </p>
                <p>
                  I like to build <strong>responsive</strong>,{' '}
                  <strong>accessible</strong> and <strong>fast</strong> websites
                  and web experiences for every device and every browser.
                </p>
              </div>
            </aboutUI.TwoColumnGrid>
            <p>
              I found my love for the web and its technologies at the age of 14,
              when I build my first website. I teached myself a lot about HTML
              and CSS and loved to be able to craft something digital.
            </p>
            <p>
              During my university education and when getting into the basics of
              computer science, I got hooked again and learned all about HTML,
              CSS, JavaScript and Front-end Development.
            </p>
          </aboutUI.Container>

          <aboutUI.Container>
            <h2>Everything else</h2>
            <p>
              In my spare time I like to do sports like bodyweightfitness and
              yoga.
            </p>
            <p>
              I try to read a lot, mostly one fictional and one non fictional
              book at the same time. Check out my{' '}
              <a
                href="https://www.goodreads.com/user/show/145214426-marco-k-hbauch"
                target="_blank"
                rel="noopener noreferrer"
              >
                goodreads profile
              </a>
              .
            </p>
            <p>
              Playing videogames is something I like to do aswell, most of the
              time it&apos;s on my Nintendo Switch.
            </p>
            <p>
              I also love to write. From blog posts, to short stories, sometimes
              even poems, or just simple notes. I&apos;m not really good at it
              but I enjoy it a lot. Head over to my <Link to="/blog">blog</Link>{' '}
              to see the latest posts.
            </p>
          </aboutUI.Container>
          <aboutUI.Container>
            <details>
              <summary className="text-3xl font-serif cursor-pointer">
                Former Education
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
