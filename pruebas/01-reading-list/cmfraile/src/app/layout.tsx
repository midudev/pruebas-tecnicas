'use client'

import global from './styles/global.module.css';
import { MainProvider } from './context/main.context';

const Bootstrap = () => 
  <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
  </>

const Fonts = () => 
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"/>
  </>

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <head><Bootstrap/><Fonts/></head>
      <body className={global.body}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  )
}
