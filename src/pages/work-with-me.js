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
                I strive for high quality code and lovable digital products. My
                focus is on Acessibility, Responsiveness and fast websites.
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
                  I am able to develop landing pages, blogs, CMS integrations,
                  online shops and more complex fullstack web applications.
                </p>
                <p>
                  I can help you with support, adding changes and improvements
                  to your existing websites by improving the User Experience,
                  speed, responsiveness, accessibility and SEO.
                </p>
              </section>
              <section className="mb-10">
                <h3>Tech Stack</h3>
                <p>
                  Currentliy I’m the most comfortable when working with the so
                  called Jamstack. I’m an expert in the following technologies,
                  frameworks and platforms:
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xl ml-0">
                  <li className="mb-0">HTML & CSS</li>
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="mb-0">TypeScript</li>
                  </a>
                  <li className="mb-0">React</li>
                  <li className="mb-0">Gatsby</li>
                  <li className="mb-0">NextJS</li>
                  <li className="mb-0">TailwindCSS</li>
                  <li className="mb-0">Headless CMS (Prismic)</li>
                  <li className="mb-0">Netlify</li>
                  <li className="mb-0">Vercel</li>
                </ul>
              </section>
              <section className="mb-10">
                <h3>🎨 Web Design</h3>
                <p>
                  With a keen eye for UX-Design I am able to create clickable
                  prototypes or a full design for your website.
                </p>
                <p>
                  {' '}
                  Either based on your existing Corporate Design and Identity or
                  starting from scratch by choosing fonts, colors and design
                  elements matching your{' '}
                </p>
              </section>
              <section>
                <h3>📄 Technical Writing</h3>
                <p>
                  I love to write. From documenation, to blog posts to
                  newsletters. Do you need to update the technical documenation
                  of your product? Are you looking for a blog post, exploring
                  your new technology?
                </p>
                <p>
                  I am someone who learns more from reading so I know exactly
                  how to structure the information and write about your tool to
                  teach your users the most.
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
