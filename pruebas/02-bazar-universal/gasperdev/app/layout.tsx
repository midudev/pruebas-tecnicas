import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BazarUniversal",
  description:
    "Bienvenido a la experiencia de compras definitiva! En BazarUniversal, te invitamos a explorar un universo de productos que abarca desde lo esencial hasta lo extraordinario. Con nuestra aplicación, tu búsqueda de artículos se convierte en una emocionante travesía donde la diversidad y la conveniencia se encuentran.comparte con tu amigo el producto que te guste",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
