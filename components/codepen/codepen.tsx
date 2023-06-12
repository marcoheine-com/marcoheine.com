import { CustomLink } from '@/components/customlink'

interface CodePenComponentProps {
  className?: string
  id: string
  title: string
}

export const CodePenComponent: React.FC<CodePenComponentProps> = ({
  id,
  title,
}) => {
  return (
    // Re-using Custom Link here, because I removed the CodePen embed and did not want to change the MDX files.
    <CustomLink
      href={`https://codepen.io/Mkuehb/pen//${id}`}
      isCodePen
    >
      CodePen - {title}
    </CustomLink>
  )
}
