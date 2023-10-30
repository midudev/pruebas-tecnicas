import { Dropdown } from './Dropdown'
import { Search } from './Search'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext.jsx'
import { Tag } from './Tag'
import { ReadingList } from './ReadingList'
import { Counter } from './Counter'

export function Header () {
  const { readingList, availableBooks, filteredBooks, getSelectedGenre, selectedGenre } = useContext(GlobalContext)

  return (
    <header className='relative z-10 text-sky-950 flex flex-col items-center'>
      <div className='w-full flex justify-between gap-3 p-4 xl:px-32 mb-8 bg-white'>
        <Search />
        <ReadingList />
      </div>
      <div className='w-full max-w-[1000px] py-4 px-3 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-10 items-end'>
            <h1 className='text-3xl font-bold'>Películas</h1>
            <Dropdown name='Género' options={[...new Set(availableBooks.map(book => book.book.genre))]} onClick={getSelectedGenre} />
          </div>

        </div>
        <div className='flex md:flex-row flex-col gap-4'>
          <div className='flex flex-wrap gap-6'>
            <Counter text='Todos' list={availableBooks}/>
            <Counter text='Disponibles' list={filteredBooks}/>
            <Counter text='En lista de lectura' list={readingList}/>
          </div>
          {
            selectedGenre && (
              <Tag name={selectedGenre} onDelete={getSelectedGenre} />
            )
          }
        </div>
      </div>
      <div>

      </div>
    </header>
  )
}
