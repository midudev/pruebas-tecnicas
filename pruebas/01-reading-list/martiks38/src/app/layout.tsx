import { Providers } from './providers'
import { ToastContainer } from 'react-toastify'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Readling list',
  description: 'Prueba técnica frontend junior'
}

export default function RootLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <html lang='es'>
      <body>
        <Providers>{children}</Providers>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={false}
          draggable={false}
          theme='light'
        />
      </body>
    </html>
  )
}
