import { Link } from 'gatsby-plugin-react-i18next'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import ThomasFischerImg from '../../images/thomas-fischer.1024x1024(1).jpg'

export const Testimonials: React.FC = () => {
  const { t } = useTranslation()
  const testimonials = [
    {
      textPartOne: t('testimonials.one.text.a'),
      textPartTwo: t('testimonials.one.text.b'),
      textPartThree: t('testimonials.one.text.c'),
      author: 'Dom Habersack',
      company: 'fn teach GmbH',
      link: 'https://domhabersack.com/',
      image: 'https://domhabersack.com/dom.jpg',
    },
    {
      textPartOne: t('testimonials.two.text.a'),
      author: 'Thomas Fischer',
      company: 'EARZL GmbH',
      link: 'https://earlz.de/',
      image: ThomasFischerImg,
    },
    {
      textPartOne: t('testimonials.three.text.a'),
      author: 'Natali Bopp',
      company: 'SprintEins',
      link: 'https://www.sprinteins.de/',
    },
    {
      textPartOne: t('testimonials.four.text.a'),
      author: 'Tobi Saussele',
      company: 'Werk8',
      link: 'https://werk8.design/',
    },
  ]

  return (
    <article className="max-w-7xl mb-20">
      <h2 className="text-primaryColorTwo mb-12 text-center">
        {t('work.headline-three')}
      </h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        {testimonials?.map((testimonial, index) => (
          <article key={index}>
            <p>{testimonial.textPartOne}</p>
            <p>{testimonial.textPartTwo}</p>
            <p>{testimonial.textPartThree}</p>
            <div className="flex items-center gap-4">
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="rounded-full h-16 w-16"
                />
              ) : null}
              <span className="italic mb-0 flex flex-col gap-2">
                {testimonial.author}
                <Link
                  to={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {testimonial.company}
                </Link>
              </span>
            </div>
          </article>
        ))}
      </section>
    </article>
  )
}
