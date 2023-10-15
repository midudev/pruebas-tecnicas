'use client'

import { useSearchParams } from 'next/navigation'

export type CategoriesState = { title: string; count: number; emoji: string; }

type ResultsLengthProps = {
  totalItems: number
  categories: CategoriesState[]
}

export function ResultsLength ({ totalItems, categories }: ResultsLengthProps) {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

  return (
    <div className="flex flex-col gap-3">
      <p>
        Resultados de búsqueda de &quot;{search}&quot;: <span className="font-bold">{totalItems}</span>
      </p>
      <div>
        <ul className="flex gap-4 text-sm">
          {
            categories.map((category, index) => (
              <li key={index} className="bg-brand-light py-1.5 px-2 rounded-lg">
                <p>{category.emoji}{category.title} - <span>{category.count}</span></p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
