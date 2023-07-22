import { useState, useEffect } from 'react'
import { useReadListStore } from '../stores/BookStore'
import { getBooks } from '../services/books'

export const useQuantity = () => {
  const [quantityBooks, setQuantityBooks] = useState(0)
  const { readList } = useReadListStore()

  useEffect(() => {
    async function getQuantity () {
      const { quantity } = await getBooks()
      setQuantityBooks(quantity)
    }
    getQuantity()
  }, [])

  return {
    quantityBooks: quantityBooks - readList.length,
    setQuantityBooks
  }
}
