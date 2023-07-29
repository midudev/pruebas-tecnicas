import React from 'react'

import ListOfBooks from '../src/components/Book/ListOfBook'
import { IBook } from '../src/interfaces/IBooks'
import { BookContextProvider } from '../src/context/BookContext'

import { afterEach, describe, it } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import { DragDropContext } from 'react-beautiful-dnd'

const BOOKS: IBook[] = [
  {
    book: {
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
    },
  },
]

describe('ListOfBooks', (): void => {
  afterEach(cleanup)
  it('should render list of books', () => {
    render(
      <BookContextProvider>
        <DragDropContext onDragEnd={() => {}}>
          <ListOfBooks library={BOOKS} title={'Test title'} left={false} />
        </DragDropContext>
      </BookContextProvider>
    )
  })
})
