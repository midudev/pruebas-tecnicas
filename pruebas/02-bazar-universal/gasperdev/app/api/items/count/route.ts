import { ITEMS_PER_PAGE, ResponseData, findProduct } from "@/app/lib/utils"

export async function GET(request: Request) {
  const search = new URL(request.url).searchParams.get("search")

  if (!search || search === "") {
    return ResponseData({ totalPages: [], itemCount: [] }) // Devuelve un array vacío y un contador de 0
  }

  const items = findProduct(search)
  const itemCount = items.length
  const totalPages = Math.ceil(Number(items.length / ITEMS_PER_PAGE)) // Obtiene el número de productos que coinciden con la búsqueda

  return ResponseData({ totalPages, itemCount })
}
