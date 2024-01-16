import { describe, test, expect, beforeAll } from 'vitest'
import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { Slider } from './Slider'
import { ARIA_LABELS } from '../../constants/aria-labels'
import { Globals } from '@react-spring/web'
import { useFetchBooks } from '../../hooks/useFetchBooks'

describe('<Slider />', () => {
  beforeAll(() => {
    Globals.assign({
      skipAnimation: true
    })
  })

  test('if slider continues to next book after 5s', async () => {
    renderHook(() => { useFetchBooks() })

    const rerender = await act(async () => {
      const { rerender } = render(<Slider />)

      return rerender
    })

    const bookAuthorElement = screen.getByRole('heading', { name: ARIA_LABELS.BookAuthor })
    const bookAuthorFirstValue = bookAuthorElement.innerHTML

    setTimeout(() => {
      rerender(<Slider />)
    }, 6000)

    await waitFor(() => {
      expect(bookAuthorElement.innerHTML !== bookAuthorFirstValue).toBeTruthy()
    }, { timeout: 8000 })
  }, { timeout: 10000 })
})
