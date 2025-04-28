import { CallToAction } from '@/components/call-to-action'
import { filledLinkTypeGuard } from '@/types/isFilledLink'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

export type CtaProps = SliceComponentProps<Content.CtaSlice>

const Cta = ({ slice }: CtaProps): JSX.Element => {
  const href = filledLinkTypeGuard(slice.primary.link)
    ? slice.primary.link.url
    : '/'
  return (
    <section className="mx-auto mt-8 max-w-2xl">
      <CallToAction href={href}>{slice.primary.label}</CallToAction>
    </section>
  )
}

export default Cta
