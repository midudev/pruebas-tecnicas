import React from 'react'

import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

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

const left = true

describe('CardBook', (): void => {
  afterEach(cleanup)
  it('should render Card Book', (): void => {
    render(<CardBook book={BOOK} MoveBook={() => {}} left={left} />)
  })
  it('should render title', (): void => {
    render(<CardBook book={BOOK} MoveBook={() => {}} left={left} />)
    screen.findByText(BOOK.title)
  })
  it('should render extra (info)', (): void => {
    render(<CardBook book={BOOK} MoveBook={() => {}} left={left} />)
    const button = screen.getByTestId('viewInfo')
    fireEvent.click(button)
    screen.findByText(BOOK.year)
    screen.findByText(BOOK.author.name)
    screen.findByText(BOOK.synopsis)
  })
  it('should render button (add reading list)', (): void => {
    render(<CardBook book={BOOK} MoveBook={() => {}} left={left} />)
    screen.findByTitle('Añadir a tu lista de lectura')
  })
  it('should render button (delete reading list)', (): void => {
    render(<CardBook book={BOOK} MoveBook={() => {}} left={left} />)
    const addToReadingList = screen.getByTitle('Añadir a tu lista de lectura')
    fireEvent.click(addToReadingList)
    expect(screen.findByTitle('Eliminar de tu lista de lectura'))
  })
})
