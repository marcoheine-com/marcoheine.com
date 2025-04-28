import { CustomLink } from '../customlink'

export const RichTextSerializer = {
  hyperlink: ({ node, children }) => (
    <CustomLink href={node.data.url}>{children}</CustomLink>
  ),
  paragraph: ({ children }) => (
    <p className="mb-0 [&:not(:first-of-type)]:mt-4">{children}</p>
  ),
  preformatted: ({ children }) => (
    <pre className="mt-4 overflow-auto whitespace-pre-wrap rounded-lg bg-gray-100 p-4 md:p-8">
      {children}
    </pre>
  ),
}
