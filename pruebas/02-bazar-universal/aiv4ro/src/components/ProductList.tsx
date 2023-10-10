import { Product } from '@/types/product'

export function ProductList ({
  products
}: {
  products: Product[]
}) {
  return (
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
  )
}
