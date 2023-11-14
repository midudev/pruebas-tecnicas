import { ItemLoaderParams } from '../interfaces'
import { getProductRequest } from '../services/getProduct'

export async function loader ({ params }: ItemLoaderParams) {  
  const { id } = params
  const product = await getProductRequest({ idProduct: Number(id) })

  return { product }
}
