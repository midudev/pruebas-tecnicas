import { useEffect, useState } from "react"
import { Product } from "@/lib/types"
import { fetchProductsByString } from "@/utils/fetchIProductsByString"

export function useFetchProductsByString(query: string) {
  const [results, setResults] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetchProductsByString(query)
      .then((products) => {
        setResults(products)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      })
  }, [query])

  return { results, isLoading, error }
}
