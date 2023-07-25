'use client'

import global from './styles/global.module.css';
import { MainProvider } from './context/main.context';

const Bootstrap = () => 
  <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
  </>

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <head><Bootstrap/></head>
      <body className={global.body}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  )
}
