import { Suspense } from "react"

import type { Metadata } from "next"
import { Nunito_Sans, Fira_Code } from "next/font/google"

// These styles apply to every route in the application
import "./globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito"
})
const firaMono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-mono"
})

// This is automatically injected into the html 'head' tag
export const metadata: Metadata = {
  title: "Simple Shop",
  description:
    "Simple Shop. The best place to find and buy everything you need",
  applicationName: "Simple Shop",
  keywords: ["Market", "Online Store", "Smartphone", "Laptop", "Tech Products"],
  authors: [
    { name: "Fernando Chazarreta", url: "https://github.com/fernandochaza" }
  ],
  creator: "Fernando Chazarreta",
  openGraph: {
    title: "Simple Shop",
    description:
      "Simple Shop. The best place to find and buy everything you need",
    //   url: 'https://nextjs.org',
    siteName: "Simple Shop",
    //   images: [
    //     {
    //       url: 'https://nextjs.org/og.png',
    //       width: 800,
    //       height: 600,
    //     },
    //     {
    //       url: 'https://nextjs.org/og-alt.png',
    //       width: 1800,
    //       height: 1600,
    //       alt: 'My custom alt',
    //     },
    //   ],
    locale: "en_US",
    type: "website"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${firaMono.variable} font-sans h-screen`}>
        {children}
      </body>
    </html>
  )
}

// TODO: Add favicon and icons to the root app route and Next.js will automatically generate the header links to them
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#image-files-ico-jpg-png