import { apiURL } from '../consts'
import { Product, ProductRequestProp } from '../interfaces'

interface ResponseApi {
  ok: boolean,
  body: Product | string
}

export async function getProductRequest ({ idProduct }: ProductRequestProp) {
  const res = await fetch(`${apiURL}/items/${idProduct}`)
  const product: ResponseApi = await res.json()

  if (!product.ok && typeof product.body === 'string') {
    throw new Response(product.body, { status: res.status })
  }

  return product.body
}
