import { ResponseData, findProductId } from "@/app/lib/utils"

interface ProductParams {
  id: number
}

export async function GET(
  request: Request,
  { params }: { params: ProductParams }
) {
  try {
    const product = findProductId(params.id)

    if (!product) {
      return ResponseData([])
    }

    return ResponseData(product)
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 })
  }
}
