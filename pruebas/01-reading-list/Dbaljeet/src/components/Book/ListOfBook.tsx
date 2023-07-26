import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd'
import { IBook } from '../../interfaces/IBooks'
import CardBook from './CardBook'
import useBooks from '../hooks/useBooks'
import { useEffect, useState } from 'react'

interface Props {
  library: IBook[]
  title: string
  left: boolean
  genre?: string
}

const ListOfBook = ({ library, title, left = false, genre = '' }: Props) => {
  const { reorderBooks, reorderReading } = useBooks()

  const [books, setBooks] = useState<IBook[]>([])

  useEffect(() => {
    setBooks(
      genre !== ''
        ? library.filter((book) => book.book.genre === genre)
        : library
    )
  }, [library, genre])

  const Move = (ev: DropResult) => {
    const { source, destination } = ev

    if (!destination) return
    if (!ev.type) return

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return
    console.log(ev)

    if (ev.type === 'istrue') {
      reorderBooks(books, source.index, destination.index)
    } else {
      reorderReading(books, source.index, destination.index)
    }
  }

  return (
    <>
      <div
        className={`flex flex-col max-sm:w-full gap-y-4 h-fit min-w-[300px] ${
          left ? 'w-1/2 ' : 'w-1/4 bg-slate-400 rounded-[14px]'
        }`}
      >
        <h2 className="font-semibold">
          {title} {`(${books.length})`}{' '}
          {left ? `- Total sin filtros: (${library.length})` : ''}
        </h2>

        <DragDropContext onDragEnd={(ev) => Move(ev)}>
          <Droppable droppableId={title} type={`is${left}`}>
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
                {books.map((book, index) => {
                  return (
                    <Draggable
                      isDragDisabled={genre !== ''}
                      key={book.book.title}
                      draggableId={book.book.title}
                      index={index}
                    >
                      {(provided2) => (
                        <div
                          className="w-[250px]"
                          ref={provided2.innerRef}
                          {...provided2.dragHandleProps}
                          {...provided2.draggableProps}
                        >
                          <CardBook
                            key={book.book.title}
                            book={book.book}
                            left={left}
                            isFilter={genre !== ''}
                          />
                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </section>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  )
}
export default ListOfBook
