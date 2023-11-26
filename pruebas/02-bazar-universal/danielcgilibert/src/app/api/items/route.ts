import { type NextRequest } from 'next/server'
import { products } from '@/data/products.json'

export function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('search')

  console.log(query)

  if (!query) {
    return Response.json(products)
  }

  // search in products array
  const product = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )

  // mapping products
  // const product = products.map((product) => {
  //   return {
  //     id: product.id,
  //     title: product.title,
  //     price: product.price,
  //     picture: product.picture,

  return Response.json({ products: product })
}
