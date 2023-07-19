import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";

import type { Metadata } from 'next'
import { Shantell_Sans } from 'next/font/google'
import { Navbar } from './components/Navbar'

const shantell_sans = Shantell_Sans({weight: "400", style: "normal", subsets:["latin-ext"]})

export const metadata: Metadata = {
  title: 'Reading list',
  description: 'Prueba técnica de práctica para midudev',
  themeColor: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={shantell_sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
