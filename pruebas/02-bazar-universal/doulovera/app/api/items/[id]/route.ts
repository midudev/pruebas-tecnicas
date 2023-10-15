import { getProductById } from '@/services/getProducts'
import { responseJson } from '@/utils/lib/response'

type Params = { id: string }
export async function GET (request: Request, { params }: { params: Params }) {
  try {
    const id = params.id

    if (!id) {
      return responseJson(400, { error: 'Missing query parameter "id"' })
    }

    if (isNaN(Number(id))) {
      return responseJson(400, { error: 'Invalid query parameter "id"' })
    }

    const foundProduct = await getProductById(Number(id))

    if (!foundProduct) {
      return responseJson(404, { error: 'Product not found' })
    }

    return responseJson(200, { ...foundProduct })
  } catch (error) {
    return responseJson(500, { error: (error as Error).message })
  }
}
