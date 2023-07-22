import type { Book } from '@/utils/books'
import Button from '@/components/button'
import { useReadingList } from '@/hooks/use-reading-list'

interface Props {
  book: Book
}

export default function BookCard({ book }: Props) {
  const { title, cover, ISBN, year, pages } = book
  const {
    addToReadingList,
    removeFromReadingList,
    checkIfBookInReadingList,
    readingListOpen
  } = useReadingList()

  const isInReadingList = checkIfBookInReadingList(ISBN)

  const buttonText = isInReadingList
    ? 'Quitar de la lista de lectura'
    : 'Agregar a lista de lectura'

  const handleReadingList = (ISBN: string) => {
    isInReadingList ? removeFromReadingList(ISBN) : addToReadingList(ISBN)
  }

  return (
    <div className='flex flex-col gap-3 text-zinc-300'>
      <img
        src={cover}
        alt={title}
        className={`object-contain aspect-[155/232] ${
          isInReadingList && !readingListOpen ? 'opacity-70' : 'opacity-100'
        }`}
      />
      <div className='flex flex-col items-center gap-2'>
        <h3 className='text-sm font-bold text-center 2xl:text-base'>{title}</h3>
        <div className='flex items-center justify-between gap-2 font-semibold'>
          <time
            dateTime={new Date(year).toISOString()}
            className='text-xs 2xl:text-sm'
          >
            Año: {year}
          </time>
          <p className='text-xs 2xl:text-sm'>{pages} páginas</p>
        </div>
        <Button
          onClick={() => {
            handleReadingList(ISBN)
          }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
