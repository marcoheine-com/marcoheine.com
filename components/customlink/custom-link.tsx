import Link from 'next/link'
interface CustomLinkProps {
  href: string
  children: React.ReactNode
}

export const CustomLink: React.FC<CustomLinkProps> = (props) => {
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
