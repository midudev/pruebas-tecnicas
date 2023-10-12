import { BaseProduct } from '@/types/product'
import * as productsList from '../../../../../products.json'

type FindProductByIdProps = {
  id: number
}
export async function findProductById ({ id }: FindProductByIdProps) {
  const product = productsList.products.find(x => x.id.toString() === id.toString())
  if (!product) throw new Error('Product not found')

  // Simulamos un delay de 1 segundo para que se vea el loading
  await new Promise(resolve => setTimeout(resolve, 1000))

  return product
}

type FindProductsByQueryProps = {
  query: string
}
export async function findProductsByQuery ({ query }: FindProductsByQueryProps) {
  const products = productsList.products.filter(x =>
    x.title.toLowerCase().includes(query.toLowerCase()) ||
    x.description.toLowerCase().includes(query.toLowerCase()))

  // Los mapeamos a BaseProduct
  const parsedProducts = products.map(x => ({
    id: x.id,
    title: x.title,
    description: x.description,
    price: x.price,
    rating: x.rating,
    image: x.images[0]
  } as BaseProduct))

  // Simulamos un delay de 1 segundo para que se vea el loading
  await new Promise(resolve => setTimeout(resolve, 1000))

  return parsedProducts
}
