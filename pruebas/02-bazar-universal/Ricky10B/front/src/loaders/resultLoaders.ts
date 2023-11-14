import { RequestLoader } from '../interfaces'
import { getProductsRequest } from '../services/getProducts'

export async function loader ({ request }: RequestLoader) {
  const url = new URL(request.url)
  const search = url.searchParams.get('search')
  const products = await getProductsRequest({ search })

  return { products }
}
