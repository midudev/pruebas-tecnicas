import Book from '../../../components/Book/Book'

import { render, screen } from '../../../utils/test-utils'

describe('App', () => {
  const book = {
    title: 'Harry Potter y la piedra filosofal',
    numPages: 223,
    genre: 'Fantasía',
    image: '/src/img/HarryPotter.webp',
    synopsis:
      'Un niño descubre que es un mago y comienza una aventura en una escuela de magia.',
    publicationYear: 1997,
    bookId: '978-0747532699',
    authorName: 'J.K. Rowling',
    otherBooks: [
      'Harry Potter y la cámara secreta',
      'Harry Potter y el prisionero de Azkaban',
      'Harry Potter y el cáliz de fuego',
    ],
  }
  const cssImgReadList = 'lg:max-h-[25rem]'

  it('should be render book propertly in list', () => {
    render(<Book book={book} />)
    const image = screen.getByAltText(book.title)
    expect(image).toBeDefined()
  })

  it('should be render de icon add in the list', () => {
    render(<Book book={book} />)
    const image = screen.getByTestId('icon-add')
    expect(image).toBeDefined()
  })

  it('should be render book propertly in readList', () => {
    render(<Book book={book} isReadList />)
    const image = screen.getByRole('img')
    expect(image.className).toContain(cssImgReadList)
  })

  it('should be render de icon remove in the readlist', () => {
    render(<Book book={book} isReadList />)
    const image = screen.getByTestId('icon-remove')
    expect(image).toBeDefined()
  })
})
