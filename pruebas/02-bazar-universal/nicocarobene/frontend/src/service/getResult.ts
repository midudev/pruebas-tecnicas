import type { Product } from '../utils/types'
import { products as ListOfProduct } from '../../../../products.json'
export const getResult = async ({ queryParam }: { queryParam: string }): (Promise<{ result: Product[], categories: {[key: string]: number} }>) => {
  const query = queryParam === '' ? 0 : queryParam.toLowerCase()
  let products
  try {
    products = await fetch(`http://localhost:3000/api/items?q=${query}`)
  } catch (error) {
    console.error('Error fetching data to Bun server')
  }
  const categories = {}
  const result = products ? await products.json() : ListOfProduct
  if (!result.error) {
    result.forEach((item) => {
      if (categories[item.category]) {
        categories[item.category] += 1
        return
      }
      categories[item.category] = 1
    })
  }
  return { result, categories }
}
export const getItemById = ({ id }:{id:string}) : Promise<Product> => {
  return fetch(`http://localhost:3000/api/item/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Error fetching data')
      }
      return res.json()
    })
    .catch(() => {
      console.log('error fetching data')
    })
}
