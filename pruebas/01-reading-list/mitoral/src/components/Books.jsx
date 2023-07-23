import { Book } from './Book'
import { Droppable } from 'react-beautiful-dnd'

export function Books ({ droppableId, books }) {
  return (
    droppableId
      ? <DroppableBooks droppableId={droppableId} books={books} />
      : <NoDroppableBooks books={books} />
  )
}

function DroppableBooks ({ droppableId, books }) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className='flex flex-col h-full'>
          {
            books.length === 0
              ? (
                <div className='flex flex-col items-center justify-center gap-2 text-center text-[#999999] italic h-[175px] border border-[#999999] border-dashed rounded-xl'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='72' height='71' fill='none'><path fill='#999' stroke='#fff' strokeWidth='2' d='m60.922 55.36 6.802 11.827-4.218 2.445-6.798-11.818-.641-1.115-.923.896-5.948 5.775-.106-23.696 20.39 11.94-7.967 2.286-1.227.352.636 1.107ZM47.082 14.79v6.896h18.173c.644 0 1.263.257 1.72.715.457.459.714 1.082.714 1.732v12.791H62.82V26.582H26.476V63.06h13.738v4.895H24.04a2.428 2.428 0 0 1-1.72-.715 2.454 2.454 0 0 1-.714-1.732v-18.24h-6.87v-4.895h6.87V24.134c0-.65.257-1.273.714-1.732a2.428 2.428 0 0 1 1.72-.715h18.173V14.79h4.868ZM5.87 42.373v4.896H1v-4.896h4.869Zm0-13.79v4.895H1v-4.896h4.869Zm0-13.792v4.896H1V14.79h4.869ZM5.869 1v4.896H1V1h4.869Zm13.738 0v4.896h-4.87V1h4.87Zm13.738 0v4.896h-4.87V1h4.87Zm13.737 0v4.896h-4.868V1h4.868Z' /></svg>                  Arrastra aquí los libros que quieras agregar a tu lista de lectura
                </div>
                )
              : books.map((book, index) => (
                <Book key={book.ISBN} draggableIndex={index + 1} book={book} />
              ))
          }
        </div>
      )}
    </Droppable>
  )
}

function NoDroppableBooks ({ books }) {
  return (
    <>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-5'>
        {
            books.map((book, index) => {
              return <Book key={book.ISBN} book={book} />
            })
        }
      </div>
    </>
  )
}
