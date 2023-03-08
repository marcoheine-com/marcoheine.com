import { CustomLink } from '@/components/customlink'

interface CodePenComponentProps {
  id: string
  title: string
  defaultTab?: string
}

export const CodePenComponent: React.FC<CodePenComponentProps> = ({
  id,
  title,
  defaultTab = 'css%2Cresult',
}) => {
  return (
    <div className="mb-12">
      <iframe
        height="400"
        style={{ width: '100%' }}
        title={title}
        src={`https://codepen.io/Mkuehb/embed/preview/${id}?default-tab=${defaultTab}&editable=true`}
        loading="lazy"
      ></iframe>
    </div>
  )
}
