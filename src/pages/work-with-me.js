import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/layout'
import PageHeader from '../components/pageheader'
import SEO from '../components/seo'
import theme from '../styles/theme'

const testimonials = [
  //   {
  //     text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
  //     diam nonumy eirmod tempor invidunt ut labore et dolore magna
  //     aliquyam erat, sed diam voluptua. At vero eos et accusam et
  //     justo duo dolores et ea rebum. Stet clita kasd gubergren, no
  //     sea takimata sanctus est Lorem ipsum dolor sit amet.`,
  //     author: 'Dom Habersack - fn teach',
  //   },
  //   {
  //     text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
  //     diam nonumy eirmod tempor invidunt ut labore et dolore magna
  //     aliquyam erat, sed diam voluptua. At vero eos et accusam et
  //     justo duo dolores et ea rebum. Stet clita kasd gubergren, no
  //     sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  //     ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
  //     nonumy eirmod tempor invidunt ut labore et dolore magna
  //     aliquyam erat, sed diam voluptua. At vero eos et accusam et
  //     justo duo dolores et ea rebum. Stet clita kasd gubergren, no
  //     sea takimata sanctus est Lorem ipsum dolor sit amet.`,
  //     author: 'Dom Habersack - fn teach',
  //   },
  //   {
  //     text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
  //     diam nonumy eirmod tempor invidunt ut labore et dolore magna
  //     aliquyam erat, sed diam voluptua. At vero eos et accusam et
  //     justo duo dolores et ea rebum. Stet clita kasd gubergren, no
  //     sea takimata sanctus est Lorem ipsum dolor sit amet.`,
  //     author: 'Dom Habersack - fn teach',
  //   },
]

const WorkWithMe = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth="1920px">
        <SEO title="Work with me" />
        <section className="flex flex-col items-center">
          <PageHeader title="Work with me" />
          <section className="flex flex-col items-center gap-24">
            <article className="max-w-2xl">
              <h2 className="text-primaryColorTwo mb-12">What I do</h2>
              <p>
                I’m a Front-end Developer who <strong>loves</strong> to makes
                websites!
              </p>
              <p>
                I have more than <strong>6 years</strong> of expierence and
                worked on numerious projects, at web agencies, in product
                development and at software development companies.
              </p>
              <p>
                With a keen eye for <strong>UX Design</strong> I understand user
                needs and problems and know how to solve them. Enabling a clear
                and good communication is always my priority.
              </p>
              <p>
                I still love the web and it’s technologies and learning
                something new everyday is what makes it so much fun for me.
              </p>
              <p>
                I strive for <strong>high quality code</strong> and lovable
                digital products. My focus is on <strong>Acessibility</strong>,{' '}
                <strong>Responsiveness</strong> and <strong>high speed</strong>{' '}
                websites.
              </p>
              <a
                className="inline-block bg-primaryColorTwo py-3 px-4 text-white mt-6 hover:text-white hover:bg-linkHover"
                href="mailto:hello@marcokuehbauch.com"
              >
                Work with me
              </a>
            </article>
            <article className="max-w-2xl">
              <h2 className="text-primaryColorTwo mb-12">Services</h2>
              <section className="mb-10">
                <h3>🛠 Web Development</h3>
                <p>
                  I am able to develop:
                  <ul className="list-disc ml-8 flex flex-col gap-2 pt-2">
                    <li>Landing Pages</li>
                    <li>Blogs</li>
                    <li>CMS integrations</li>
                    <li>Multilanguage Pages</li>
                    <li>Online Shops</li>
                    <li>more complex Fullstack Web Applications</li>
                  </ul>
                </p>
                <p>
                  I can help you with your existing website by implementing
                  changes and improvements to get a better User Experience, more
                  Speed, Responsiveness, improved Accessibility and SEO.
                </p>
              </section>
              <section className="mb-10">
                <h3>Tech Stack</h3>
                <p>
                  Currentliy I’m the most comfortable when working with the so
                  called{' '}
                  <a
                    href="https://jamstack.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jamstack
                  </a>
                  . I’m an expert in the following technologies, frameworks and
                  platforms:
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xl ml-0">
                  <li className="mb-0">HTML & CSS</li>
                  <li>JavaScript</li>
                  <li className="mb-0">TypeScript</li>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="mb-0">React</li>
                  </a>
                  <a
                    href="https://www.gatsbyjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="mb-0">Gatsby</li>
                  </a>
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="mb-0">NextJS</li>
                  </a>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="mb-0">TailwindCSS</li>
                  </a>
                  <a
                    href="https://prismic.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="mb-0">Headless CMS (Prismic)</li>
                  </a>
                  <a
                    href="https://www.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="mb-0">Netlify</li>
                  </a>
                  <a
                    href="https://vercel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="mb-0">Vercel</li>
                  </a>
                </ul>
              </section>
              <section className="mb-10">
                <h3>🎨 Web Design</h3>
                <p>
                  With a keen eye for <strong>UX Design</strong> I am able to
                  create clickable prototypes or a full design for your website.
                </p>
                <p>
                  {' '}
                  Either based on your existing Corporate Design and Identity or
                  starting from scratch by choosing fonts, colors and design
                  elements matching your business and brand.{' '}
                </p>
              </section>
              <section>
                <h3>📄 Technical Writing</h3>
                <p>
                  I love to <strong>write</strong>. From documenation, to blog
                  posts to newsletters. Do you need to update the technical
                  documenation of your product? Are you looking for a blog post,
                  exploring your new technology?
                </p>
                <p>
                  I am someone who learns better by reading so I know exactly
                  how to <strong>structure</strong> the information and write
                  about your tool to teach your users the most.
                </p>
                <a
                  className="inline-block bg-primaryColorTwo py-3 px-4 text-white mt-6 hover:text-white hover:bg-linkHover"
                  href="mailto:hello@marcokuehbauch.com"
                >
                  Learn more
                </a>
              </section>
            </article>
            {testimonials.length ? (
              <article className="max-w-7xl">
                <h2 className="text-primaryColorTwo mb-12 text-center">
                  What others are saying about me
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

export default WorkWithMe
