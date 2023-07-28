import { useEffect, useState } from 'react'

import { IBook } from '../../interfaces/IBooks'

import useBooks from '../hooks/useBooks'

import CardBook from './CardBook'

import { Draggable, Droppable } from 'react-beautiful-dnd'

interface Props {
  library: IBook[]
  title: string
  left: boolean
  genre?: string
  numberOfPages?: number
  keyword?: string
}

const ListOfBook = ({
  library,
  title,
  left = false,
  genre = '',
  numberOfPages = 0,
  keyword = '',
}: Props) => {
  const { MoveBook } = useBooks()

  const [books, setBooks] = useState<IBook[]>([])

  const isFilter = genre !== '' || numberOfPages > 0 || keyword !== ''

  useEffect(() => {
    const filteredBooks = library.filter((book) => {
      if (numberOfPages && book.book.pages > numberOfPages) {
        return false
      }
      if (genre && book.book.genre !== genre) {
        return false
      }
      if (
        keyword &&
        !book.book.title.toUpperCase().includes(keyword.toUpperCase())
      ) {
        return false
      }
      return true
    })

    setBooks(filteredBooks)
  }, [library, genre, numberOfPages, keyword])

  return (
    <>
      <div
        className={`flex flex-col max-sm:w-full gap-y-4 h-fit min-w-[300px] ${
          left
            ? 'w-1/2 '
            : 'w-1/4 bg-gradient-to-br from-indigo-500 rounded-[14px]'
        }`}
      >
        <h2 className="font-semibold">
          {title} {`(${books.length})`}{' '}
          {left ? `- Total sin filtros: (${library.length})` : ''}
        </h2>

        <Droppable droppableId={title} type="group">
          {(provided) => (
            <section
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`w-full ${
                left
                  ? 'grid grid-cols-grid-auto justify-items-center'
                  : 'flex flex-col'
              } items-center justify-center gap-y-5 py-3`}
            >
              {books.map((book, index) => (
                <Draggable
                  isDragDisabled={isFilter}
                  key={book.book.ISBN}
                  draggableId={book.book.ISBN}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className="w-[250px]"
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <CardBook
                        key={book.book.ISBN}
                        book={book.book}
                        left={left}
                        MoveBook={MoveBook}
                        isDragging={snapshot.isDragging}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </section>
          )}
        </Droppable>
      </div>
    </>
  )
}
export default ListOfBook
