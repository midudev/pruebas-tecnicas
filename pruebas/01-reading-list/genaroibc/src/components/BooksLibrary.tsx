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
      const bookIsInReadingList = readingList.some(
        book => book.ISBN === bookISBN
      )

      if (bookIsInReadingList) {
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

    return (
      <section class="relative">
        <Filters
          onFilterChange={updateFilter}
          onGenreChange={updateGenre}
          genre={currentGenre}
          filter={currentFilter}
        />

        <p class="text-white">
          {pluralize(
            "book",
            books.filter(book => !book.isInReadingList).length
          )}{" "}
          available
        </p>

        <BooksList books={filteredByGenre} onBookSelect={onBookSelect} />

        <div class="sticky bottom-0 mt-8 z-30">
          <ReadingList
            books={readingList}
            onBookSelect={removeBookFromReadingList}
          />
        </div>
      </section>
    )
  }
)
