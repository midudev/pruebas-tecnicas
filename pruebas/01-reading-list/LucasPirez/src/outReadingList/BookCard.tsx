import BookSynopsis from './BookSynopsis'
import ButtonAddRemove from '../buttons/ButtonAddRemove'
import { Book } from '../getBooks'
import DraggableContainer from '../dragAndDrop/DraggableContainer'

interface Props {
  book: Book
  inReadingList: boolean
}
/**
 *
 * Una terjeta reutilizable que muestra el libro y sus especificaciones.
 * Con draggable activado cuando `inReadingList` is true
 *
 *
 * @prop  {Book} book: Objeto que define el libro a renderizar.
 * @prop {boolean} inReadingList  Indica si el libro está en la lista de lectura.
 */
export default function BookCard({ book, inReadingList }: Props) {
  const { title, pages, author, cover, genre, year, synopsis } = book

  const Cardstyles = `relative w-[230px] h-[340px] bg-zinc-800 flex flex-col justify-start  shadow-md shadow-slate-500/60  text-sm  p-1 hover:shadow-lg  hover:shadow-slate-500/90 transition-all  duration-300 cursor-move ${
    inReadingList ? ' opacity-70 shadow-none hover:shadow-none' : ''
  }`

  return (
    <DraggableContainer
      draggable={inReadingList}
      book={book}
      className={Cardstyles}
      origin='outReading'
    >
      <span className=' text-rose-500 font-semibold text-base w-full whitespace-nowrap text-ellipsis overflow-hidden hover:overflow-visible text-semibold'>
        {title}
      </span>
      <img src={cover} alt='Book Cover' className='w-fit h-48 mx-auto' />

      <figcaption className='w-full font-semibold'>{author.name}</figcaption>
      <p className='opacity-90'>
        {genre} <span>- {year}</span>
      </p>

      <span>
        <span className=' text-lg text-rose-500 font-semibold opacity-80 '>
          paginas:
        </span>
        {pages}
      </span>

      {!inReadingList && <ButtonAddRemove book={book} value='Add' />}
      <button
        className=' 
        visible-brother shadow-slate-300 p-1 rounded-sm shadow-inner top-28'
      >
        Synopsis
      </button>
      <BookSynopsis synopsis={synopsis} />
    </DraggableContainer>
  )
}
