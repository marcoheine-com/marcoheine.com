import CoffeeLink from '@/components/coffeehint/CoffeeLink'
import { CustomLink } from '@/components/customlink'

interface PostFooterProps {
  postType: 'blog' | 'til'
}
export const PostFooter: React.FC<PostFooterProps> = ({ postType }) => {
  return (
    <>
      <hr className="mt-12 mb-6" />

      <p>
        I hope you enjoyed this post and learned something new. If you have any
        questions, feel free to reach out to me on{' '}
        <CustomLink href="https://twitter.com/marcoheine_com">
          Twitter
        </CustomLink>{' '}
        or via <CustomLink href="mailto:hello@marcoheine.com">Email</CustomLink>
        .
      </p>
      <p>
        If you want to support me, you can buy me a coffee. I would be very
        happy about it!
      </p>
      <CoffeeLink />
      <p>I wish you a wonderful day! Marco</p>
    </>
  )
}
