import { test, expect } from 'vitest';
import {  render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

const bookTitle = 'El Señor de los Anillos'

test('The app shows the books', () => {
  const app = render(<App />)
  const title = app.getByRole('heading', {name: bookTitle} )
   
  expect(title).toBeTruthy()
})
test('The app show de book list', async () => {
  const user = userEvent.setup()
  const app = render(<App />)

  const buttonToAddBook = app.getAllByRole('button', { name: 'Agregar a lista de lectura' })[0]
  
  await user.click(buttonToAddBook)
  const result = app.getAllByRole('heading', {name: 'Lista de lectura'})
  expect(result).toBeTruthy()
})