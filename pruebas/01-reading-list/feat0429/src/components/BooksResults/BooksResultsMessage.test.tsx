import { describe, test, afterEach, expect } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { BooksResultsMessage } from './BooksResultsMessage'

describe('<BooksResultsMessage />', () => {
  afterEach(cleanup)

  test('should render message entered as prop', async () => {
    render(
        <BooksResultsMessage message='test-message' />
    )
    const message = screen.getByText('test-message')
    expect(message).toBeDefined()
  })

  test('should render message with entered font color as prop', async () => {
    render(
        <BooksResultsMessage message='test-message' fontColor='blue' />
    )
    const message = screen.getByText('test-message')
    const fontColor = message.style.color
    expect(fontColor).toBe('blue')
  })

  test('should render child element ', async () => {
    render(
        <BooksResultsMessage message='test-message' fontColor='blue'>
            <span>Child Element</span>
        </BooksResultsMessage>
    )

    const childElement = screen.getByText('Child Element').closest('div')
    expect(childElement).toBeDefined()
  })
})
