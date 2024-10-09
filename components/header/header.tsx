import { config } from 'config'
import Link from 'next/link'
import Navigation from '../navigation'
import { HeaderDocument } from '@/prismicio-types'
import { Language } from '@prismicio/client'

const Header = ({
  header,
  locales,
}: {
  header: HeaderDocument
  locales: Language[]
}) => {
  return (
    <header className="transition-all duration-200 ease-in-out hover:shadow-header">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between px-5 lg:flex-row lg:items-center">
        <span className="font-merriweather my-5 inline-block text-[28px]">
          <Link
            href="/"
            className="text-primaryColorOne no-underline hover:border-b-0"
          >
            {config.author}
            <span className="animate-blink">_</span>
          </Link>
        </span>

        <Navigation
          header={header}
          locales={locales}
        />
      </div>
    </header>
  )
}

export default Header
