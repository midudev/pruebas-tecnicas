import { component$ } from "@builder.io/qwik"
import { ItemBooks, Filters, ReadingList } from "~/components"
import type { DocumentHead } from "@builder.io/qwik-city"
import { genders } from "~/utils"
import { useBooks } from "~/hooks"

export default component$(() => {
  const { countBook, countStorage, deleteStorage, saveStorage, listBooks, listReadingStorage, handlerFilter, handlerFilterPage, searchBook, allBooks, pages } = useBooks()

  return (
    <>
      <Filters
        searchBook$={(name) => searchBook(name)}
        filterForGenre$={(genre) => handlerFilter(genre)}
        filterForPages$={(page) => handlerFilterPage(page)}
        genders={genders(allBooks)}
        bookAvailableStorage={Number(countStorage.value)}
        bookAvailable={Number(countBook.value)}
        minPage={pages.minPage}
        maxPage={pages.maxPage}
      />

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 relative">
        {
          listReadingStorage.value.length > 0
            ? <ReadingList
              onClickDelete$={(book) => deleteStorage(book)}
              books={listReadingStorage.value}
            />
            : null
        }

        <ul class="p-2 lg:col-span-2">
          {
            listBooks.value.map(({ book }) => (
              <ItemBooks
                onClick$={() => saveStorage(book)}
                key={book.title}
                cover={book.cover}
                name={book.author.name}
                title={book.title}
                genre={book.genre}
                pages={book.pages}
                synopsis={book.synopsis}
                year={book.year}
              />
            ))
          }
        </ul>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: "Reading List",
  meta: [
    {
      name: "description",
      content: "Reading List Site Description",
    },
  ],
}
