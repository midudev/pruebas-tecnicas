import { ToastContainer } from 'react-toastify'

import { FilterProvider } from '@/context/filter'
import { BookListProvider } from '@/context/bookList'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

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
          <body>
            {children}
            <ToastContainer
              position='top-right'
              autoClose={2000}
              hideProgressBar={false}
              closeOnClick={true}
              pauseOnHover={false}
              draggable={false}
              theme='light'
            />
          </body>
        </FilterProvider>
      </BookListProvider>
    </html>
  )
}
