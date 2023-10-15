import { searchProducts } from '@/app/services/getProducts'
import { NextRequest } from 'next/server'

export async function GET (request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const query = searchParams.get('search')

    if (!query) {
      return Response.json(
        { error: 'Missing query parameter "search"' },
        { status: 400 },
      )
    }

    const foundProducts = await searchProducts(query)

    return Response.json(
      { ...foundProducts },
      { status: 200 },
    )
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: 500 },
    )
  }
}
