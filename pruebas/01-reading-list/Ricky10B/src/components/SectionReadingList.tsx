import { BtnLibro } from "./BtnLibro";
import { CardReadingList } from "../components/CardReadingList";
import { useLibraryReducer } from '../hooks/useLibraryReducer'
import { useAppSelector } from '../hooks/store'
import { IISBNProp } from '../interfaces/interfacesComponents'

export function SectionReadingList() {
  const { removeBookFromReadingList } = useLibraryReducer()
  const { library, readingList } = useAppSelector(state => state.librariesReducer)
  const {
    isVisibleSection,
    isVisibleListBook
  } = useAppSelector(state => state.visibleListBookReducer)
  
  const booksOfTheReadingList = readingList.map(ISBN =>
    library.find(({ book }) => book.ISBN === ISBN)
  )

  const removeBookOfList = ({ ISBN }: IISBNProp) => {
    removeBookFromReadingList({ ISBN })
  }

  return (
    <section
      className={`fixed 2xl:relative ${
        isVisibleSection ? "block" : "hidden 2xl:block"
      } inset-0 bg-[rgba(156,163,175,.4)] 2xl:bg-transparent`}
    >
      <div
        className={`absolute w-full left-auto max-w-[650px] top-0 bottom-0 bg-[#111827] listBooks drop-shadow-[-16px_3px_38px_black] 2xl:ml-10 ${
          isVisibleListBook ? "right-0" : "-right-full"
        } sm:max-w-[450px] 2xl:fixed 2xl:right-auto 2xl:drop-shadow-none 2xl:border-l-2 2xl:border-l-slate-800`}
      >
        <header className="flex items-center flex-row justify-between mx-8 sm:justify-end sm:flex-row-reverse sm:mx-2 2xl:justify-between 2xl:flex-row 2xl:mx-10">
          <h2 className="text-2xl text-center font-bold my-5">
            Lista de lectura
          </h2>

          <div className="sm:-translate-x-7 2xl:-translate-x-0">
            <BtnLibro />
          </div>
        </header>

        <ul className="flex flex-wrap justify-center gap-3 mx-3 my-3 readingList overflow-auto scrollApp">
          {
            booksOfTheReadingList.length === 0 && (
              <p className='text-center'>
                No hay libros en la lista de lectura
              </p>
            )
          }

          {
            booksOfTheReadingList.map(bookOfList => (
              bookOfList && (
                <CardReadingList
                  key={bookOfList.book.ISBN}
                  book={bookOfList.book}
                  removeBookOfList={() => 
                    removeBookOfList({
                      ISBN: bookOfList.book.ISBN
                    })
                  }
                />
              )
            ))
          }
        </ul>
      </div>
    </section>
  );
}
