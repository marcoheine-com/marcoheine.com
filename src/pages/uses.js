import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import * as ui from '../styles/index/ui';
import desksetup from '../images/desk-setup.jpg';

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="uses" />
      <ui.PageContent>
        <h1>Uses</h1>
        <p>
          Inspired by the massive <a href="https://uses.tech/"> uses </a>
          collection initiated by @wesbos, I decided to partizipate and share my
          own uses collection.
        </p>

        <p>
          So on this page I'm gonna share{' '}
          <strong>all the software and hardware I use almost everyday</strong>.
        </p>

        <h2>Software</h2>
        <ul>
          <li>
            <p>
              My current <strong>editor</strong> is Visual Studio Code with the
              Night Owl Theme. I use Menlo as my main <strong>font</strong>.
            </p>
          </li>
          <li>
            <p>
              I use zsh as my <strong>terminal</strong> with oh-my-zsh to manage
              the configuration. Currently I'm using the{' '}
              <a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#avit">
                avit theme
              </a>
              .
            </p>
          </li>
          <li>
            <p>
              I was a long time Chrome user but switched to the Firefox
              developer edition as my main <strong>browser</strong> a few years
              ago and never regretted it. I like the dev tools way more. For
              example showing CSS that has no effect is such a great feature.
            </p>
          </li>
          <li>
            <p>
              I switch back to Chrome whenever I want to do a lighthouse audit.
            </p>
          </li>
          <li>
            <p>
              I use <strong>postman</strong> to test my APIs.
            </p>
          </li>
        </ul>
        <h2>Services</h2>
        <ul>
          <li>
            <p>
              For <strong>Hosting</strong> and <strong>deployment</strong> I use{' '}
              <a href="netlify.com">Netlify</a>. It's an amazing service that
              takes away so much configuration and just helps me ship my code as
              fast as possible.
            </p>
          </li>
          <li>
            <p>
              For purchasing new <strong>domains</strong> I use{' '}
              <a href="namecheap.com">Namecheap</a>.
            </p>
          </li>
        </ul>
        <h2>Hardware</h2>
        <p>
          Here is a picture of my desk setup:{' '}
          <img src={desksetup} alt="image of my desk setup" />
        </p>
        <ul>
          <li>
            <p>
              At the end of 2020 and a lot of time in the home office, I deciced
              it's time to upgrade to a <strong>standing desk</strong>. I bought
              the{' '}
              <a href="https://www.fully.com/en-eu/jarvis-adjustable-height-desk-bamboo.html">
                Fully Jarvis Bamboo standing desk
              </a>{' '}
              and never looked back.
            </p>
          </li>
          <li>
            <p>
              It offers so much customization, like storing the height of your
              standing position. So it's an absolute recommendation!
            </p>
          </li>
          <li>
            <p>
              I used a very flexible chair for a long time. At some point I
              deciced to get a "real" <strong>chair</strong>. As I'm using this
              chair almost everyday for 8 hours I decided to invest a little
              more and bought the{' '}
              <a href="https://www.steelcase.com/products/office-chairs/gesture/">
                Steelcase gesture.
              </a>
            </p>
          </li>
          <li>
            <p>
              I'm using the 2019 16-inch <strong>MacBook Pro</strong> with the
              2,6 GHz 6-Core Intel Core i7 and 16 GB of memory.
            </p>
          </li>
          <li>
            <p>
              I use a Dell 4K 32" monitor as my main <strong>monitor</strong>.
              Currently I have the MacBook right in front of it and use the
              keyboard of it.
            </p>
          </li>
          <li>
            <p>
              I'm thinking about getting a mechanical keyboard and a mouse so I
              can set the MacBook to the right side of my monitor.
            </p>
            <li>
              <p>
                For a mouse my current favourite is the Logitech MX 3 Master. If
                you have any recommendations for a silent mechanical keyboard,
                let me know!
              </p>
            </li>
          </li>
        </ul>
      </ui.PageContent>
    </Layout>
  </ThemeProvider>
);

export default NotFoundPage;
