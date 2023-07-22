import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CategoryProvider } from './context/books'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={`${inter.className} overflow-x-hidden`}>
        <CategoryProvider>{children}</CategoryProvider>
      </body>
    </html>
  )
}
