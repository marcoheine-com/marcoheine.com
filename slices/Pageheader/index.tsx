import { Content } from '@prismicio/client'
import { PrismicText, SliceComponentProps } from '@prismicio/react'

export type PageheaderProps = SliceComponentProps<Content.PageheaderSlice>

const Pageheader = ({ slice }: PageheaderProps): JSX.Element => {
  return (
    <h1 className="mb-20 text-center">
      <PrismicText field={slice.primary.headline} />
    </h1>
  )
}

export default Pageheader
