"use client"

import { useRouter } from "next/navigation"
import { type MouseEvent } from "react"

/**
 * Displays a category button that redirects to the category page.
 */
const CategoryButton = ({
  category,
  className
}: {
  category: string
  className?: string
}) => {
  const router = useRouter()
  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    router.push(`/items?category=${category.toLowerCase()}`)
  }

  return (
    <div
      aria-label="View products by this category"
      onClick={handleOnClick}
      className={`cursor-pointer text-blue-800 ${className}`}
    >
      {category}
    </div>
  )
}

export default CategoryButton
