import type { Book, Filter } from "~/types"

export function isValidFilter(filter: string): filter is Filter {
  const exampleBook: Book = {
    title: "",
    pages: 1,
    genre: "",
    cover: "",
    synopsis: "",
    year: 1954,
    ISBN: "",
    author: {
      name: "",
      otherBooks: ["", ""]
    },
    isInReadingList: true
  }

  return filter in exampleBook
}
