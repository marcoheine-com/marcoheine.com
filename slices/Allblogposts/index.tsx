import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Allblogposts`.
 */
export type AllblogpostsProps = SliceComponentProps<Content.AllblogpostsSlice>

/**
 * Component for "Allblogposts" Slices.
 */
const Allblogposts = ({ slice }: AllblogpostsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for allblogposts (variation: {slice.variation})
      Slices
    </section>
  )
}

export default Allblogposts
