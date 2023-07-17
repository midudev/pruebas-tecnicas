import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, test, expect } from 'vitest'
import Header from './Header'
import UserProvider from '../../context/UserContext'
import BooksProvider from '../../context/BooksContext'

const TestComponent = () => {
  return (
    <BooksProvider>
      <UserProvider>
        <Header />
      </UserProvider>
    </BooksProvider>
  )
}

describe('Header', () => {
  afterEach(cleanup)
  test('Should render the header', () => {
    render(<TestComponent/>)
  })

  test('Should have semantic tags', () => {
    const { container } = render(<TestComponent/>)

    const header = container.querySelector('header')
    const h1Tag = container.querySelector('h1')
    const nav = container.querySelector('nav')
    const form = container.querySelector('form')
    const button = container.querySelector('button')

    expect(header).toBeDefined()
    expect(h1Tag).toBeDefined()
    expect(nav).toBeDefined()
    expect(form).toBeDefined()
    expect(button).toBeDefined()
  })
})
