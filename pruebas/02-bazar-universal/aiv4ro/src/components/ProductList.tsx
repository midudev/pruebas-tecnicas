import { Product } from '@/types/product'
import { CategoryLink } from './CategoryLink'

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
            <CategoryLink key={category} category={category} count={count} />
          )
        })}
      </ul>
      <ul className='flex flex-col'>
        {products.map(product => {
          return (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
