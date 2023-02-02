import React from 'react'
import CoffeeLink from './CoffeeLink'

export const CoffeeHint = () => {
  return (
    <section className="my-10 flex flex-col bg-[#edf6ff] px-10 pt-5 pb-2 md:ml-6">
      <h3>Hi Friend!</h3>
      <p>
        If you enjoy my writings and learn something from them, you can consider
        to <strong>support me</strong>! One way of doing this is just as easy as{' '}
        <strong>buying me a Coffee!</strong>
      </p>

      <p>
        Thanks so much! This means a lot to me and is a great way to{' '}
        <strong>support my work</strong>.
      </p>
      <CoffeeLink />
    </section>
  )
}
