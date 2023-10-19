import { cleanup, getByText, render, waitFor, within } from '@testing-library/react'
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
    const { getByTestId, findAllByRole } = render(<App />)

    const bookPositionToTest = 0
    const bookToTest = library[bookPositionToTest].book

    const bookPresentationSection = getByTestId('presentationSection')
    const firstBookElement = await findAllByRole('button', { name: /abrir libro/i })

    await user.click(firstBookElement[0])

    await within(bookPresentationSection).findByText(bookToTest.title)
    await within(bookPresentationSection).findByText(bookToTest.synopsis)
    await within(bookPresentationSection).findByText(bookToTest.author.name)
    await within(bookPresentationSection).findByText(bookToTest.pages)
    await within(bookPresentationSection).findByText(bookToTest.genre)
  })

  it('should hide the selected book info when is clicked again', async () => {
    const user = userEvent.setup()
    const { getByTestId, findAllByRole } = render(<App />)

    const bookPositionToTest = 0
    const bookToTest = library[bookPositionToTest].book

    const bookPresentationSection = getByTestId('presentationSection')
    const firstBookElement = await findAllByRole('button', { name: /abrir libro/i })

    await user.click(firstBookElement[0])
    await user.click(firstBookElement[0])
    expect(() => getByText(bookPresentationSection, bookToTest.title)).toThrow()
  })
})

describe('<EditorialInfo />', () => {
  const bookPositionToTest = 0
  let user
  let component
  let firstBookElement
  let editorialInfo

  it('should hide the editorial info when a book is clicked', async () => {
    user = userEvent.setup()
    component = render(<App />)
    const { getByTestId, findAllByRole } = component

    editorialInfo = getByTestId('editorialInfo')
    expect(editorialInfo).toHaveStyle({ opacity: '1' })

    firstBookElement = await findAllByRole('button', { name: /abrir libro/i })
    await user.click(firstBookElement[bookPositionToTest])

    await waitFor(() => {
      expect(editorialInfo).not.toBeVisible()
    })
  })

  it('should show the editorial info when a book already selected is clicked', async () => {
    await user.click(firstBookElement[bookPositionToTest])

    await waitFor(() => {
      expect(editorialInfo).toBeVisible()
    })
  })
})
