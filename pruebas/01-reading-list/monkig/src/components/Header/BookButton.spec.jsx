import { cleanup, fireEvent, getByText, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import BookButton from './BookButton'

import BooksProvider from '../../context/BooksContext'
import UserProvider from '../../context/UserContext'
import AvailableBooksSection from '../AvailableBooksSection'
import ReadingList from '../ReadingList'

describe('BookButton test', () => {
  const TestComponent1 = () => {
    return (
      <BooksProvider>
        <BookButton/>
      </BooksProvider>
    )
  }
  const TestComponent2 = () => {
    return (
      <BooksProvider>
        <UserProvider>
          <>
            <BookButton/>
            <AvailableBooksSection/>
            <ReadingList/>
          </>
        </UserProvider>
      </BooksProvider>
    )
  }
  afterEach(cleanup)

  test('Sould render the component', () => {
    render(<TestComponent1/>)
  })

  test('Should have semantic tags', () => {
    const { container } = render(<TestComponent1/>)

    const button = container.querySelector('button')
    const svg = container.querySelector('svg')
    const spans = container.querySelectorAll('span')

    expect(button).toBeDefined()
    expect(svg).toBeDefined()
    expect(spans).toBeDefined()
  })

  test('Shouldn\'t show the list items', () => {
    render(<TestComponent1/>)
    const spanValue = screen.queryByText('0')
    expect(spanValue).toBeNull()
  })

  test('Should show the list items', () => {
    const { container } = render(<TestComponent2 />)
    fireEvent(
      getByText(container, 'El Señor de los Anillos'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )
    const spanValue = screen.getByText('1')
    expect(spanValue).toBeDefined()

    fireEvent(
      getByText(container, 'Juego de Tronos'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )
    const spanValue2 = screen.getByText('2')
    expect(spanValue2).toBeDefined()

    const userReadingList = container.querySelector('#readingListSection')
    fireEvent(
      getByText(userReadingList, 'El Señor de los Anillos'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )
    const spanValue3 = screen.queryByText('1')
    expect(spanValue3).toBeDefined()
  })
})
