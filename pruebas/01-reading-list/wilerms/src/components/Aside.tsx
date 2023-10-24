import { useBooks } from '@hooks/useBooks'
import { BookImage } from './Book'

const Aside = () => {
  const { favoriteBooks, deleteFavoriteBook } = useBooks()

  return (
    <aside className="absolute top-0 left-full h-full w-[22%] bg-[#efe6db] lg:static flex flex-col p-2">
      <div className="w-full h-[115px] p-4 flex flex-col justify-center">
        <h2 className='font-bold text-xl'>My List</h2>
      </div>
      <div className='w-full h-[calc(100%_-_115px)] bg-[#e2d6ca] rounded-2xl overflow-y-auto overflow-x-hidden p-5 flex items-center flex-col gap-5'>
        {!!favoriteBooks?.length &&
          favoriteBooks.map(book => (
            <div
              className='group hover:scale-105 transition-all'
              key={book.ISBN}
              onClick={() => deleteFavoriteBook(book.ISBN)}
            >
              <BookImage cover={book.cover} isFavorite />
            </div>
          ))
        }

        {!favoriteBooks.length &&
          <div className="w-full h-full flex items-center justify-center">
            <p className='opacity-40 font-bold text-xl'>No books added</p>
          </div>
        }

      </div>
    </aside>
  )
}

export default Aside
