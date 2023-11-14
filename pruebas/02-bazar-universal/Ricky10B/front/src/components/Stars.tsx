import { Star, StarFilled, StarHalf } from '../icons'

interface StarsProps {
  rating: number
}

export function Stars ({ rating }: StarsProps) {
  let [numberRating, numberDecimalRating] = rating.toString().split('.')

  if (Number(numberRating) < 0) {
    numberRating = '0'
    numberDecimalRating = '0'
  } else if (Number(numberRating) > 5) {
    numberRating = '5'
    numberDecimalRating = '0'
  }

  const isHalfStar = Number(numberDecimalRating?.[0] ?? 0) > 2

  return (
    <span
      className='flex items-center text-yellow-400'
      role='img'
      aria-hidden='true'
    >
      {
        Array(
          Number(numberRating)
        ).fill(0).map((_, i) => (
          <StarFilled key={i} />
        ))
      }
      {
        isHalfStar && (
          <StarHalf />
        )
      }
      {
        Array(
          5 - (Number(numberRating) + Number(isHalfStar))
        ).fill(0).map((_, i) => (
          <Star key={i} />
        ))
      }
    </span>
  )
}
