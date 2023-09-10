import { cleanup, getByText, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'

import App from '@/App'
import { getBooks } from '@/services/books'

const { library } = await getBooks()

describe('<BooklistGrid />', () => {
  afterEach(cleanup)

  it('should render the same number of books as those obtained', async () => {
    const { getByTestId } = render(<App />)

    await waitFor(() => {
      const renderizedBooks = getByTestId('booklistGrid').children
      expect(renderizedBooks.length).toBe(library.length)
    })
  })

  it('should show the info of the book in the content book section when is clicked', async () => {
    const user = userEvent.setup()
    const { getByTestId, getAllByRole } = render(<App />)

    const bookPositionToTest = 0
    const bookToTest = library[bookPositionToTest].book

    let firstBookElement
    let bookPresentationSection

    await waitFor(() => {
      firstBookElement = getAllByRole('button', { name: /abrir libro/i })[bookPositionToTest]
      bookPresentationSection = getByTestId('presentationSection')
    })

    await user.click(firstBookElement)

    await waitFor(() => {
      getByText(bookPresentationSection, bookToTest.title)
      getByText(bookPresentationSection, bookToTest.synopsis)
      getByText(bookPresentationSection, bookToTest.author.name)
      getByText(bookPresentationSection, bookToTest.pages)
      getByText(bookPresentationSection, bookToTest.genre)
    })
  })
})

describe('<EditorialInfo />', () => {
  let user
  let component
  let firstBookElement
  let editorialInfo

  it('should hide the editorial info when a book is clicked', async () => {
    user = userEvent.setup()
    component = render(<App />)
    const { getByTestId, getAllByRole } = component

    const bookPositionToTest = 0

    await waitFor(() => {
      firstBookElement = getAllByRole('button', { name: /abrir libro/i })[bookPositionToTest]
      editorialInfo = getByTestId('editorialInfo')
      expect(editorialInfo).toHaveStyle({ opacity: '1' })
    })

    await user.click(firstBookElement)

    await waitFor(() => {
      expect(editorialInfo).toHaveStyle({ opacity: '0' })
    })
  })

  it('should show the editorial info when a book already selected is clicked', async () => {
    await user.click(firstBookElement)

    await waitFor(() => {
      expect(editorialInfo).toHaveStyle({ opacity: '1' })
    })
  })
})
