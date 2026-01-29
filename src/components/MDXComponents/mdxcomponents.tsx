import { CustomLink } from '@/components/customlink'
import { CoffeeHint } from '@/components/coffeehint'
import Image from 'next/image'
import { CodePenComponent } from '@/components/codepen'

export const mdxcomponents = {
  CoffeeHint: CoffeeHint,
  pre: ({ children }) => <pre class="mb-12">{children}</pre>,
  a: (props) => <CustomLink {...props}>{props.children}</CustomLink>,
  hr: () => <hr class="my-10" />,
  Image: (props) => (
    <Image
      alt={props.alt}
      class="mt-8 mb-16"
      {...props}
    />
  ),
  blockquote: ({ children }) => (
    <blockquote class="mx-4 my-8 border-l-4 border-l-primaryColorTwo bg-yellowredgrey p-4">
      {children}
    </blockquote>
  ),
  CodePen: CodePenComponent,
}
