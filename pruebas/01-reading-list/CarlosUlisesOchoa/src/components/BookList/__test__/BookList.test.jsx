import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import BookList from '@/components/BookList/BookList'
import { books } from '@/const/books'

describe('BookList', () => {
  it('should render empty list message when no books are available', () => {
    const { getByText } = render(<BookList booksArray={[]} />)
    expect(
      getByText(
        /No se han encontrado libros que coincidan con tus criterios de búsqueda./
      )
    ).toBeTruthy()
  })

  it('should render the books library if data is received', () => {
    const { getByText } = render(<BookList booksArray={books} />)
    expect(getByText(/El Señor de los Anillos/)).toBeTruthy()
  })

  // test('renders empty list message when no books are available', () => {
  //   const { getByText } = render(<BookList booksArray={[]} />)
  //   expect(
  //     getByText(/No se han encontrado libros que coincidan con tus criterios de búsqueda./)
  //   ).toBeInTheDocument()
  // })

  // test('renders books when available', () => {
  //   const books = [
  //     { ISBN: '123', title: 'Book1' },
  //     { ISBN: '124', title: 'Book2' },
  //   ]
  //   const { getByText } = render(<BookList booksArray={books} />)
  //   expect(getByText('Book1')).toBeInTheDocument()
  //   expect(getByText('Book2')).toBeInTheDocument()
})
