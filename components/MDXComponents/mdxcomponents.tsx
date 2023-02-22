import { CoffeeHint } from 'components/coffeehint'
import Image from 'next/image'
import Link from 'next/link'

const CustomLink = (props) => {
  const isInternalLink =
    props.href && (props.href.startsWith('/') || props.href.startsWith('#'))
  if (isInternalLink) {
    return (
      <Link
        href={props.href}
        {...props}
        className="hover:border-b-2 hover:border-dotted hover:border-b-primaryColorTwo"
      >
        {props.children}
      </Link>
    )
  }
  return (
    <a
      target={'_blank'}
      rel={'noopener noreferrer'}
      className="outgoing-link-trigger break-all border-b-4 border-b-transparent hover:border-dotted hover:border-b-primaryColorTwo"
      {...props}
    >
      {props.children} <span> &#8599;</span>
    </a>
  )
}

const CodePenComponent = ({ id }) => {
  return (
    <div className="mb-12">
      <p
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="codepen"
        data-height="400"
        data-default-tab="css,result"
        data-slug-hash={id}
        data-preview="true"
        data-editable="true"
        data-user="Mkuehb"
        style={{
          height: '300px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid',
          margin: '1em 0',
          padding: '1em',
        }}
      />
    </div>
  )
}

export const mdxcomponents = {
  CoffeeHint: CoffeeHint,
  pre: ({ children }) => <pre className="mb-12">{children}</pre>,
  a: CustomLink,
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
