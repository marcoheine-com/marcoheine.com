import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Textmedia`.
 */
export type TextmediaProps = SliceComponentProps<Content.TextmediaSlice>

/**
 * Component for "Textmedia" Slices.
 */
const Textmedia = ({ slice }: TextmediaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for textmedia (variation: {slice.variation}) Slices
    </section>
  )
}

export default Textmedia
