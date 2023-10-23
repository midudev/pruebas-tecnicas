'use client'

import type { ProductChunk, ProductsApiResponse } from '@/types/product'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { ItemsHeader } from '@/components/items/header'
import { CategoriesState, ResultsCount } from '@/components/items/results-length'
import { ItemsList } from '@/components/items/items-list'
import { CATEGORIES } from '@/constants'

export function SearchResultsContent () {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

  const [items, setItems] = useState<ProductChunk[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const [categories, setCategories] = useState<CategoriesState[]>([])

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`/api/items?q=${search}`)
      const data: ProductsApiResponse = await response.json()
      const categories = data.categories.map((category) => {
        return {
          title: category.category,
          count: category.total,
          emoji: CATEGORIES[category.category],
        }
      })

      setItems(data.items)
      setTotalItems(data.total)
      setCategories(categories)
    }

    fetchItems()
  }, [search])

  return (
    <>
      <ItemsHeader>
        <ResultsCount categories={categories} totalItems={totalItems} />
      </ItemsHeader>
      <ItemsList items={items} />
    </>
  )
}
