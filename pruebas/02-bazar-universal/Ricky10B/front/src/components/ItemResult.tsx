import { Link } from 'react-router-dom'
import { Stars } from './Stars'
import { Product } from '../interfaces'

interface ItemResultProps {
  product: Product
}

export function ItemResult ({ product }: ItemResultProps) {
  if (!product) return null

  return (
    <li>
      <Link to={`/items/${product.id}`} className='flex gap-2'>
        <picture className='flex justify-center items-center'>
          <img
            src={product.thumbnail}
            alt={`Image of ${product.title}`}
            className='max-w-[140px] w-36 aspect-square rounded-full'
            loading='lazy'
          />
        </picture>
        <div className='flex flex-col gap-1 text-left'>
          <h3 className='font-bold text-xl'>{product.title}</h3>
          <p
            className='text-gray-900 font-medium'
            role='paragraph'
          >
            {product.description}
          </p>
          <div className='flex justify-between'>
            <span className='font-bold text-lg'>{product.price}$</span>
            <Stars rating={product.rating} />
          </div>
        </div>
      </Link>
    </li>
  )
}
