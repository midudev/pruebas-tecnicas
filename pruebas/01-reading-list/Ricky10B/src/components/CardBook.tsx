import { CardBookProps, IISBNProp } from '../interfaces/interfacesComponents'

interface ICardBookProps extends CardBookProps {
  readingList: string[]
  addBookToReadingList: ({ ISBN }: IISBNProp) => void
  removeBookFromReadingList: ({ ISBN }: IISBNProp) => void
}

export function CardBook ({
  book,
  readingList,
  addBookToReadingList,
  removeBookFromReadingList
}: ICardBookProps) {

  const {
    ISBN,
    cover,
    title,
    author,
    synopsis,
    year,
    genre,
    pages
  } = book

  const bookInReadingList = readingList.includes(ISBN)

  return (
    <li className='max-w-[700px] bg-[#1f2937] rounded-md grid grid-rows-[250px_min-content] sm:grid-rows-[330px_min-content] shadow-2xl'>
      <div className={`flex ${bookInReadingList && 'opacity-50 blur-[.5px]'}`}>
        <picture>
          <img src={cover} className='w-[150px] max-w-[150px] h-[250px] max-h-[250px] sm:w-[200px] sm:max-w-[200px] sm:h-[330px] sm:max-h-[330px] block object-cover aspect-square rounded-tl-md' />
        </picture>
        <div className='flex flex-col justify-between sm:grid sm:grid-rows-[96px_1fr_80px] py-[6px] px-3'>
          <h3 className='text-2xl font-bold titleBook'>{title} - {author.name}</h3>
          <p className='my-3 text-gray-300 synopsisBook'>{synopsis}</p>
          <div className='flex flex-col justify-end text-sm'>
            <span className='text-gray-300'>
              <span className='font-bold text-white'>Año: </span>
              {year}
            </span>
            <span className='text-gray-300'>
              <span className='font-bold text-white'>Genero: </span>
              {genre}
            </span>
            <span className='text-gray-300'>
              <span className='font-bold text-white'>Páginas: </span>
              {pages}
            </span>
          </div>
        </div>
      </div>
      <button
        className={`${bookInReadingList ? 'bg-[var(--color-btn-remove-card)]' : 'bg-[var(--color-btn-cards)]'} py-2 rounded-b-md font-medium hover:bg-[var(${bookInReadingList ? 'bg-[var(--color-btn-remove-card-hover)]' : 'bg-[var(--color-btn-cards-hover)]'}`}
        onClick={() =>
          bookInReadingList
            ? removeBookFromReadingList({ ISBN })
            : addBookToReadingList({ ISBN })
        }
      >
        {
          bookInReadingList
          ? 'Sacar de la lista'
          : 'Agregar a la lista'
        }
      </button>
    </li>
  )
}