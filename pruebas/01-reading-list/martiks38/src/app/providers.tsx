'use client'

import { BookListProvider } from '@/context/bookList'
import { FilterProvider } from '@/context/filter'

export function Providers({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <BookListProvider>
      <FilterProvider>{children}</FilterProvider>
    </BookListProvider>
  )
}
