import { searchProducts } from '@/services/getProducts'
import { responseJson } from '@/utils/lib/response'
import { NextRequest } from 'next/server'

export async function GET (request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const query = searchParams.get('q')

    if (!query) {
      return responseJson(400, { error: 'Missing query parameter "q"' })
    }

    const foundProducts = await searchProducts(query)

    return responseJson(200, { ...foundProducts })
  } catch (error) {
    return responseJson(500, { error: (error as Error).message })
  }
}
