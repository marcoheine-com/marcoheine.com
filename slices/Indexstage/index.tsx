import { CallToAction } from '@/components/call-to-action'
import { RichTextSerializer } from '@/components/richtext-serializer'
import { filledLinkTypeGuard } from '@/types/isFilledLink'
import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'

export type IndexstageProps = SliceComponentProps<Content.IndexstageSlice>

const Indexstage = ({ slice }: IndexstageProps): JSX.Element => {
  const filledLink = filledLinkTypeGuard(slice.primary.link)
    ? slice.primary.link.url
    : null
  return (
    <div className="relative flex max-w-lg flex-col items-start lg:mt-20 lg:max-w-3xl">
      <Link
        href="/work/"
        className="hover-trigger"
      >
        <Image
          alt="A picture of Marco Heine"
          src={slice.primary.image.url}
          className="mb-10 rounded-xl duration-300 lg:mr-64"
          width={500}
          height={500}
          priority
        />
        <h1 className="hover-target mb-12 bg-white text-primaryColorOne lg:absolute lg:left-96 lg:top-24 lg:w-[495px] lg:rounded-md lg:border-4 lg:border-t-0 lg:border-l-white lg:border-b-primaryColorTwo lg:border-r-primaryColorTwo lg:p-5">
          <div
            className="top-6 -left-7 hidden h-0 w-0 border-y-[30px] border-r-[30px] border-y-transparent border-r-white lg:absolute lg:block"
            aria-hidden
          ></div>
          {slice.primary.headline}
        </h1>
      </Link>

      <div className="max-w-lg self-center">
        <PrismicRichText
          field={slice.primary.text}
          components={RichTextSerializer}
        />
        <CallToAction
          href={filledLink}
          isInternalLink
        >
          {slice.primary.linklabel}
        </CallToAction>
      </div>
    </div>
  )
}

export default Indexstage
