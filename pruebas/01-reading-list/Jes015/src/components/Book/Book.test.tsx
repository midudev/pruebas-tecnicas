import { useLibraryStore } from '@/store/Library.store'
import { type IBook, type IWrapedBook } from '@/types'
import { fireEvent, render, screen } from '@testing-library/react'
import { Book } from './Book'

const originalState = useLibraryStore.getState()
const bookData: IBook = {
  title: 'La Guía del Autoestopista Galáctico',
  pages: 216,
  genre: 'Ciencia ficción',
  cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653311117i/6691227.jpg',
  synopsis: 'Un viaje absurdo y cómico por el espacio, con toallas.',
  year: 1979,
  ISBN: '978-0345391803',
  author: {
    name: 'Douglas Adams',
    otherBooks: [
      'El restaurante del fin del mundo',
      'La vida, el universo y todo lo demás'
    ]
  }
}

const tempBook: IWrapedBook = { book: bookData }

describe('<Books />', () => {
  const onClickMock = vi.fn()
  beforeEach(() => {
    useLibraryStore.setState(originalState)
    render(<Book data={tempBook} onClick={onClickMock} />)
  })

  afterEach(() => {
    onClickMock.mockClear()
  })

  it('should render element props', () => {
    const divElement = screen.getByTitle(tempBook.book.title)

    const imageElement = divElement.children[0] as HTMLImageElement

    expect(divElement).toBeDefined()

    // Props
    expect(imageElement.src).toContain(bookData.cover)
    expect(imageElement.alt).toContain(bookData.title)
  })

  it('should not get an error on click', () => {
    const divElement = screen.getByAltText('La Guía del Autoestopista Galáctico movie')

    fireEvent.click(divElement)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
