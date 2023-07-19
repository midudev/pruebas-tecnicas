'use client'
import React from 'react'

interface IButton extends IWithClassName {
  onClick: ()=> void
  children: React.ReactNode
}

export default function Button (props: IButton) {
  const { children, onClick } = props

  return (
    <button
      // className='bg-white text-gray-800 text-sm  w-full rounded-full'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
