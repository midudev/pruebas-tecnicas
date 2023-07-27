import { test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BooksAvailable } from './components/BooksAvailable'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import booksFilteredSlice from './redux/states/booksFiltered'

test('Add books to reading list', () => {
  const store = configureStore({
    reducer: {
      booksFiltered: booksFilteredSlice
    }
  })

  render(
    <Provider store={store}>
      <BooksAvailable />
    </Provider>
  )

  screen.getByAltText('El Señor de los Anillos')

  const firstBook = screen.getByAltText('El Señor de los Anillos')

  fireEvent.click(firstBook)

  expect(screen.queryByAltText('El Señor de los Anillos')).toBeNull()
})
