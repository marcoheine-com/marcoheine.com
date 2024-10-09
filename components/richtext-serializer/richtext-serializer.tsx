import { CustomLink } from '../customlink'

export const RichTextSerializer = {
  hyperlink: ({ node, children }) => (
    <CustomLink href={node.data.url}>{children}</CustomLink>
  ),
}
