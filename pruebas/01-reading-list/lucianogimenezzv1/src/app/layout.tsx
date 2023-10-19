import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import style from './styles/layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookzon',
  description: 'Tu tienda de libros ideal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className={`px-4 max-w-screen-lg m-auto grid min-h-screen gap-4 ${style.container}`}>
          <nav className='flex pt-4 text-3xl'>BookZon📚</nav>
          <section>
            {children}
          </section>
          <footer className='flex items-end pb-4 justify-center text-lg'> by Luciano Gimenez</footer>
        </main>
        </body>
    </html>
  )
}
