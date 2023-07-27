import { Card, message } from 'antd'
import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useBooksStore } from '../stores/books'
import { useSearchBooks } from '../stores/searchBooks'
import { GenreSelect } from './GenreSelect'
import { AddIcon } from './Icons/AddIcon'
import { PageFilter } from './PageFilter'
import { SearchInput } from './SearchInput'
import { Stats } from './Stats'

export const Books = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const { Meta } = Card
  const search = useSearchBooks((state) => state.search)
  const searchedBooks = useSearchBooks((state) => state.searchedBooks)
  const removeBookFromSearchedBooks = useSearchBooks(
    (state) => state.removeBookFromSearchedBooks
  )
  const [
    setBooks,
    setReadingList,
    copyBooks,
    selectedCategory,
    minPage,
    sliderValue,
    booksFilter,
    readingList
  ] = useBooksStore(
    (state) => [
      state.setBooks,
      state.setReadingList,
      state.copyBooks,
      state.selectedCategory,
      state.minPage,
      state.sliderValue,
      state.booksFilter,
      state.readingList
    ],
    shallow
  )

  const dataFromLocalStorage = JSON.parse(
    localStorage.getItem('reading-list-midudev-test')
  )

  useEffect(() => {
    booksFilter(selectedCategory, sliderValue)
  }, [selectedCategory, sliderValue, readingList])

  useEffect(() => {
    const getBooks = async () => {
      await setBooks()
    }
    if (dataFromLocalStorage.state.books.length === 0) {
      getBooks()
    }
  }, [])

  return (
    <>
      {contextHolder}
      <div className='books-container'>
        <div className='books-heading'>
          <GenreSelect />
          <PageFilter />
          <SearchInput />
        </div>
        <Stats />
        {selectedCategory !== 'Todos' && copyBooks?.length === 0 && (
          <div className='empty-reading-list'>
            <p>{`No hay más libros de ${selectedCategory.toLowerCase()} disponibles`}</p>
          </div>
        )}
        {sliderValue <= minPage && (
          <div className='empty-reading-list'>
            <p>No existen libros para ese filtro de número de páginas </p>
          </div>
        )}
        <div className='books-cards'>
          {(search === '' ? copyBooks : searchedBooks)?.map((book) => {
            return (
              <Card
                className='book-card'
                key={book.ISBN}
                title={<AddIcon />}
                hoverable
                cover={
                  <img
                    alt={`Imagel del libro ${book?.title}`}
                    src={book?.cover}
                  />
                }
                onClick={() => {
                  setReadingList(book.ISBN)
                  removeBookFromSearchedBooks(book.ISBN)
                  messageApi.open({
                    type: 'success',
                    content: `${book.title} fue agregado a la lista de lectura`
                  })
                }}
              >
                <Meta title={book?.title} description={book?.author?.name} />
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}
