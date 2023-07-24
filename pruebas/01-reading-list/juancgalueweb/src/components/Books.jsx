import { Badge, Card } from 'antd'
import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useBooksStore } from '../stores/books'
import { GenreSelect } from './GenreSelect'
import { AddIcon } from './Icons/AddIcon'

export const Books = () => {
  const { Meta } = Card
  const [
    books,
    setBooks,
    setReadingList,
    copyBooks,
    selectedCategory,
    readingList
  ] = useBooksStore(
    (state) => [
      state.books,
      state.setBooks,
      state.setReadingList,
      state.copyBooks,
      state.selectedCategory,
      state.readingList
    ],
    shallow
  )

  const dataFromLocalStorage = JSON.parse(
    localStorage.getItem('reading-list-midudev-test')
  )

  useEffect(() => {
    const getBooks = async () => {
      await setBooks()
    }
    if (dataFromLocalStorage.state.books.length === 0) {
      getBooks()
    }
  }, [])

  return (
    <div className='books-container'>
      <div className='books-heading-h1'>
        <h1>📚 Lista de libros en la biblioteca</h1>
      </div>
      <div className='books-heading-h2'>
        <GenreSelect />
      </div>
      <div className='books-heading-h2'>
        <h2>
          N° de libros disponibles{' '}
          <Badge
            count={books?.length - readingList?.length}
            color='#52c41a'
            style={{
              borderColor: 'transparent',
              fontWeight: 700,
              marginLeft: '6px'
            }}
          />
        </h2>
        <h2>
          N° de libros por género seleccionado{' '}
          <Badge
            showZero
            count={selectedCategory === 'Todos' ? 0 : copyBooks?.length}
            color='#ffdd00'
            style={{
              borderColor: 'transparent',
              fontWeight: 700,
              marginLeft: '6px'
            }}
          />
        </h2>
      </div>
      {selectedCategory !== 'Todos' && copyBooks?.length === 0 && (
        <div className='empty-reading-list'>
          <p>{`No hay más libros de ${selectedCategory.toLowerCase()} disponibles`}</p>
        </div>
      )}
      <div className='books-cards'>
        {copyBooks?.map((book) => {
          return (
            <Card
              className='book-card'
              key={book.ISBN}
              title='Agregar'
              extra={<AddIcon />}
              hoverable
              cover={
                <img
                  alt={`Imagel del libro ${book?.title}`}
                  src={book?.cover}
                />
              }
              onClick={() => {
                setReadingList(book.ISBN)
              }}
            >
              <Meta title={book?.title} description={book?.author?.name} />
            </Card>
          )
        })}
      </div>
    </div>
  )
}
