import { Product } from '@/types/product'
import Link from 'next/link'
import { ProductPrice } from './ProductPrice'
import { ProductRating } from './ProductRating'

export function ProductItem ({
  product
}: {
  product: Product
}) {
  return (
    <article>
      <Link href={`/items/${product.id}`} className='flex items-center gap-3 hover:bg-zinc-800 rounded p-2'>
        <picture className='min-w-fit'>
          <img className='w-14 h-14 aspect-square object-cover overflow-hidden rounded-full' src={product.images[0]} alt={product.title} />
        </picture>
        <div className='flex flex-col'>
          <h3 className='text-xl font-semibold'>{product.title}</h3>
          <p className='text-sm'>{product.description}</p>
          <div className='flex justify-between items-center'>
            <ProductPrice price={product.price} />
            <ProductRating rating={product.rating} />
          </div>
        </div>
      </Link>
    </article>
  )
}
