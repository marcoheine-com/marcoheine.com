import * as React from 'react'
import { useTranslation } from 'next-i18next'
import DomImg from '../../public/images/dom.jpg'
import ThomasFischerImg from '../../public/images/thomas-fischer.1024x1024(1).jpg'
import ChristopImg from '../../public/images/christop-a-kolb.png'
import Image, { StaticImageData } from 'next/image'

interface Testimonial {
  author: string
  company: string
  link: string
  image?: StaticImageData | string
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
      image: DomImg,
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
      link: 'https://www.werk8.design/',
    },
  ]

  return (
    <article className="mb-20 max-w-7xl">
      <h2
        id="testimonials"
        className="mb-12 text-center text-primaryColorTwo"
      >
        {t('work.headline-three')}
      </h2>
      <section className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        {testimonials?.map((testimonial, index) => (
          <article key={index}>
            {testimonial.text.map((text, index) => (
              <p key={index}>{text.content}</p>
            ))}

            <div className="flex items-center gap-4">
              {testimonial.image ? (
                <Image
                  src={testimonial.image}
                  alt={`a picture of ${testimonial.author}`}
                  className="w-16 rounded-full"
                />
              ) : null}
              <span className="mb-0 flex flex-col gap-2 italic">
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
