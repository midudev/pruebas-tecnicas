type RatingProps = {
  rating: number
  className?: string
}

const HalfFilledStar = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={12} height={12}>
      <path d="M24 8h-8l-4-8-4 8H0l6 6.3L3.6 24l8.4-5.1 8.4 5.1-2.4-9.7L24 8zm-11 9.2-1-.6V4.5l2.2 4.4.6 1.1h4.5l-2.8 2.9-.8.8.3 1.1 1.2 5-4.2-2.6z" />
    </svg>
  )
}

const EmptyStar = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={12} height={12}>
      <path d="m12 4.5 2.2 4.4.6 1.1h4.5l-2.8 2.9-.8.8.3 1.1 1.2 5-4.2-2.6-1-.6-1 .6-4.3 2.6 1.2-5 .3-1.1-.8-.8L4.6 10h4.5l.6-1.1L12 4.5M12 0 8 8H0l6 6.3L3.6 24l8.4-5.1 8.4 5.1-2.4-9.7L24 8h-8l-4-8z" />
    </svg>
  )
}

const FilledStar = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={12} height={12}>
      <path d="m12 0 4 8h8l-6 6.32L20.42 24 12 18.9 3.58 24 6 14.32 0 8h8z" />
    </svg>
  )
}

/**
 * Displays a rating out of 5 stars.
 */
const ProductRating = ({ rating, className }: RatingProps) => {
  const filledStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = hasHalfStar ? 5 - filledStars - 1 : 5 - filledStars
  return (
    <div
      className={`text-yellow-500 flex h-fit py-1 px-4 gap-1 items-center rounded-lg shadow-[2px_2px_2px_#b0b2b3,-2px_-2px_2px_#f1f1f1] ${className}`}
    >
      {[...Array(filledStars)].map((_, index) => (
        <FilledStar key={index} />
      ))}
      {hasHalfStar && <HalfFilledStar />}
      {[...Array(emptyStars)].map((_, index) => (
        <EmptyStar key={index} />
      ))}
    </div>
  )
}

export default ProductRating
