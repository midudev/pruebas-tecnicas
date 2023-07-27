import { forwardRef, HTMLAttributes, CSSProperties } from 'react'
import { Book } from '../../domain/Book'
import { useBooks, useListedBooks } from '../../store/useBooks'

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
  id: string
  withOpacity?: boolean
  isDragging?: boolean
  book: Book
}

const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ id, withOpacity, isDragging, style, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
      opacity: withOpacity ? '0.5' : '1',
      transformOrigin: '50% 50%',
      cursor: isDragging ? 'grabbing' : 'grab',
      boxShadow: isDragging
        ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px'
        : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px',
      transform: isDragging ? 'scale(1.05)' : 'scale(1)',
      ...style
    }

    const { listedIds, addNewList } = useListedBooks()
    const { listedBooks, addCompleteList } = useBooks()

    const deleteCard = () => {
      if (listedIds.includes(props.book.ISBN)) {
        const auxListed = listedIds.filter(id => id !== props.book.ISBN)
        addNewList(auxListed)

        const auxListedBook = listedBooks.filter(
          ({ book }) => book.ISBN !== props.book.ISBN
        )
        addCompleteList(auxListedBook)
      }
    }

    return (
      <div ref={ref} className='w-full h-fit' style={inlineStyles} {...props}>
        <article className='text-sm w-full h-fit flex flex-col bg-white divide-y-1 divide-black border-1 border-solid border-black justify-center rounded-md shadow-[2px_3px_0px_rgba(0,0,0,1)]'>
          <div className='p-2 pt-4 flex justify-center'>
            <img
              src={props.book.cover}
              width={'220px'}
              className='rounded-sm h-[300px]'
            />
          </div>
          <div className='flex items-center justify-between px-6 py-2'>
            <div className=''>
              <p className='font-bold w-[12rem] truncate'>{props.book.title}</p>
              <p>{props.book.author.name}</p>
            </div>
            <button
              onClick={deleteCard}
              className='bg-customPink text-white py-1 px-3 border-1 border-black drop-shadow-[2px_3px_0px_rgba(0,0,0,1)] hover:bg-[#F5949A] rounded-sm'
            >
              Delete
            </button>
          </div>
        </article>
      </div>
    )
  }
)

export default Item
