import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button
      class="cursor-pointer border-[2px] border-solid border-primaryColorTwo bg-none py-3 px-10 hover:bg-primaryColorTwo hover:text-white"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button
