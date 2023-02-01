import React from 'react'
import * as ui from './ui'

const CoffeeLink = () => (
  <a
    href="https://www.buymeacoffee.com/marcoheine"
    rel="noopener noreferrer"
    target="_blank"
    className="inline-block self-center rounded-md bg-[#79d6b5] p-2 font-bold text-black hover:text-white"
  >
    <span
      role="img"
      aria-label="coffee emoji"
    >
      ☕️
    </span>{' '}
    Buy me a coffee{' '}
    <span
      role="img"
      aria-label="coffee emoji"
    >
      ☕️
    </span>{' '}
  </a>
)

export default CoffeeLink
