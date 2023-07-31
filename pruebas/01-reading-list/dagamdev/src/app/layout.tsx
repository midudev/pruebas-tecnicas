import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ReadingBooksProvider from '@/providers/ReadingBooksProvider'
import Header from '@/components/shared/header/Header'
import ReadList from '@/components/read/ReadList'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Books list',
  description: 'Aplicación que lista los libros, puedes seleccionar los libros que leerás, filtrar y ordenar.',
  themeColor: '#1c2435',
  openGraph: {
    images: '/screenshot.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReadingBooksProvider>
          <Header />
          {children}
          <ReadList />
        </ReadingBooksProvider>
      </body>
    </html>
  )
}
