import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Richtext`.
 */
export type RichtextProps = SliceComponentProps<Content.RichtextSlice>

/**
 * Component for "Richtext" Slices.
 */
const Richtext = ({ slice }: RichtextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for richtext (variation: {slice.variation}) Slices
    </section>
  )
}

export default Richtext
