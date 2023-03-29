interface CodePenComponentProps {
  id: string
  height?: number
  title: string
  defaultTab?: string
}

export const CodePenComponent: React.FC<CodePenComponentProps> = ({
  id,
  height = 400,
  title,
  defaultTab = 'css%2Cresult',
}) => {
  return (
    <div className="mb-12">
      <iframe
        height={height}
        style={{ width: '100%' }}
        title={title}
        src={`https://codepen.io/Mkuehb/embed/preview/${id}?default-tab=${defaultTab}&editable=true`}
        loading="lazy"
      ></iframe>
    </div>
  )
}
