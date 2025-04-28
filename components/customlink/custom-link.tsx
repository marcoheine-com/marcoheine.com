import Link from 'next/link'
interface CustomLinkProps {
  children?: React.ReactNode
  href: string
  isCodePen?: boolean
  className?: string
}

export const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const isInternalLink =
    props.href && (props.href.startsWith('/') || props.href.startsWith('#'))
  if (isInternalLink) {
    return (
      <Link
        href={props.href}
        {...props}
        className={`border-b-2 border-dotted border-b-primaryColorTwo hover:border-solid ${props.className}`}
      >
        {props.children}
      </Link>
    )
  }
  const { isCodePen, children, ...rest } = props
  return (
    <a
      rel={'noopener noreferrer'}
      className={`outgoing-link-trigger border-b-2 border-dotted border-b-primaryColorTwo hover:border-solid ${
        isCodePen ? 'mb-4 inline-block' : ''
      }`}
      {...rest}
    >
      {children} <span aria-hidden> &#8599;</span>{' '}
    </a>
  )
}
