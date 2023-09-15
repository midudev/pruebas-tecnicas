"use client"

import { useEffect, useRef } from "react"
import autoAnimate from "@formkit/auto-animate"
import ProductCard from "./ProductCard"

import { type Product } from "@/lib/types"
import { useFetchProductsByCategory } from "@/hooks/useFetchProductByCategory"

/**
 * Displays a section of products by category.
 */
const CategorySection = ({
  className,
  category
}: {
  className: string
  category: string
}) => {
  const parent = useRef(null)
  const { results, isLoading } = useFetchProductsByCategory(category)

  const resultsLength = results.length

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <>
      <p className="font-sans text-lg ml-2 mt-2">
        {resultsLength} {resultsLength == 1 ? "product" : "products"} found in "
        {category}"
      </p>
      <section ref={parent} className={className}>
        {isLoading ? (
          <p className="text-2xl font-bold text-center">Loading...</p>
        ) : resultsLength == 0 ? (
          <p className="text-2xl font-bold text-center">No results found</p>
        ) : (
          results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </section>
    </>
  )
}

export default CategorySection
