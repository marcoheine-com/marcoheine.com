import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import { about } from '../constants/cardData';
import theme from '../styles/theme';
import * as ui from '../styles/index/ui';

const About = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="About" />
      <Card h1={about.h1} h2={about.h2} textContent={about.textContent} />
      <ui.PageContent>
        <h2>About</h2>
        <p>
          Hi, my name is Marco and I&apos;m a Frontend Web Developer. I like to
          build responsive, accessible and fast websites and frontend
          experiences for every device and every browser.
        </p>
        <p>
          I like to work on complex problems, find solutions which will help
          every human being and achieve that while working with the latest web
          technologies.
        </p>
        <h2>My Skills</h2>
        <h3>My current stack contains:</h3>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Testing with the Jest and the React Testing Library</li>
          <li>GraphQL</li>
        </ul>
        <p>
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
        </p>
        <p>
          I am used to work with the principles of{' '}
          <strong>Responsive Webdesign</strong> since I wrote my bachelor thesis
          about this topic in 2014 and I can&apos;t imagine building a website
          without them in mind.
        </p>
        <p>
          <strong>JavaScript</strong> is the language I am most interested in
          and where I try to improve the most everyday.
        </p>
        <p>
          In 2018 I started to work with <strong>React</strong> and I really
          like the way how React makes it so enjoyable, easy and fun to build
          Single Page Applications.
        </p>
        <p>
          I also got used to work with the principles of <strong>Redux</strong>{' '}
          and the main concepts of using a global state container.
        </p>
        <p>
          Currently I&apos;m interested in getting more of a full grasp of how
          web applications works. This means I&apos;m learning more about
          NodeJS, Express, databases and GraphQL to gain a better understanding
          of the <strong>full stack</strong>.
        </p>
        <p>
          Working with <strong>Git</strong> in large teams is something I really
          like and I&apos;m most used to the{' '}
          <a
            href="https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow"
            target="_blank"
            rel="noopener noreferrer"
          >
            feature branch workflow
          </a>
          .
        </p>
        <p>
          My preferred editor right now is <strong>VS Code</strong>.
        </p>
        <p>
          I always try to keep the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"
            target="_blank"
            rel="noopener noreferrer"
          >
            DRY
          </a>{' '}
          and{' '}
          <a
            href="https://en.wikipedia.org/wiki/KISS_principle"
            target="_blank"
            rel="noopener noreferrer"
          >
            KISS
          </a>{' '}
          principles in mind. I&apos;m also an expert in the Rubber Duck Method.
        </p>
        <hr />
        <h2>Former Education</h2>
        <p>
          I did my <strong>bachelors degree</strong> in{' '}
          <a
            href="http://www.md-phw.de/2013/studium/bachelor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            media & educational management
          </a>{' '}
          where I learned a lot about the main concepts of computer sience, web
          design & development, e-learning, psychology and communication. I
          improved my web development skills in group projects where we
          developed apps and websites for real clients.
        </p>
        <p>
          In this projects we designed and developed a new website for a big
          concert hall in Germany, we developed a power saving app for an energy
          company and the result of our final project was an{' '}
          <a
            href="http://www.md-phw.de/2013/index.php?id=12"
            target="_blank"
            rel="noopener noreferrer"
          >
            Augmented Reality app
          </a>{' '}
          for our university to teach new students about the campus, its
          buildings and everything they need to know about them while they had
          so solve a murder at the same time.
        </p>
        <p>
          I wrote my bachelor thesis about{' '}
          <strong>responsive information visualization</strong> where I
          developed approaches to transfer the principles of Responsive Web
          Design into the field of Information Visualization.
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
          I focused on media computer science and media education and learned
          more about digital learning & teaching, database systems, information
          visualization and information retrieval.
        </p>
        <p>
          In my <strong>master thesis</strong> I developed an information- and
          communication concept for an institute of the university of Passau to
          improve the dissemination of their scientific publications. Therefore
          I analyzed all communication channels of the institute to check to
          what extent they are used to disseminate the publications.
        </p>
        <p>
          Additionally I developed a prototype which automatically gathers all
          scientific publications from social networks for scientists, deploys
          them on the institutes website and anounces them via Twitter and web
          notifications. The code for the prototype can be found{' '}
          <a
            href="https://github.com/mkuehb/disseminationapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <hr />
        <h2>Everything else</h2>
        <p>
          In my spare time I like to do sports like bodyweightfitness and yoga.
        </p>
        <p>
          I read a lot, mostly one fictional and one non fictional book at the
          same time. I also work on a small side project which is all about
          reading and books. You can check it out here:{' '}
          <a
            href="https://myreadingtime.digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            myreadingtime.digital
          </a>
        </p>
        <p>
          Playing videogames is something I like to do aswell, most of the time
          it&apos;s on my Nintendo Switch.
        </p>
        <p>
          I also love to write. From blog posts, to short stories, sometimes
          even poems, or just simple notes. I&apos;m not really good at it but I
          enjoy it a lot.
        </p>
        <p>
          {' '}
          Sometimes I still like to cheer for Borussia Dortmund. When I&apos;m
          listening to music it&apos;s most of the time the genre hiphop.
          I&apos;m originally from southwest germany.
        </p>
      </ui.PageContent>
    </Layout>
  </ThemeProvider>
);

export default About;
