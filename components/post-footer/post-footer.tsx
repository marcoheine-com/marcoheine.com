import { CustomLink } from '@/components/customlink'
import { CallToAction } from '../call-to-action'

export const PostFooter: React.FC = () => {
  return (
    <section className="self-start">
      <hr className="mt-12 mb-6" />

      <p>
        I hope you enjoyed this post and learned something new. If you have any
        questions, feel free to reach out to me via{' '}
        <CustomLink href="mailto:hello@marcoheine.com">Email</CustomLink>.
      </p>
      <p>
        If you want to support me, you can buy me a coffee. I would be very
        happy about it!
      </p>
      <CallToAction href="https://www.buymeacoffee.com/marcoheine">
        <span
          role="img"
          aria-label="coffee emoji"
        >
          ☕️
        </span>{' '}
        Buy me a coffee{' '}
      </CallToAction>
      <p className="mt-4">I wish you a wonderful day! Marco</p>
    </section>
  )
}
