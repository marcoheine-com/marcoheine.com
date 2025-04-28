import { useRouter } from 'next/router'
import { BlogCategoryWithCount } from '@/pages/blog'
import Link from 'next/link'

export const Tags = ({ tags }: { tags: BlogCategoryWithCount[] }) => {
  const router = useRouter()

  return tags?.length > 0 ? (
    <ul className="m-0 flex list-none flex-wrap gap-4">
      <li key={'all'}>
        <Link
          href={`/blog`}
          className={`rounded border-2 border-transparent px-2 py-1 text-white hover:border-solid ${
            !router.query.uid
              ? 'border-primaryColorTwo bg-white text-primaryColorTwo hover:bg-primaryColorTwo hover:text-white'
              : 'bg-primaryColorTwo hover:border-primaryColorTwo hover:bg-white hover:text-primaryColorTwo'
          }`}
        >
          All
        </Link>
      </li>
      {tags.map((category) => {
        return (
          <li key={category.uid}>
            <Link
              href={`/blog/category/${category.uid}`}
              className={`rounded border-2 border-transparent px-2 py-1 hover:border-solid ${
                category.uid === router.query.uid
                  ? 'border-primaryColorTwo bg-white text-primaryColorTwo hover:bg-primaryColorTwo hover:text-white'
                  : 'bg-primaryColorTwo text-white hover:border-primaryColorTwo hover:bg-white hover:text-primaryColorTwo'
              }`}
            >
              {category.data.title}{' '}
              {category.count > 0 ? `(${category.count})` : ''}
            </Link>
          </li>
        )
      })}
    </ul>
  ) : null
}
