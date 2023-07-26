import { test, expect, afterEach } from 'vitest'
import { fireEvent, render, waitFor } from '@testing-library/react'
import App from '../App'
import { BooksProvider } from '../context/BooksProvider'

/**
 * Es de las primeras veces que hago test y hay muchas cosas que tengo que revisar
 * y no me ha dado tiempo ya que el propio día 27 no voy a poder ponerme.
 */

afterEach(() => {
  window.localStorage.clear()
  window.document.body.innerHTML = ''
})

test('The app works as expected', () => {
  const app = render(<App />)
  const { getByText } = app
  expect(getByText('LibrosApp')).toBeTruthy()
})

test('The app load at least 2 books', async () => {
  const app = render(
    <BooksProvider>
      <App />
    </BooksProvider>
  )

  let books
  await waitFor(() => {
    books = app.container.querySelectorAll('li.book')
    if (books.length <= 1) throw new Error('No books found') // Así pk es un render del array y en cada render pinta 1.
  }, { timeout: 15000 })

  expect(books.length).toBeGreaterThan(1)
})

test('The app sets at least 1 book in readlist', async () => {
  const app = render(
    <BooksProvider>
      <App />
    </BooksProvider>
  )

  let book

  await waitFor(() => {
    book = app.container.querySelector('li.book')
    if (book == null) throw new Error('No book found')
  }, { timeout: 5000 })

  const button = book.querySelector('button')
  if (button == null) throw new Error('No book found')
  fireEvent.click(button)

  let readList
  await waitFor(() => {
    readList = app.container.querySelectorAll('aside.read-list ul.user-books li.book')
    if (readList == null) throw new Error('No readlist found')
  }, { timeout: 5000 })

  expect(readList.length).toBeGreaterThan(0)
})
