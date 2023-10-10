import { getProducts } from '@/services/get-products'
import { ProductList } from './ProductList'

export async function SearchResults ({
  search
}: {
  search: string
}) {
  const products = await getProducts({ search })

  return (
    <div className='flex flex-col px-2 mt-2'>
      <h1 className='font-semibold'>Resultados de búsqueda de "{search}": {products.length}</h1>
      <ProductList products={products} />
    </div>
  )
}
