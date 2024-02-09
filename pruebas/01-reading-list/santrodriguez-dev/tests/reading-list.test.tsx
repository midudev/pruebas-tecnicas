import { fireEvent, render, screen } from '@testing-library/react'
import { Books, Header, ReadingList } from '../src/components'

describe('<Header />', () => {
  it('Should render main title', () => {
    render(<Header />)
    screen.getByText('Lista de lectura')
  })
})

describe('<Books />', () => {
  it('Should render first 5 books', () => {
    render(<Books />)
    const elements = screen.getAllByRole('article')
    expect(elements.length).toBe(5)
  })
})

describe('<ReadingList />', () => {
  it('Should render empty list', async () => {
    render(<ReadingList />)

    const lengthItems = screen.getByLabelText('reading-list-content').children.length
    expect(lengthItems).toBe(0)
  })

  test('Should add 1 book to <ReadingList />', async () => {
    render(
      <>
        <Books />
        <ReadingList />
      </>)

    const img = screen.getByAltText('Harry Potter y la piedra filosofal - Un niño descubre que es un mago y comienza una aventura en una escuela de magia.')
    fireEvent.click(img)

    const readingContent = screen.getByLabelText('reading-list-content')
    expect(readingContent.childNodes.length).toBeGreaterThanOrEqual(1)
  })
})
