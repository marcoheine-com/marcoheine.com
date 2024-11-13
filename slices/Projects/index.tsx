import { CallToAction } from '@/components/call-to-action'
import { CustomLink } from '@/components/customlink'
import { RichTextSerializer } from '@/components/richtext-serializer'
import { ProjectsSliceDefaultPrimaryProjectsItem } from '@/prismicio-types'
import { filledLinkTypeGuard } from '@/types/isFilledLink'
import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import * as React from 'react'

export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>

const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  const renderCta = () => {
    if (!slice.primary.cta) {
      return null
    }

    if (slice.primary.ctaStyle === 'Button') {
      return (
        <CallToAction
          href={
            filledLinkTypeGuard(slice.primary.cta) ? slice.primary.cta.url : '/'
          }
        >
          {slice.primary.cta_label}
        </CallToAction>
      )
    }

    return (
      <CustomLink
        href={
          filledLinkTypeGuard(slice.primary.cta) ? slice.primary.cta.url : '/'
        }
        className="mx-auto"
      >
        → {slice.primary.cta_label}
      </CustomLink>
    )
  }

  return (
    <section
      className="mx-auto mt-8 flex max-w-5xl flex-col items-center lg:mt-32"
      id={slice.primary.anchor}
    >
      <PrismicRichText
        field={slice.primary.intro}
        components={{
          paragraph: ({ children }) => <p className="max-w-3xl">{children}</p>,
        }}
      />
      <section className={`my-8 grid gap-y-8 md:grid-cols-1`}>
        {slice.primary.projects.map(
          (project: ProjectsSliceDefaultPrimaryProjectsItem, index: number) => {
            const filledLink = filledLinkTypeGuard(project.link)
              ? project.link
              : null
            return (
              <React.Fragment key={index}>
                <section className="grid gap-y-8 gap-x-12 bg-gradient-to-l md:grid-cols-2 md:gap-y-16">
                  <PrismicNextLink
                    href={filledLink.url}
                    className={` ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  >
                    <Image
                      alt={project.image.alt}
                      src={project.image.url}
                      className={`rounded-lg shadow-custom transition-all hover:-translate-y-1 hover:shadow-customDark`}
                      sizes="(min-width: 768px) 100vw, (min-width: 1024px) 50vw, 100vw"
                      width={project.image.dimensions.width}
                      height={project.image.dimensions.height}
                    />
                  </PrismicNextLink>

                  <article className="flex flex-col justify-center">
                    <PrismicRichText
                      field={project.content}
                      components={RichTextSerializer}
                    />
                  </article>
                </section>
              </React.Fragment>
            )
          }
        )}
      </section>

      {renderCta()}
    </section>
  )
}

export default Projects
