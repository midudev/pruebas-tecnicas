"use client"

import React, { useEffect, useRef, useState } from "react"
import autoAnimate from "@formkit/auto-animate"
import { fetchItems } from "@/utils/fetchItems"
import ProductCard from "./ProductCard"

const ItemsSection = ({
  className,
  query
}: {
  className: string
  query: string
}) => {
  const parent = useRef(null)
  
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const [results, setResults] = useState<Array<Product>>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Array<Product> = await fetchItems(query)
        setResults(data)
      } catch (error) {
        console.error("Error fetching data:", error)
        // Todo: handle error
      }
    }

    fetchData()
  }, [query])

  return (
    <section ref={parent} className={className}>
      {results.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </section>
  )
}

export default ItemsSection
