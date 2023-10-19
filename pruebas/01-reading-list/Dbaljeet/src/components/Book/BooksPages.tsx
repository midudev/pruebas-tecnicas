import { useContext } from 'react'

import ContextBook, { IContextBook } from '../../context/BookContext'

import useBooks from '../hooks/useBooks'
import ListOfBook from './ListOfBook'

import { ConstantsOfBooks } from '../../utils/BooksConstants'

import { DragDropContext, DropResult } from 'react-beautiful-dnd'

interface Props {
  genre: string
  numberOfPages: number
  keyword: string
}

const BookPages = ({ genre, keyword, numberOfPages }: Props) => {
  const { books, readingList, isDragAndDrop, toReadingList, viewListOfBooks } =
    useContext(ContextBook) as IContextBook
  const { reorderBooks, reorderReading, MoveBookDragDrop } = useBooks()

  const Move = (ev: DropResult) => {
    const { source, destination } = ev

    if (!destination || !ev.type || !ev.source) return

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return

    if (ev.source.droppableId === ConstantsOfBooks.TYPES_GROUPS[0]) {
      //libros disponibles
      if (destination.droppableId !== source.droppableId) {
        isDragAndDrop.current = true
        toReadingList.current = true
        MoveBookDragDrop({
          sourceIndex: source.index,
          droppableIndex: destination.index,
          left: true,
        })
      } else reorderBooks(books, source.index, destination.index)
    } else {
      if (destination.droppableId !== source.droppableId) {
        isDragAndDrop.current = true
        MoveBookDragDrop({
          sourceIndex: source.index,
          droppableIndex: destination.index,
          left: false,
        })
      } else reorderReading(readingList, source.index, destination.index)
    }
  }

  return (
    <DragDropContext onDragEnd={(ev) => Move(ev)}>
      <main className="flex flex-wrap w-full m-auto justify-center py-5 gap-5">
        {viewListOfBooks !== ConstantsOfBooks.OPTIONS_VIEW_LIST[2] && (
          <ListOfBook
            library={books}
            title="Libros disponibles"
            left={true}
            genre={genre}
            numberOfPages={numberOfPages}
            keyword={keyword}
          />
        )}

        {viewListOfBooks !== ConstantsOfBooks.OPTIONS_VIEW_LIST[1] && (
          <ListOfBook
            library={readingList}
            title="Libros añadidos"
            left={false}
          />
        )}
      </main>
    </DragDropContext>
  )
}
export default BookPages
