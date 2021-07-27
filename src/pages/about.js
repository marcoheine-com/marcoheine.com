import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import * as ui from '../styles/index/ui';
import * as aboutUI from '../styles/about/ui';

const skills = [
  {
    skill: 'HTML & CSS',
    text: (
      <>
        I am proficient and experienced in writing{' '}
        <strong>semantic HTML</strong> and <strong>maintainable CSS</strong>{' '}
        with methodologies like{' '}
        <a
          href="http://getbem.com/introduction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BEM
        </a>
        .
      </>
    ),
  },
  {
    skill: 'Response Webdesign',
    text: (
      <>
        I am used to work with the principles of{' '}
        <strong>Responsive Webdesign</strong> since I wrote my bachelor thesis
        about this topic in 2014 and I can&apos;t imagine building a website
        without them in mind.
      </>
    ),
  },
  {
    skill: 'JavaScript',
    text: (
      <>
        <strong>JavaScript</strong> is the language I am most interested in, I'm
        programming the most in, where I feel the most comfortable with and
        where I try to improve the most everyday.
      </>
    ),
  },
  {
    skill: 'TypeScript',
    text: (
      <>
        In 2020 I started to work with <strong>TypeScript</strong> and I just
        became a person who can't write normal JavaScript anymore without
        feeling scared a little. I love how typing makes working on a large
        codebase with a lot of other developers much more comfortable and
        productive.
      </>
    ),
  },
  {
    skill: 'React',
    text: (
      <>
        {' '}
        In 2018 I started to work with <strong>React</strong> and I really like
        the way how React makes it so enjoyable, easy and fun to build Single
        Page Applications. Since then I build a lot of user interfaces with it
        and am experienced in the best practices of it.
      </>
    ),
  },
  {
    skill: 'Redux',
    text: (
      <>
        {' '}
        When I first got to work with React I also got used to work with the
        principles of <strong>Redux</strong> and the main concepts of using a
        global state container.
      </>
    ),
  },
  {
    skill: 'Testing with Jest and the React Testing Library',
    text: (
      <>
        <strong>Jest</strong> in combination with the{' '}
        <strong>React Testing Library</strong> is my favourite combination for
        writing frontend unit tests right know.
      </>
    ),
  },
  {
    skill: 'NodeJS/Express',
    text: (
      <>
        I had the opportunity to work on several <strong>NodeJS/Express</strong>{' '}
        backends and I like the fact, that I can be productive immediately
        because of knowing TypeScript from a Frontend developer perspective.
      </>
    ),
  },
  {
    skill: 'GoLang',
    text: (
      <>
        <strong>GoLang</strong> is the programming language I'm curently
        learning and it's a lot of fun. I already worked in a production
        backend, writing api endpoints in combination with PostgreSQL.{' '}
      </>
    ),
  },
  {
    skill: 'MongoDB',
    text: (
      <>
        While working with <strong>MongoDB</strong> I learned about the
        advantages of document based databases and when they are better suited
        then databases which use SQL.
      </>
    ),
  },
  {
    skill: 'PostgreSQL',
    text: (
      <>
        <strong>PostgreSQL</strong> is my current choice when I have the need
        for relational databases.
      </>
    ),
  },
];

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      personalImg: file(relativePath: { eq: "marco_kuehbauch_square.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [shouldRender, setShouldRender] = useState(false);

  const handleOnClick = () => {
    setShouldRender(!shouldRender);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth="1400px">
        <SEO title="About" />
        <ui.PageHeader>About</ui.PageHeader>
        <aboutUI.PageContent>
          <aboutUI.Container>
            <aboutUI.TwoColumnGrid>
              <ui.ImgWrapper>
                <Image
                  alt="a picture of Marco Kühbauch"
                  fluid={data.personalImg.childImageSharp.fluid}
                  fadeIn
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
              I like to find solutions to complex problems, which will help
              every human being and achieve that while working with the latest
              web technologies.
            </p>
            <p>
              I had the chance to work on a lot of different projects and learn
              and use a lot of different technologies.
            </p>
          </aboutUI.Container>

          <aboutUI.CenteredText>My Skills</aboutUI.CenteredText>
          <aboutUI.SkillsList>
            {skills.map(skill => {
              return (
                <li key={`${skill.skill}-0`}>
                  <h3>{skill.skill}</h3>

                  <p>{skill.text}</p>
                </li>
              );
            })}
          </aboutUI.SkillsList>

          <aboutUI.Container>
            <h2>Everything else</h2>
            <p>
              In my spare time I like to do sports like bodyweightfitness and
              yoga.
            </p>
            <p>
              I read a lot, mostly one fictional and one non fictional book at
              the same time. I also work on a small side project which is all
              about reading and books. You can check it out here:{' '}
              <a
                href="https://myreadingtime.digital"
                target="_blank"
                rel="noopener noreferrer"
              >
                myreadingtime.digital
              </a>
            </p>
            <p>
              Playing videogames is something I like to do aswell, most of the
              time it&apos;s on my Nintendo Switch.
            </p>
            <p>
              I also love to write. From blog posts, to short stories, sometimes
              even poems, or just simple notes. I&apos;m not really good at it
              but I enjoy it a lot.
            </p>

            <h2>Former Education</h2>
            <button type="button" onClick={handleOnClick}>
              {!shouldRender ? 'Show' : 'Hide'}
            </button>

            {shouldRender ? (
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
            ) : null}
          </aboutUI.Container>
        </aboutUI.PageContent>
      </Layout>
    </ThemeProvider>
  );
};

export default About;
