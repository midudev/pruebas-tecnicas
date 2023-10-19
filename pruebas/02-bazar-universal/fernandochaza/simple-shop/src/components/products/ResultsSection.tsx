"use client"

import { useEffect, useRef } from "react"
import autoAnimate from "@formkit/auto-animate"
import ProductCard from "./ProductCard"

import { useFetchProductsByString } from "@/hooks/useFetchProductsByString"

/**
 * Displays a section of products by search query.
 */
const ResultsSection = ({
  className,
  query
}: {
  className: string
  query: string
}) => {
  const parent = useRef(null)
  const { results, isLoading } = useFetchProductsByString(query)

  const resultsLength = results.length

  useEffect(() => {
    if (parent.current !== null) autoAnimate(parent.current)
  }, [parent])

  return (
    <section ref={parent} className={className}>
      {isLoading ? (
        <p className="text-2xl font-bold text-center">Loading...</p>
      ) : resultsLength === 0 ? (
        <p className="text-2xl font-bold text-center">No results found</p>
      ) : (
        <>
          <p className="font-sans text-lg ml-2 mt-2">
            {resultsLength} {resultsLength === 1 ? "result" : "results"} found
            for
            <i>&quot;{query}&quot;</i>
          </p>
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      )}
    </section>
  )
}

export default ResultsSection
