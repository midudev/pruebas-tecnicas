import { NextResponse } from 'next/server'
import { findProductsByQuery } from '../services/find'

export async function GET (request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('q')

  if (search) {
    const products = await findProductsByQuery({ query: search })
    return NextResponse.json(products)
  }

  return NextResponse.json({
    message: 'You should use param search in order to search items'
  }, { status: 404 })
}
