import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

export type RichtextProps = SliceComponentProps<Content.RichtextSlice>

const Richtext = ({ slice }: RichtextProps): JSX.Element => {
  return (
    <section className="mx-auto max-w-2xl">
      <PrismicRichText field={slice.primary.richtext} />
    </section>
  )
}

export default Richtext
