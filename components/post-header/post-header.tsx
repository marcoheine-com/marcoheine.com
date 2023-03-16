import { CustomLink } from '@/components/customlink'

export const PostHeader = ({
  date,
  updated,
  timeToRead,
  slug,
  type,
}: {
  date: string
  updated?: string
  timeToRead?: number
  slug: string
  type: 'blog' | 'today-i-learned'
}) => {
  return (
    <section className="mb-8 flex flex-col gap-4 pt-4 text-base sm:flex-row sm:gap-16">
      <time
        dateTime={date}
        className="mb-0"
      >
        🗓 {date}
      </time>
      {timeToRead && (
        <time
          dateTime={timeToRead.toString()}
          className="mb-0"
        >
          ⏱ {timeToRead} min read
        </time>
      )}

      {updated && (
        <time
          dateTime={date}
          className="mb-0"
        >
          🔔 Last Updated: {updated}
        </time>
      )}
      <CustomLink
        href={`https://github.com/marcoheine-com/marcoheine.com/edit/main/${type}/${slug}.mdx`}
      >
        Edit this Post
      </CustomLink>
    </section>
  )
}
