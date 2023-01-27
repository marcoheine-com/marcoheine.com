import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import * as ui from '../styles/index/ui'

const Uses = () => (
  <Layout>
    <SEO title="uses" />
    <h1 className="mb-0 text-center">Uses</h1>
    <ui.PageContent>
      <section className="mb-12">
        <p>
          Inspired by the massive{' '}
          <a
            href="https://uses.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            uses{' '}
          </a>
          collection initiated by{' '}
          <a
            href="https://twitter.com/wesbos"
            target="_blank"
            rel="nooper noreferrer"
          >
            @wesbos
          </a>
          , I decided to partizipate and share my own uses collection.
        </p>

        <p>
          So on this page I&apos;m gonna share{' '}
          <strong>all the software and hardware I use almost everyday</strong>.
        </p>
      </section>

      <section className="mb-12">
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
              the configuration. Currently I&apos;m using the{' '}
              <a
                href="https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#avit"
                target="_blank"
                rel="noopener noreferrer"
              >
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
      </section>

      <section className="mb-12">
        <h2>Services</h2>
        <ul>
          <li>
            <p>
              For <strong>Hosting</strong> and <strong>deployment</strong> I use{' '}
              <a href="https://netlify.com">Netlify</a> and{' '}
              <a href="https://vercel.com">Vercel</a>. They are both amazing
              services that takes away so much configuration and just help me
              ship my code as fast as possible.
            </p>
          </li>
          <li>
            <p>
              For purchasing new <strong>domains</strong> I use{' '}
              <a
                href="namecheap.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Namecheap
              </a>
              .
            </p>
          </li>
        </ul>
      </section>
      <h2>Hardware</h2>
      <p>
        Here is a{' '}
        <a
          href="https://twitter.com/marcoheine_com/status/1420799028757999623"
          target="_blank"
          rel="noopener noreferrer"
        >
          photo of my desk setup
        </a>
        .
      </p>
      <ul>
        <li>
          <p>
            At the end of 2020 and a lot of time in the home office, I deciced
            it&apos;s time to upgrade to a <strong>standing desk</strong>. I
            bought the{' '}
            <a
              href="https://www.fully.com/en-eu/jarvis-adjustable-height-desk-bamboo.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fully Jarvis Bamboo standing desk
            </a>{' '}
            and never looked back.
          </p>
        </li>
        <li>
          <p>
            It offers so much customization, like storing the height of your
            standing position. So it&apos;s an absolute recommendation!
          </p>
        </li>
        <li>
          <p>
            I used a very flexible chair for a long time. At some point I
            deciced to get a &quot;real&quot; <strong>chair</strong>. As
            I&apos;m using this chair almost everyday for 8 hours I decided to
            invest a little more and bought the{' '}
            <a
              href="https://www.steelcase.com/products/office-chairs/gesture/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steelcase gesture.
            </a>
          </p>
        </li>
        <li>
          <p>
            I&apos;m using the 2019 16-inch <strong>MacBook Pro</strong> with
            the 2,6 GHz 6-Core Intel Core i7 and 16 GB of memory.
          </p>
        </li>
        <li>
          <p>
            I use a Dell 4K 32&quot; monitor as my main <strong>monitor</strong>
            . Currently I have the MacBook right in front of it and use the
            keyboard of it.
          </p>
        </li>
        <li>
          <p>
            I&apos;m thinking about getting a mechanical keyboard and a mouse so
            I can set the MacBook to the right side of my monitor.
          </p>
          <li>
            <p>My current favourite mouse is the Logitech MX 3 Master.</p>
          </li>
        </li>
      </ul>
    </ui.PageContent>
  </Layout>
)

export default Uses
