import { Product, ProductsRequestProp } from '../interfaces'
import { apiURL } from '../consts'

interface ResponseApi {
  ok: boolean,
  body: Product[]
}

export async function getProductsRequest (
  { search }: ProductsRequestProp
): Promise<Product[]> {

  const res = await fetch(`${apiURL}/items?s=${search}`)
  const products:ResponseApi = await res.json()

  return products.body
}
