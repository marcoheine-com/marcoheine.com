import { RichTextSerializer } from '@/components/richtext-serializer'
import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

export type RichtextProps = SliceComponentProps<Content.RichtextSlice>

const Richtext = ({ slice }: RichtextProps): JSX.Element => {
  return (
    <section className="mt-8 max-w-4xl lg:mt-16">
      <PrismicRichText
        field={slice.primary.richtext}
        components={RichTextSerializer}
      />
    </section>
  )
}

export default Richtext
