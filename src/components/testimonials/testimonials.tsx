import { Link } from 'gatsby-plugin-react-i18next'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import ThomasFischerImg from '../../images/thomas-fischer.1024x1024(1).jpg'
// @ts-ignore
import ChristopImg from '../../images/christop-a-kolb.png'

interface Testimonial {
  author: string
  company: string
  link: string
  image?: string
  text: {
    content: string
  }[]
}

export const Testimonials: React.FC = () => {
  const { t } = useTranslation()

  const testimonials: Testimonial[] = [
    {
      author: 'Christoph A. Kolb',
      company: 'Wahnsinn Design',
      link: 'https://www.wahnsinn.design/',
      image: ChristopImg,
      text: [
        {
          content: t('testimonials.christoph.text.a'),
        },
      ],
    },
    {
      text: [
        { content: t('testimonials.one.text.a') },

        { content: t('testimonials.one.text.b') },
        { content: t('testimonials.one.text.c') },
      ],
      author: 'Dom Habersack',
      company: 'fn teach GmbH',
      link: 'https://domhabersack.com/',
      image: 'https://domhabersack.com/dom.jpg',
    },
    {
      text: [
        {
          content: t('testimonials.two.text.a'),
        },
      ],
      author: 'Thomas Fischer',
      company: 'tts GmbH',
      link: 'https://www.tt-s.com/en/company',
      image: ThomasFischerImg,
    },
    {
      text: [
        {
          content: t('testimonials.three.text.a'),
        },
      ],
      author: 'Natali Bopp',
      company: 'SprintEins',
      link: 'https://www.sprinteins.com/',
    },
    {
      text: [
        {
          content: t('testimonials.four.text.a'),
        },
      ],
      author: 'Tobi Saussele',
      company: 'Werk8',
      link: 'https://werk8.design/',
    },
  ]

  return (
    <article className="max-w-7xl mb-20">
      <h2
        id="testimonials"
        className="text-primaryColorTwo mb-12 text-center"
      >
        {t('work.headline-three')}
      </h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        {testimonials?.map((testimonial, index) => (
          <article key={index}>
            {testimonial.text.map((text, index) => (
              <p key={index}>{text.content}</p>
            ))}

            <div className="flex items-center gap-4">
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={`a picture of ${testimonial.author}`}
                  className="rounded-full h-16 w-16"
                />
              ) : null}
              <span className="italic mb-0 flex flex-col gap-2">
                {testimonial.author}
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {testimonial.company}
                </a>
              </span>
            </div>
          </article>
        ))}
      </section>
    </article>
  )
}
