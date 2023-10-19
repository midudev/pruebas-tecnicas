import { useWishlistContext } from '../context/listBookContext'
import { BookmarkIcon } from './icons'

export function BookCard ({ book, handleClick }) {
  const { checkBookInList } = useWishlistContext()
  const { cover, title, author, synopsis, genre, pages, year } = book
  return (
    <div className='flex flex-col md:flex-row gap-6'>
      <div className='max-w-[160px] w-full flex flex-col gap-4'>
        <img
          className='aspect-[2/3] object-fill rounded'
          src={cover}
          alt={title}
        />
        <button
          onClick={(e) => handleClick(book, e)}
          className='bg-rhino-500 flex items-center gap-2 py-2 px-2 rounded text-sm'
        >
          <BookmarkIcon
            className={`w-4 h-4 
            ${(checkBookInList({ currentBook: book }))
              ? 'fill-yellow-300 stroke-yellow-300'
              : 'fill-none hover:stroke-yellow-300'
            }
          `}
          />
          {(checkBookInList({ currentBook: book })) ? 'Quitar de mi lista' : 'Agregar a mi lista'}
        </button>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <h3 className='opacity-50'>{author.name}</h3>
        </div>
        <div>
          <span className='font-bold'>Sinopsis</span>
          <p className='max-w-[70ch] italic'>
            {synopsis}
          </p>
        </div>
        <div className='flex flex-wrap justify-start items-center gap-6'>
          <div className='flex flex-col'>
            <span className='font-semibold'>Género</span>
            <p className='opacity-50'>{genre}</p>
          </div>
          <div className='flex flex-col'>
            <span className='font-semibold'>Páginas</span>
            <p className='opacity-50'>{pages}</p>
          </div>
          <div className='flex flex-col'>
            <span className='font-semibold'>Año</span>
            <p className='opacity-50'>{year}</p>
          </div>
        </div>
        {author.otherBooks.length > 0 && (
          <div>
            <span className='font-bold '>Mas libros del autor</span>
            <ul className='list-disc pl-8'>
              {author.otherBooks.map(title => (
                <li key={title}>{title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
