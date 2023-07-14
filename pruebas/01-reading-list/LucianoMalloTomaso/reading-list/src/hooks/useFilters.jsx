import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
         (
           filters.category === 'all' ||
          product.category === filters.category
         )
      )
    })
  }
  const sortProducts = (products) => {
    return filters.orderByPrice
      ? [...products].sort((a, b) => a.price - b.price)
      : products
  }

  return { filters, filterProducts, setFilters, sortProducts }
}
