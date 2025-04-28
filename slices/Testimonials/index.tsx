import { CustomLink } from '@/components/customlink'
import { TestimonialsSliceDefaultPrimaryItemItem } from '@/prismicio-types'
import { filledLinkTypeGuard } from '@/types/isFilledLink'
import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>

const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section className="mx-auto mt-8 flex max-w-7xl flex-col items-center lg:mt-32">
      <h2
        id="testimonials"
        className="mb-12 text-center"
      >
        {slice.primary?.title}
      </h2>
      <section className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        {slice.primary.item?.map(
          (
            testimonial: TestimonialsSliceDefaultPrimaryItemItem,
            index: number
          ) => {
            return (
              <article key={index}>
                <PrismicRichText field={testimonial.text} />

                <div className="flex items-center gap-4">
                  {testimonial.image.url ? (
                    <Image
                      src={testimonial.image.url}
                      width={64}
                      height={64}
                      alt={`a picture of ${testimonial.image.alt}`}
                      className="w-16 rounded-full"
                    />
                  ) : null}
                  <span className="mb-0 flex flex-col gap-2 italic">
                    {testimonial.name}
                    <CustomLink
                      href={
                        filledLinkTypeGuard(testimonial.link)
                          ? testimonial.link.url
                          : '/'
                      }
                    >
                      {testimonial.linklabel}
                    </CustomLink>
                  </span>
                </div>
              </article>
            )
          }
        )}
      </section>
    </section>
  )
}

export default Testimonials
