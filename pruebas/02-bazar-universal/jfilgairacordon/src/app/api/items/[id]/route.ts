import { NextResponse } from 'next/server'
import { findProductById } from '../../services/find'

export async function GET (
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params
  // usamos el service que irá a buscar el producto a la bbdd.
  try {
    const product = await findProductById({ id })
    return NextResponse.json(product)
  } catch (e) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
}
