import type { Book, BookISBN, Filter, Genre } from "~/types"
import { BooksList } from "~/components/BooksList"

import { ReadingList } from "~/components/ReadingList"
import { Filters } from "~/components/Filters"
import { $, component$ } from "@builder.io/qwik"
import { useLibrary } from "~/hooks/useLibrary"
import { GENRES_DICT } from "~/constants"
import { pluralize } from "~/helpers/pluralize"

type Props = {
  initialBooks: Book[]
  initialReadingList: Book[]
  initialFilter: Filter
  initialGenre: Genre
}

export const BooksLibrary = component$(
  ({
    initialBooks,
    initialReadingList,
    initialFilter,
    initialGenre
  }: Props) => {
    const {
      readingList,
      addBookToReadingList,
      removeBookFromReadingList,
      updateFilter,
      updateGenre,
      currentGenre,
      currentFilter,
      books
    } = useLibrary({
      initialBooks,
      initialReadingList,
      initialFilter,
      initialGenre
    })

    const onBookSelect = $((bookISBN: BookISBN) => {
      const isAlreadyInReadingList = readingList.some(
        book => book.ISBN === bookISBN
      )

      if (isAlreadyInReadingList) {
        removeBookFromReadingList(bookISBN)
      } else {
        addBookToReadingList(bookISBN)
      }
    })

    const filteredByGenre =
      currentGenre === "all"
        ? books
        : books.filter(
            book => book.genre.toLowerCase() === GENRES_DICT[currentGenre]
          )

    const allBooksCount = books.filter(book => !book.isInReadingList).length

    const allBooksAvailability = pluralize("disponible", allBooksCount)

    const byGenreCount = filteredByGenre.filter(
      book => !book.isInReadingList
    ).length

    const byGenrePluralized = pluralize("libro", byGenreCount)

    const byGenreAvailability = pluralize("disponible", byGenreCount)

    return (
      <>
        <section class="relative max-w-7xl mx-auto">
          <Filters
            onFilterChange={updateFilter}
            onGenreChange={updateGenre}
            genre={currentGenre}
            filter={currentFilter}
          />

          <div class="my-4 mb-6 font-bold text-white text-lg w-full flex items-center justify-between">
            <p class="bg-zinc-900 py-1.5 px-4 rounded-md">
              <span class="text-blue-500">{allBooksCount}</span> de{" "}
              <span class="text-blue-500">{books.length}</span> libros{" "}
              {allBooksAvailability}
            </p>

            <p class="bg-zinc-900 py-1.5 px-4 rounded-md">
              <span class="text-blue-500">{byGenreCount}</span>{" "}
              {byGenrePluralized} de{" "}
              <span class="text-blue-500">{GENRES_DICT[currentGenre]}</span>{" "}
              {byGenreAvailability}
            </p>
          </div>

          <BooksList books={filteredByGenre} onBookSelect={onBookSelect} />
        </section>
        <div class="w-full sticky bottom-0 mt-8 z-30">
          <ReadingList
            books={readingList}
            onBookSelect={onBookSelect}
            onDrop={addBookToReadingList}
          />
        </div>
      </>
    )
  }
)
