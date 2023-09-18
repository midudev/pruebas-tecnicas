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
      className={`cursor-pointer row-start-1 col-start-2 text-sm border w-fit rounded-full px-2 h-fit ml-auto mt-auto mb-1 text-blue-800 ${className}`}
    >
      {category}
    </div>
  )
}

export default CategoryButton
