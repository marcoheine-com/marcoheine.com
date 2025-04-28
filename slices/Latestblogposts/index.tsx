import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Latestblogposts`.
 */
export type LatestblogpostsProps =
  SliceComponentProps<Content.LatestblogpostsSlice>

/**
 * Component for "Latestblogposts" Slices.
 */
const Latestblogposts = ({ slice }: LatestblogpostsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for latestblogposts (variation: {slice.variation})
      Slices
    </section>
  )
}

export default Latestblogposts
