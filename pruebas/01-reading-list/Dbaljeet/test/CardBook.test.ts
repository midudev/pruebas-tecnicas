import { afterEach, describe, it } from 'vitest'
import { cleanup, render } from '@testing-library/react'

import { IBookCard } from '../src/interfaces/IBooks'

import CardBook from '../src/components/Book/CardBook'

const BOOK: IBookCard = {
  title: 'El Señor de los Anillos',
  pages: 1200,
  genre: 'Fantasía',
  cover:
    'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
  synopsis:
    'Una aventura épica en un mundo de fantasía llamado la Tierra Media.',
  year: 1954,
  ISBN: '978-0618640157',
  author: {
    name: 'J.R.R. Tolkien',
    otherBooks: ['El Hobbit', 'El Silmarillion'],
  },
}

const left = false

describe('CardBook', (): void => {
  afterEach(cleanup)
  it('should render Card Book', () => {
    render(CardBook({ book: BOOK, left, MoveBook() {} }))
  })
})
