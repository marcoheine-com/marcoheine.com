import { RichTextSerializer } from '@/components/richtext-serializer'
import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

export type RichtextProps = SliceComponentProps<Content.RichtextSlice>

const Richtext = ({ slice }: RichtextProps): JSX.Element => {
  return (
    <section className="mx-auto mt-8 max-w-2xl lg:mt-32">
      <PrismicRichText
        field={slice.primary.richtext}
        components={RichTextSerializer}
      />
    </section>
  )
}

export default Richtext
