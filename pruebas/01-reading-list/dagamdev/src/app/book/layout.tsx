import styles from './book.module.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Books list',
  description: 'Aplicacion que lista los libros, puedes seleccionar los libros que leeras.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.book}>
      {children}
    </main>
  )
}