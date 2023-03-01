import { CustomLink } from '@/components/customlink'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const Uses = () => (
  <Layout>
    <SEO title="uses" />
    <h1 className="mb-0 text-center">Uses</h1>
    <section className="mx-auto mb-0 mt-20">
      <section className="mb-12">
        <p>
          Inspired by the massive{' '}
          <CustomLink href="https://uses.tech/">uses</CustomLink> collection
          initiated by{' '}
          <CustomLink href="https://twitter.com/wesbos">Wes Bos</CustomLink>, I
          decided to partizipate and share my own <i>uses</i> collection.
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
              My current <strong>editor</strong> is Visual Studio Code with the{' '}
              <CustomLink href="https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula">
                Dracula Official Theme
              </CustomLink>
              . I use Menlo as my main <strong>font</strong>.
            </p>
          </li>
          <li>
            <p>
              I use zsh as my <strong>terminal</strong> with oh-my-zsh to manage
              the configuration. Currently I&apos;m using the{' '}
              <CustomLink href="https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#avit">
                avit theme
              </CustomLink>
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
              <CustomLink href="https://netlify.com">Netlify</CustomLink> and{' '}
              <CustomLink href="https://vercel.com">Vercel</CustomLink>. They
              are both amazing services that takes away so much configuration
              and just help me ship my code as fast as possible.
            </p>
          </li>
          <li>
            <p>
              For purchasing new <strong>domains</strong> I use{' '}
              <CustomLink href="https://namecheap.com">Namecheap</CustomLink>.
            </p>
          </li>
          <li>
            <p>
              For ally my <CustomLink href="/blog">blog</CustomLink> and{' '}
              <CustomLink href="/today-i-learned"> today-i-learned</CustomLink>{' '}
              post writings I use{' '}
              <CustomLink href="https://notion.so">Notion</CustomLink>. We also
              use it heavily for client projects. Kanban Boards, requirement
              collections, meeting notes it all goes in there.
            </p>
          </li>
          <li>
            <p>
              I use{' '}
              <CustomLink href="https://plausible.io">Plausible</CustomLink> for
              Analytics. It&apos;s a simple, open source, lightweight and
              privacy-friendly alternative to Google Analytics.
            </p>
          </li>
        </ul>
      </section>
      <h2>Hardware</h2>
      <p>
        Here is an{' '}
        <CustomLink href="https://twitter.com/marcoheine_com/status/1420799028757999623">
          older photo of my desk setup
        </CustomLink>
        . It&apos;s not up to date but I haven&apos;t taken a new one yet.
      </p>
      <ul>
        <li>
          <p>
            At the end of 2020 and a lot of time in the home office, I deciced
            that it&apos;s time to upgrade to a <strong>standing desk</strong>.
            I bought the{' '}
            <CustomLink href="https://www.fully.com/en-eu/jarvis-adjustable-height-desk-bamboo.html">
              Fully Jarvis Bamboo standing desk
            </CustomLink>{' '}
            and never looked back. It offers so much customization, like storing
            the height of your standing position. So it&apos;s an absolute
            recommendation!
          </p>
        </li>
        <li>
          <p>
            I used a very flexible chair for a long time. At some point I
            deciced to get a &quot;real&quot; <strong>chair</strong>. As
            I&apos;m using this chair almost everyday for 8 hours I decided to
            invest a little more and bought the{' '}
            <CustomLink href="https://www.steelcase.com/products/office-chairs/gesture/">
              Steelcase gesture
            </CustomLink>
            .
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
            I use the{' '}
            <CustomLink href="https://www.amazon.de/dp/B08FRHFXWW?psc=1&ref=ppx_yo2ov_dt_b_product_details">
              Dell S3121QD 4K 31.5&quot; monitor
            </CustomLink>{' '}
            as my main monitor.
          </p>
        </li>
        <li>
          <p>
            I have two keybords that I use in a kind of rotation. The first one
            is the Apple Magic Keyboard without the numeric keypad. The second
            one is the Keychron K2.
          </p>
        </li>
        <li>
          <p>My preferred mouse is the Logitech MX 3 Master.</p>
        </li>
      </ul>
    </section>
  </Layout>
)

export default Uses
