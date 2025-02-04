import { CustomLink } from '../customlink'

export const Tags = ({ tags }) => {
  return tags.length > 0 ? (
    <ul className="m-0 flex list-none gap-4">
      <li key={'all'}>
        <CustomLink href={`/blog`}>All</CustomLink>
      </li>
      {tags.map((category) => (
        <li key={category.uid}>
          <CustomLink href={`/blog/category/${category.uid}`}>
            {category.data.title}
          </CustomLink>
        </li>
      ))}
    </ul>
  ) : null
}
