import { Book } from './Book'
import { Droppable } from 'react-beautiful-dnd'

export function Books ({ droppableId, books, placeholder }) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className='flex flex-col h-full'>
          {
            books.length === 0
              ? (
                <div className='flex flex-col items-center justify-center gap-2 italic h-[175px] border border-[#999999] border-dashed rounded-xl'>
                  {placeholder || <p>No se hay ningún libro en la lista</p>}
                </div>
                )
              : books.map((book, index) => (
                <Book key={book.ISBN} draggableIndex={index + 1} book={book} />
              ))
          }
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
