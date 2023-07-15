import { cleanup, render } from '@testing-library/react'
import { describe, test, afterEach, expect } from 'vitest'
import MainNavigation from './MainNavigation'
import UserProvider from '../../context/UserContext'
import BooksProvider from '../../context/BooksContext'

describe('MainNavigation', () => {
  const TestComponent = () => {
    return (
    <BooksProvider>
      <UserProvider>
        <MainNavigation/>
      </UserProvider>
    </BooksProvider>
    )
  }

  afterEach(cleanup)

  test('Should render the header', () => {
    render(<TestComponent/>)
  })

  test('Should have semantic tags', () => {
    const { container } = render(<TestComponent/>)

    const nav = container.querySelector('nav')
    const form = container.querySelector('form')
    const button = container.querySelector('button')
    expect(nav).toBeDefined()
    expect(form).toBeDefined()
    expect(button).toBeDefined()
  })
})
