import { describe, test, expect, it } from 'vitest'
import { render, screen, act, fireEvent, renderHook } from '@testing-library/react'
import { PagesFilter } from './PagesFilter'
import { FIELD_LABELS, TEXT_CONTENT } from '../../constants/DOM-text'
import { ARIA_LABELS } from '../../constants/aria-labels'
import { useFetchBooks } from '../../hooks/useFetchBooks'

describe('<PagesFilter />', () => {
  it('should render and display correct text', async () => {
    const pageQuantityPattern = new RegExp(`${TEXT_CONTENT.PagesAbbreviation}`)
    renderHook(() => { useFetchBooks() })

    await act(async () => {
      render(
            <PagesFilter />
      )
    })

    const sliderLabel = screen.getByText(FIELD_LABELS.MinimumPages)
    expect(sliderLabel).toBeDefined()

    const pagesQuantityContainer = screen.getByText(pageQuantityPattern)
    expect(pagesQuantityContainer).toBeDefined()
    expect(pagesQuantityContainer.innerHTML).toMatch(/\d+/)
  })

  test('if slider value is modified then quanitty changes with it', async () => {
    const slider: HTMLInputElement = screen.getByRole('slider', { name: ARIA_LABELS.PagesFilter })
    expect(slider).toBeDefined()

    const pagesQuantityContainer = screen.getByText(/\d+/)
    expect(pagesQuantityContainer).toBeDefined()

    await act(async () => {
      fireEvent.change(slider, { target: { value: 600 } })
    })

    expect(Number(slider.value)).toBe(600)

    const pagesQuantity = pagesQuantityContainer.innerHTML.match(/\d+/)

    if (pagesQuantity != null) {
      expect(pagesQuantity[0]).toBe('600')
    }
  })
})
