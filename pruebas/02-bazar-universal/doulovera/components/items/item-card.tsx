import type { ProductChunk } from '@/types/product'

import Image from 'next/image'
import { StarFilled } from '../icons/star-filled'
import { StarHalf } from '../icons/star-half'
import { Star } from '../icons/star'

export function ItemCard ({ item }: { item: ProductChunk }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(item.price)

  const filledStars = Array.from({ length: 5 }, (_, index) => {
    const rating = Math.floor(item.rating * 2) / 2
    const starIndex = index + 1

    if (starIndex <= rating) return <StarFilled key={index} className="w-4 h-4" />
    if (starIndex > rating && starIndex < rating + 1) return <StarHalf key={index} className="w-4 h-4" />
    if (starIndex >= rating + 1) return <Star key={index} className="w-4 h-4" />
    return null
  })

  return (
    <article className="flex justify-between flex-col gap-2 w-full min-w-[16rem] px-4">
      <div className="relative w-full h-64">
        <Image
          src={item.thumbnail}
          alt={item.title}
          className="rounded-md object-cover"
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

        <h3 className="text-xl">
          {formattedPrice}
          <span className="text-xs text-brand-darker align-middle"> -{item.discountPercentage}% OFF</span>
        </h3>
      </div>
    </article>
  )
}
