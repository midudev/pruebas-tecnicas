import { FilterProvider } from '@/context/filter'
import { BookListProvider } from '@/context/bookList'

import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Readling list',
  description: 'Prueba técnica frontend junior'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <BookListProvider>
        <FilterProvider>
          <body>{children}</body>
        </FilterProvider>
      </BookListProvider>
    </html>
  )
}
