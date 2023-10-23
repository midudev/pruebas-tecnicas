import type { ProductChunk } from '@/types/product'

import Image from 'next/image'
import { StarHalf } from '../icons/star-half'
import { Star } from '../icons/star'
import Link from 'next/link'

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function ItemCard ({ item }: { item: ProductChunk }) {
  const filledStars = Array.from({ length: 5 }, (_, index) => {
    const rating = Math.floor(item.rating * 2) / 2
    const starIndex = index + 1

    if (starIndex <= rating) return <Star key={index} className="w-4 h-4 text-yellow-500" fill />
    if (starIndex > rating && starIndex < rating + 1) return <StarHalf key={index} className="w-4 h-4 text-yellow-500" />
    if (starIndex >= rating + 1) return <Star key={index} className="w-4 h-4 text-yellow-500" />
    return null
  })

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

          <div className="flex gap-0.5 items-center my-2">
            {filledStars}
          </div>

          <p className="flex items-center gap-4">
            <span className="text-lg">{formatPrice(item.discountPrice)}</span>
            <span className="line-through ml">{formatPrice(item.price)}</span>
          </p>
        </div>
      </Link>
    </article>
  )
}
