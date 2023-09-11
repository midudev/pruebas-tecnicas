"use client"

import { useEffect, useRef } from "react"
import autoAnimate from "@formkit/auto-animate"
import ProductCard from "./ProductCard"

import { fetchProductsByString } from "@/utils/fetchIProductsByString"

import { type Product } from "@/lib/types"
import { useFetchProductsByString } from "@/hooks/useFetchProductsByString"

const ItemsSection = ({
  className,
  query
}: {
  className: string
  query: string
}) => {
  const parent = useRef(null)
  const { results, isLoading } = useFetchProductsByString(query)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <section ref={parent} className={className}>
      {isLoading ? (
        <p className="text-2xl font-bold text-center">Loading...</p>
      ) : results.length === 0 ? (
        <p className="text-2xl font-bold text-center">No results found</p>
      ) : (
        results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </section>
  )
}

export default ItemsSection
