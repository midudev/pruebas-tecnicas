'use client'
import React from 'react'

interface IButton extends IWithClassName {
  onClick: ()=> void
  children: React.ReactNode
}

export default function Button (props: IButton) {
  const { children, className = '', onClick } = props

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
