import { useEffect, useState } from "react"
import { fetchProductsByCategory } from "@/utils/fetchProductsByCategory"
import { type Product } from "@/lib/types"

export function useFetchProductsByCategory(category: string) {
  const [results, setResults] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetchProductsByCategory(category)
      .then((products) => {
        setResults(products)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      })
  }, [category])

  return { results, isLoading, error }
}
