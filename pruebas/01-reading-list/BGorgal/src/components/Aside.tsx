import user from '../img/user.webp'
import { useBooksStore } from '../store/books'
import { BookListRead } from './Book/BookListRead'
import Filters from './Filters'

const Aside = () => {
  const listOfBooksToRead = useBooksStore(state => state.listOfBooksToRead)

  return (
    <aside className=' my-2 hidden h-[calc(100vh-56px)] flex-col overflow-y-scroll sm:block '>
      <header className='mx-2 h-20 rounded p-3 '>
        <div className='flex items-center space-x-4'>
          <img
            className='h-12 w-12 rounded-full'
            src={user}
            alt='Imagen del usuario'
          />
          <div className='font-medium dark:text-white'>
            <h2>Braian</h2>
            <div className='text-sm text-gray-400'> Me gusta leer 🤗</div>
          </div>
        </div>
      </header>
      <section className='mx-3'>
        {listOfBooksToRead.length > 0 && <BookListRead />}
        <Filters />
      </section>
    </aside>
  )
}

export default Aside
