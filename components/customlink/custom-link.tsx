import Link from 'next/link'
interface CustomLinkProps {
  children?: React.ReactNode
  href: string
  isCodePen?: boolean
  className?: string
  color?: 'white' | 'red'
}

export const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const color =
    props.color === 'white'
      ? 'border-b-white text-white hover:text-white'
      : 'border-b-primaryColorTwo'
  const isInternalLink =
    props.href && (props.href.startsWith('/') || props.href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link
        href={props.href}
        {...props}
        className={`border-b-2 border-dotted ${color} hover:border-solid ${props.className}`}
      >
        {props.children}
      </Link>
    )
  }

  const { isCodePen, children, className, ...rest } = props

  return (
    <a
      rel={'noopener noreferrer'}
      className={`outgoing-link-trigger border-b-2 border-dotted ${color} hover:border-solid ${
        isCodePen ? 'mb-4 inline-block' : ''
      } ${className}`}
      {...rest}
    >
      {children} <span aria-hidden> &#8599;</span>
    </a>
  )
}
