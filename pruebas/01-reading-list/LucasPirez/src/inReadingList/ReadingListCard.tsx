import ButtonAddRemove from '../buttons/ButtonAddRemove'
import { Book } from '../getBooks'
import DraggableContainer from '../dragAndDrop/DraggableContainer'

export default function ReadingListCard({ book }: { book: Book }) {
  const { cover, title } = book

  return (
    <DraggableContainer
      className=' relative w-[180px] h-[260px] flex flex-col justify-start  shadow-md shadow-slate-500  text-sm cursor-pointer'
      book={book}
      origin='inReading'
    >
      <img src={cover} alt='Book Cover' className='w-fit h-52 mx-auto' />
      <figcaption className=' text-rose-500 font-semiboldl text-base w-full  text-ellipsis overflow-hidden text-semibold'>
        {title}
      </figcaption>
      <ButtonAddRemove book={book} value='Remove' />
    </DraggableContainer>
  )
}
