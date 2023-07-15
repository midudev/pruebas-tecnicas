import Image from 'next/image'

import './globals.css'
import headerStyles from '../assets/styles/HeaderPage.module.css'
import logo from './icon.svg'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Readling list',
  description: 'Prueba técnica frontend junior'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body>
        <header className={headerStyles.headerPage}>
          <Image
            src={logo}
            alt='Reading List'
            width={36}
            height={36}
            className={headerStyles.headerPage__logo}
          />
        </header>
        {children}
      </body>
    </html>
  )
}
