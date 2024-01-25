import data from "../../../products.json"

export const ITEMS_PER_PAGE = 4
export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages]
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages]
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ]
}

export const findProduct = (query: string | null) => {
  return data.products.filter(
    (item) =>
      item.title.toLowerCase().includes(query?.toLowerCase() ?? "") ||
      item.category.toLowerCase().includes(query?.toLowerCase() ?? "") ||
      item.description.toLowerCase().includes(query?.toLowerCase() ?? "")
  )
}

export const findProductId = (itemId: number | null) => {
  return data.products.find((item) => item.id === Number(itemId))
}

export const ResponseData = (data: any) => {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: new Headers({ "content-type": "application/json" }),
  })
}
