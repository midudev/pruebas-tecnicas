import { hostUrl } from '@/constants/env'
import { Product } from '@/types/product'

export async function getProduct ({ id }: { id: string | number }): Promise<Product> {
  return await fetch(`${hostUrl}/api/items/${id}`)
    .then(async (res) => await res.json())
}
