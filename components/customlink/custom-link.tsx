import Link from 'next/link'
interface CustomLinkProps {
  children?: React.ReactNode
  href: string
  isCodePen?: boolean
  className?: string
  isActive?: boolean
}

export const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const { isCodePen, children, className, isActive, href } = props

  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className={`${
          isActive
            ? 'border-b-2 border-solid border-primaryColorTwo'
            : 'border-b-2 border-dotted'
        } border-b-primaryColorTwo hover:border-solid ${className}`}
      >
        {props.children}
      </Link>
    )
  }

  return (
    <a
      rel={'noopener noreferrer'}
      className={`outgoing-link-trigger border-b-2 border-dotted border-b-primaryColorTwo hover:border-solid ${
        isCodePen ? 'mb-4 inline-block' : ''
      } ${className}`}
      href={href}
    >
      {children} <span aria-hidden> &#8599;</span>
    </a>
  )
}
