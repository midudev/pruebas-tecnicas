import Aside from '@components/Aside'
import Book, { BookImage } from '@components/Book'
import Filters from '@components/Filters'
import LanguageSelector from '@components/LanguageSelector'
import ReadingListToggler from '@components/ReadingListToggler'
import { Search } from '@components/Search'
import ToggleDarkMode from '@components/ToggleDarkMode'
import { useBooks } from '@hooks/useBooks'

export default function App () {
  const { books, favoriteBooks } = useBooks()

  return (
    <div
      id="App"
      className="relative w-screen h-screen m-auto flex items-center justify-center bg-[#d2c2b5]"
    >
      <div className="relative w-screen h-screen max-w-[1400px] max-h-[900px] m-auto flex items-center justify-center bg-[#fbf8f5] rounded-3xl overflow-hidden">
        <section className="h-full w-full lg:w-[78%] flex flex-col">
          <header className="relative w-full h-[225px] flex flex-col">
            <div className="flex items-center">
              <Search />
              <div className="w-1/4 h-full flex items-center justify-end pr-8 gap-5">
                <LanguageSelector />
                <ToggleDarkMode height={40} width={40} color='#1C274C' />
                <ReadingListToggler height={40} width={40} />
              </div>
            </div>
            <Filters />
          </header>
          <main className="relative w-full h-[calc(100%_-_180px)] p-5 lg:pt-[0px] lg:pb-6 lg:px-6 overflow-auto ">
            <div className="ml-1 mb-[20px]">
              <h2 className="font-bold text-xl text-[#4b3832]">
                Libros disponibles
              </h2>
            </div>
            <div className="w-full gap-[10px] pb-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-auto lg:gap-[30px]">
              {books.map(book => <Book key={book.ISBN} {...book} />)}
            </div>
          </main>
        </section>
        <Aside />
      </div>
    </div>
  )
}
