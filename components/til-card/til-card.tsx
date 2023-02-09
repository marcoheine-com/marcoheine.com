import * as React from 'react'
import { TagName } from '@/lib/til'
import Link from 'next/link'

interface TILCardProps {
  title: string
  slug: string
  number: number
  tags?: TagName[]
  description: string
}

export const TILCard: React.FC<TILCardProps> = ({
  title,
  slug,
  number,
  tags,
  description,
}) => {
  return (
    <Link
      key={slug}
      href={`/${slug}`}
      replace
    >
      <section className="rounded-3xl p-8 text-primaryColorOne shadow-custom transition-all duration-100 ease-linear hover:translate-y-[-5px] hover:shadow-customHover md:p-10">
        <aside className="mb-3 inline-block rotate-3 border-[3px] border-dotted border-primaryColorOne bg-white py-2 px-4 font-bold text-primaryColorOne transition-all duration-100 ease-linear hover:rotate-0 hover:bg-primaryColorOne hover:text-white ">
          TIL #{number}
        </aside>
        <h2>{title}</h2>

        {tags?.length > 0 && (
          <section className="mb-4 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                className="font-bold"
                key={tag}
              >
                #{tag}
              </span>
            ))}
          </section>
        )}

        <section>
          <p>{description}</p>
          <span className="text-primaryColorTwo before:mr-1 before:text-primaryColorOne before:transition-[margin] before:duration-200 before:ease-linear before:content-['→'] hover:text-linkHover hover:before:mr-0 hover:before:ml-1">
            Read more
          </span>
        </section>
      </section>
    </Link>
  )
}
