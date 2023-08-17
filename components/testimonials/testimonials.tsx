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
      link: 'https://wahnsinn.design/',
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
        {testimonials?.map((testimonial, index) => {
          return Testimonial(testimonial, index)
        })}
      </section>
    </article>
  )
}

const Testimonial = (testimonial, index) => {
  const [readMore, setReadMore] = React.useState(false)
  const { t } = useTranslation()

  const MAX_LENGTH = 250

  const handleReadMore = () => {
    setReadMore(!readMore)
  }

  const trimText = () => {
    const trimmed = testimonial.text[0].content.substr(0, MAX_LENGTH)
    const trimmedContent =
      trimmed.substring(0, Math.min(trimmed.length, trimmed.lastIndexOf(' '))) +
      ' ...'
    return trimmedContent
  }

  const isLongText = testimonial.text[0].content.length > MAX_LENGTH
  const textContent = isLongText ? trimText() : testimonial.text[0].content

  return (
    <article key={index}>
      {readMore ? (
        <>
          {testimonial.text.map((text, index) => (
            <p key={index}>{text.content} </p>
          ))}
        </>
      ) : (
        <p key={index}>{textContent} </p>
      )}

      {isLongText && (
        <button
          className="mb-2 text-primaryColorTwo"
          onClick={() => handleReadMore()}
        >
          {readMore ? t('testimonials.readLess') : t('testimonials.readMore')}
          <span
            className={`inline-block ${
              readMore ? 'rotate-[-90deg]' : 'rotate-90'
            } transition-transform
          duration-300 ease-in-out`}
          >
            &#8594;
          </span>
        </button>
      )}

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
  )
}
