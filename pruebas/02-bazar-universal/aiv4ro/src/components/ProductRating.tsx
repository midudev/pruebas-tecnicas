import { HalfStar } from './icons/HalfStar'
import { Star } from './icons/Star'

export function ProductRating ({
  rating
}: {
  rating: number
}) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const level = i + 1
    // fill the star if the rating is greater than or equal to the current level
    // and set half star if rating is lower than level but greater than level - 0.5

    if (rating < level && rating > level - 0.5) {
      return <HalfStar key={i} />
    }

    const twColor = rating >= level ? 'text-yellow-500' : 'text-gray-300'
    return <Star key={i} twColor={twColor} />
  })

  return (
    <div className='flex'>
      {stars}
    </div>
  )
}
