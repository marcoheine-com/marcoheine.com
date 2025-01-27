import { BlogcategoryDocument } from '@/prismicio-types'
import { CustomLink } from '../customlink'

export const PostHeader = ({
  date,
  updated,
  categories,
}: {
  date: string
  updated?: string
  categories: any[]
}) => {
  const germanDate = new Date(date).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const germanUpdated = new Date(updated).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <section className="mt-4 flex flex-col gap-4 self-start text-base sm:flex-row sm:gap-16">
      <time
        dateTime={germanDate}
        className="mb-0"
      >
        🗓 {germanDate}
      </time>

      {updated && (
        <time
          dateTime={germanUpdated}
          className="mb-0"
        >
          🔔 Last Updated: {germanUpdated}
        </time>
      )}

      {categories?.length > 0 && (
        <div className="flex gap-2">
          {categories?.map((category) => (
            <CustomLink
              href={`/blog/category/${category.tag.uid}`}
              key={category.tag.id}
            >
              {category.tag.data.title}
            </CustomLink>
          ))}
        </div>
      )}
    </section>
  )
}
