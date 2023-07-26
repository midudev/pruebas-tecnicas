import React from 'react'
import './Button.css'

type Props =
| { text: string, style?: React.CSSProperties, onClick: (event: React.MouseEvent<HTMLButtonElement>) => void }

export function Button ({ text, style, onClick }: Props) {
  return (
    <button
      style={style}
      className='primary-button'
      onClick={onClick}
    >
      {text}
    </button>
  )
}
