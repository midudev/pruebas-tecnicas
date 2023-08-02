import { BooksFilter } from './components/BooksFilter'
import { BooksList } from './components/BooksList'
import { BooksTabs } from './components/BooksTabs'
import { ReadingList } from './components/ReadingList'
import { ReadingListMessage } from './components/ReadingListMessage'
import { useBooks } from './hooks/useBooks'

function App () {
  const {
    filteredBooksWrapper,
    readingList,
    genres,
    selectedGenres,
    onlyAvailablesBooks,
    addToReadingList,
    removeFromReadingList,
    toggleGenre,
    toggleOnlyAvailableBooks
  } = useBooks()

  return (
    <div className='h-screen flex overflow-hidden bg-black text-neutral-200'>
      <main className='flex-grow flex flex-col bg-neutral-925'>
        <header className='p-4 bg-neutral-900'>
          <h1 className='text-2xl font-semibold'>
            <i className="ti ti-adjustments-alt pr-2"></i>
            <span>Filtrar</span>
          </h1>
          <BooksFilter
            genres={genres}
            selectedGenres={selectedGenres}
            toggleGenre={toggleGenre}
          />
        </header>
        <BooksTabs
            booksWrapper={filteredBooksWrapper}
            onlyAvailablesBooks={onlyAvailablesBooks}
            toggleOnlyAvailableBooks={toggleOnlyAvailableBooks}
          />
        <BooksList
          booksWrapper={filteredBooksWrapper}
          onlyAvailablesBooks={onlyAvailablesBooks}
          addToReadingList={addToReadingList}
          removeFromReadingList={removeFromReadingList}
        />
      </main>
      <aside className='flex flex-col min-w-[18rem] max-w-[18rem]'>
        <header className="p-4 text-center">
          <h2 className='text-2xl font-semibold'>
            <i className="ti ti-bookmarks pr-2"></i>
            Lista de lectura
          </h2>
          <ReadingListMessage count={readingList.length} />
        </header>
        <ReadingList
          readingList={readingList}
          removeFromReadingList={removeFromReadingList}
        />
      </aside>
    </div>
  )
}

export default App
