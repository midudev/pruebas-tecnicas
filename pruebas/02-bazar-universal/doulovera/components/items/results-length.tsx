'use client'

import { useState } from 'react'

export default function ResultsLength () {
  const [searchQuery, setSearchQuery] = useState<string>('pote')
  const [items, setItems] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([
    { emoji: '📱', title: 'smartphone', foundLength: 5 },
    { emoji: '🧴', title: 'fragance', foundLength: 2 },
  ])

  return (
    <div className="flex flex-col gap-3">
      <p>
        Resultados de búsqueda de &quot;{searchQuery}&quot;: <span className="font-bold">{items.length}</span>
      </p>
      <div>
        <ul className="flex gap-4 text-sm">
          {
            categories.map((category, index) => (
              <li key={index} className="bg-brand-light py-1.5 px-2 rounded-lg">
                <p>{category.emoji}{category.title} - <span>{category.foundLength}</span></p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
