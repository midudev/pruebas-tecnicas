import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import { FilterSection } from '@/components/Filter/FilterSection'

import { FilterProvider, STEPS } from '@/context/filter'
import { BookListProvider } from '@/context/bookList'
import { genres, listBooksAvailable } from '@/assets/values'
import { allGenre } from '@/assets/constants'

expect.extend(matchers)

const pages = listBooksAvailable.map(({ pages }) => pages)
const maxPages = Math.max(...pages)

function renderingWithoutContext() {
  return render(<FilterSection />)
}

function renderWithContext() {
  return render(
    <BookListProvider>
      <FilterProvider>
        <FilterSection />
      </FilterProvider>
    </BookListProvider>
  )
}

describe('<FilterSection />', () => {
  afterEach(() => cleanup())

  it('Without context', () => {
    expect(() => renderingWithoutContext()).toThrowError(/must be used within a/)
  })

  it('When setting the input to zero, the message "Maximum 0" should appear on the screen', () => {
    renderWithContext()

    const input = screen.getByDisplayValue(maxPages)

    expect(input).toBeDefined()

    fireEvent.change(input, { target: { value: 0 } })

    expect(screen.getByText(/^Máximo 0$/)).toBeDefined()
  })

  it(`The default checked book genre is ${allGenre}. By pressing another this is the new genre checked.`, () => {
    renderWithContext()

    const defaultInput = screen.getByDisplayValue(allGenre)

    expect(defaultInput).toBeDefined()
    expect(defaultInput).toBeChecked()

    const genreInput = screen.getByDisplayValue(genres.filter((genre) => genre !== allGenre)[0])

    expect(genreInput).toBeDefined()

    fireEvent.click(genreInput)

    expect(defaultInput).not.toBeChecked()
    expect(genreInput).toBeChecked()
  })

  it('The step of the input radio changes according to the genre set', () => {
    const filters = renderWithContext()

    const inputNumberPages = screen.getByDisplayValue(maxPages)
    const currentStep = Number(inputNumberPages.getAttribute('step'))
    const bookOfMaxPages = listBooksAvailable.find(({ pages }) => pages === maxPages)

    if (!bookOfMaxPages) throw 'Cannot find the book with the largest number of pages'

    /* 
      Searches for books that are not in the genre of the book with the largest number of pages, is not all genres, and the step is not equal to the one with the largest number of pages. To verify that the step value of the input radio has changed.
     */
    const booksOfAnotherGenre = listBooksAvailable.filter(
      ({ genre, pages }) =>
        genre !== bookOfMaxPages.genre && genre !== allGenre && pages / currentStep < 10
    )
    console.log(booksOfAnotherGenre)
    const anotherGenre = [...new Set(booksOfAnotherGenre.map(({ genre }) => genre))]

    const input = screen.getByDisplayValue(anotherGenre[0])

    expect(input).toBeDefined()

    fireEvent.click(screen.getByDisplayValue('Terror'))

    const inputNumberOfPages =
      filters.container.querySelector<HTMLInputElement>('input[type="radio"]')

    if (!inputNumberOfPages) throw 'The number of pages input does not exist'

    const newStep = Number(inputNumberOfPages.getAttribute('step'))

    expect(newStep).not.toEqual(currentStep)
  })
})
