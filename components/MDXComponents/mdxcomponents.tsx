import { CustomLink } from '@/components/customlink'
import { CoffeeHint } from '@/components/coffeehint'
import Image from 'next/image'

const CodePenComponent = ({ id, title }) => {
  return (
    <div className="mb-12">
      <iframe
        height="400"
        style={{ width: '100%' }}
        title={title}
        src={`https://codepen.io/Mkuehb/embed/preview/${id}?default-tab=css%2Cresult&editable=true`}
        loading="lazy"
      ></iframe>
      <span>
        See the Pen{' '}
        <CustomLink href={`https://codepen.io/Mkuehb/pen/${id}`}>
          {title}
        </CustomLink>{' '}
        by Marco Heine on <a href="https://codepen.io">CodePen</a>.
      </span>
    </div>
  )
}

export const mdxcomponents = {
  CoffeeHint: CoffeeHint,
  pre: ({ children }) => <pre className="mb-12">{children}</pre>,
  a: (props) => <CustomLink {...props}>{props.children}</CustomLink>,
  hr: () => <hr className="my-10" />,
  Image: (props) => (
    <Image
      alt={props.alt}
      className="mt-8 mb-16"
      {...props}
    />
  ),
  CodePen: CodePenComponent,
}
