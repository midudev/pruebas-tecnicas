import { Draggable } from 'react-beautiful-dnd'
import { Badge } from './Badge'
import { useBook } from '../hooks/useBook'

export function Book ({ draggableIndex, book }) {
  const { isInReadingList, toggleBook } = useBook({ book })

  return (
    <Draggable draggableId={book.ISBN} index={draggableIndex}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='h-[175px] flex items-center gap-5 bg-white shadow-[0_4px_35px_0px_rgba(0,0,0,0.25)] rounded-xl mb-5'>
          <img className='rounded-l-xl object-cover aspect-[1/1.45] pointer-events-none h-full' src={book.cover} alt={`Portada del libro ${book.title}`} />
          <section className='flex flex-col justify-between content-between h-full py-3 pr-5 w-full'>
            <div>
              <div className='flex items-baseline justify-between'>
                <h4 className='text-xl font-bold line-clamp-1'>{book.title}</h4>
                <button className={`fill-[#09F] ${isInReadingList ? 'hover:fill-red-500' : 'hover:fill-green-500'}`} onClick={toggleBook}>
                  {
                    isInReadingList
                      ? <svg xmlns='http://www.w3.org/2000/svg' width='15' height='16'><path d='M14.345 3.31H9.048V1.986h5.297V3.31ZM0 16V1.324C0 .971.132.662.397.397A1.27 1.27 0 0 1 1.324 0h6.4v1.324h-6.4v12.668l4.855-2.053 4.855 2.053V6.62h1.325V16l-6.18-2.648L0 16Z' /></svg>
                      : <svg xmlns='http://www.w3.org/2000/svg' width='15' height='16'><path d='M0 16V1.324C0 .971.132.662.397.397A1.27 1.27 0 0 1 1.324 0h6.4v1.324h-6.4v12.668l4.855-2.053 4.855 2.053V6.62h1.325V16l-6.18-2.648L0 16ZM11.034 5.297V3.31H9.048V1.986h1.986V0h1.325v1.986h1.986V3.31h-1.986v1.987h-1.325Z' /></svg>
                  }
                </button>
              </div>
              <span className='font-semibold'>{book.author.name}</span>
              <p className='pt-1 text-[#999999] leading-tight line-clamp-2'>{book.synopsis}</p>
            </div>
            <div className='flex gap-1'>
              <Badge>{book.genre}</Badge>
              <Badge className='hidden sm:block'>{book.year}</Badge>
              <Badge>{book.pages} pág.</Badge>
            </div>
          </section>
        </div>
      )}
    </Draggable>
  )
}
