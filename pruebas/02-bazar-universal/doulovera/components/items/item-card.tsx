import type { ProductChunk } from '@/types/product'

import Image from 'next/image'
import Link from 'next/link'
import formatPrice from '@/utils/format-price'
import { StarsRating } from '../stars-rating'

export function ItemCard ({ item }: { item: ProductChunk }) {
  return (
    <article>
      <Link href={`/items/${item.id}`} className="flex justify-between flex-col gap-4 w-full min-w-[16rem] px-4">
        <div className="relative w-full h-64">
          <p className="absolute top-2 right-2 z-10 p-1.5 rounded-lg text-xs font-semibold bg-brand-dark text-white">
            -{item.discountPercentage}%
          </p>
          <Image
            src={item.thumbnail}
            alt={item.title}
            className="rounded-lg object-cover"
            sizes='(min-width: 768px) 16rem, 100vw'
            fill
          />
        </div>
        <div className="">
          <h2 className="font-title">{item.title}</h2>
          <p className="line-clamp-3 overflow-hidden text-sm">{item.description}</p>

          <StarsRating rating={item.rating} />

          <p className="flex items-center gap-4">
            <span className="text-lg">{formatPrice(item.discountPrice)}</span>
            <span className="line-through">{formatPrice(item.price)}</span>
          </p>
        </div>
      </Link>
    </article>
  )
}
