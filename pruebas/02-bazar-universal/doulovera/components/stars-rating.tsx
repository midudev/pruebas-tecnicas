import { Star } from './icons/star'
import { StarHalf } from './icons/star-half'

export function StarsRating ({ rating }: { rating: number }) {
  const filledStars = Array.from({ length: 5 }, (_, index) => {
    const ratingNumber = Math.floor(rating * 2) / 2
    const starIndex = index + 1

    if (starIndex <= ratingNumber) return <Star key={index} className="w-4 h-4 text-yellow-500" fill />
    if (starIndex > ratingNumber && starIndex < ratingNumber + 1) return <StarHalf key={index} className="w-4 h-4 text-yellow-500" />
    if (starIndex >= ratingNumber + 1) return <Star key={index} className="w-4 h-4 text-yellow-500" />
    return null
  })

  return (
    <div className="flex gap-0.5 items-center my-2">
      {filledStars}
    </div>
  )
}
