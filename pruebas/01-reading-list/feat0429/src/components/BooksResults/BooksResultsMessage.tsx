import componentClasses from './BooksResultsMessage.module.css'
import { type ReactNode } from 'react'

interface BooksResultsMessageProps {
  children?: ReactNode
  message: string
  fontColor?: string
  fontSize?: string
}

export function BooksResultsMessage ({ children, message, fontColor = '#62372d', fontSize = '1em' }: BooksResultsMessageProps) {
  return (
        <div
          className={componentClasses.booksResultContainer}
        >
            {children}
            <h3
              style={{
                color: fontColor,
                fontSize
              }}
            >
              {message}
            </h3>
        </div>

  )
}
