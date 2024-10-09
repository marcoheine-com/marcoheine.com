import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Pageheader`.
 */
export type PageheaderProps = SliceComponentProps<Content.PageheaderSlice>

/**
 * Component for "Pageheader" Slices.
 */
const Pageheader = ({ slice }: PageheaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for pageheader (variation: {slice.variation}) Slices
    </section>
  )
}

export default Pageheader
