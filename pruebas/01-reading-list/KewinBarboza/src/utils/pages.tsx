import type { Library } from "~/interfaces"

export const minMaxPage = (library: Library[]) => {
  const pages = library.map(book => book.book.pages)
  const orderPage = pages.sort((a, b) => a - b)

  return {
    maxPage: orderPage.at(-1),
    minPage: orderPage[0],
  }
}
