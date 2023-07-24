import { useState } from 'react'
import { useBooksActions } from '../hooks/useBooks'
import { useAppSelector } from '../hooks/useStore'
import { PlusCircle, Sheets, LayoutPanelTop } from './LucyIcons'

const BookCard = ({ range, genres }) => {
  const data = useAppSelector((state) => state.books.library)
  let sanitizeData = data
  const { addMyBook } = useBooksActions()
  if (genres && genres !== 'all') {
    sanitizeData = data.filter(({ book }) => book.genre === genres)
  }
  return sanitizeData?.filter(({ book }) => book.pages <= range).map(({ book }) => (
    <article
      id={book.ISBN}
      key={`${book.ISBN}-main`}
      className="flex flex-col items-center justify-center w-full max-w-xs overflow-hidden duration-100 ease-in rounded-md shadow-lg dark:shadow-none dark:border border dark:border-gray-800 dark:hover:border-green-800 hover:border-green-400 pb-4"
    >
      <img src={book.cover} className="object-cover w-full h-full" alt="" />

      <section className="flex flex-col items-center w-full py-2">
        <h1 className="font-bold">{book.title}</h1>
        <h2>{book.author.name}</h2>
      </section>
      <button
        onClick={() => addMyBook(book)}
        className="flex justify-center gap-2 p-2  text-gray-800 bg-transparent rounded-md hover:bg-green-700 dark:text-gray-100 hover:text-green-100  "
      >
        <PlusCircle />
        add to read
      </button>
    </article>
  ))
}
function BookList () {
  const [range, setRange] = useState(3000)
  const [genres, setGenres] = useState()
  const data = useAppSelector((state) => state.books.library)

  const Categories = Array(...new Set(data.map(({ book }) => {
    return book.genre
  })))

  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-4 p-4">
      <section>
        <div className='flex items-start justify-center gap-2 p-4 w-full max-w-lg text-black dark:text-white'>
          <div className='flex flex-col gap-6  ' title='minimun pages per book'>
            <label htmlFor="range" className='flex gap-2  p-1'><Sheets />{range}</label>
            <input type="range" value={range} onChange={e => setRange(e.target.value)} min={1} max={3000} className='w-full h-1 dark:border-gray-600 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700/25 dark:accent-green-600 accent-green-400' name='range' />

          </div>
          <div className='flex flex-col gap-2' title='diferent topics'>
            <label htmlFor="categories" className='flex gap-2  p-1'><LayoutPanelTop></LayoutPanelTop>categories</label>
            <select name="categories" value={genres} onChange={e => setGenres(e.target.value)} className='text-black ring-green-600  focus:ring-2 border focus:outline-none  font-medium rounded-md text-sm p-2 text-center justify-center' id="">
              <option key="all" value="all"> All</option>
              {
                Categories.map(genre => {
                  return <option className='flex font-normal justify-center' key={genre} value={genre}>{genre}</option>
                })
              }

            </select>
          </div>

        </div>
      </section>
      <section className="flex flex-wrap justify-center gap-4 p-4">
        <BookCard range={range} genres={genres} />
      </section>

    </div>
  )
}

export default BookList
