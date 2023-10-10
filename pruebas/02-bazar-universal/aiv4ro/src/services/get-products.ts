import { hostUrl } from '@/constants/env'
import { Product } from '@/types/product'

export async function getProducts ({ search = '' }: { search?: string } = {}): Promise<Product[]> {
  return await fetch(`${hostUrl}/api/items?search=${search}`)
    .then(async res => await res.json())
}
