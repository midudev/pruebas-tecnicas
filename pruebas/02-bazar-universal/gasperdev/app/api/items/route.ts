import { ITEMS_PER_PAGE, ResponseData, findProduct } from "@/app/lib/utils"

export async function GET(request: Request) {
  const search = new URL(request.url).searchParams.get("search")
  let currentPage = new URL(request.url).searchParams.get("page")
  const page = currentPage ? parseInt(currentPage) : 1
  const perPage = ITEMS_PER_PAGE
  const startIndex = (page - 1) * perPage

  if (!search || search === "") {
    return ResponseData([])
  }
  const items = findProduct(search).slice(startIndex, startIndex + perPage)
  return ResponseData(items)
}
