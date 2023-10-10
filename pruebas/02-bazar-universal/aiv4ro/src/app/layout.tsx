import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bazar',
  description: 'Desarrollo Full Stack de Bazar'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-zinc-900 text-white/80 max-w-sm m-auto`}>{children}</body>
    </html>
  )
}
