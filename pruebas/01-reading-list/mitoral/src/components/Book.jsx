import { Draggable } from 'react-beautiful-dnd'
import { Badge } from './Badge'

export function Book ({ draggableIndex, book }) {
  return (
    draggableIndex
      ? <DraggableBook draggableIndex={draggableIndex} book={book} />
      : <NoDraggableBook book={book} />
  )
}

function DraggableBook ({ draggableIndex, book }) {
  return (
    <Draggable draggableId={book.ISBN} index={draggableIndex}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='h-[175px] flex items-center gap-5 bg-white shadow-[0_4px_35px_0px_rgba(0,0,0,0.25)] rounded-xl mb-5'>
          <img className='rounded-l-xl object-cover aspect-[1/1.45] pointer-events-none h-full' src={book.cover} alt={`Portada del libro ${book.title}`} />
          <section className='flex flex-col justify-between content-between h-full py-3 pr-5'>
            <div>
              <h4 className='text-xl font-bold'>{book.title}</h4>
              <span className='font-semibold'>{book.author.name}</span>
              <p className='pt-1 text-[#999999] leading-tight line-clamp-2'>{book.synopsis}</p>
            </div>
            <div className='flex gap-1'>
              <Badge>{book.genre}</Badge>
              <Badge>{book.year}</Badge>
              <Badge>{book.pages} páginas</Badge>
            </div>
          </section>
        </div>
      )}
    </Draggable>
  )
}

function NoDraggableBook ({ book }) {
  return (
    <div>
      <img className='rounded-lg object-cover aspect-[1/1.45]' src={book.cover} alt={`Portada del libro ${book.title}`} />
    </div>
  )
}
