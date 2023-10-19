import { Product } from '@/types/product'
import { CategoryLink } from './CategoryLink'
import { ProductItem } from './ProductItem'

export function ProductList ({
  products
}: {
  products: Product[]
}) {
  const categoryCounts = Object.entries(products.reduce<Record<string, number>>((acc, product) => {
    acc[product.category] ??= 0
    acc[product.category] += 1
    return acc
  }, {}))

  return (
    <div className='flex flex-col'>
      <ul className='flex gap-3 flex-wrap'>
        {categoryCounts.map(([category, count]) => {
          return (
            <li key={category}>
              <CategoryLink category={category} count={count} />
            </li>
          )
        })}
      </ul>
      <ul className='flex flex-col gap-3 mt-3'>
        {products.map(product => {
          return (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
