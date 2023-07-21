import Header from "./components/Header";
import Footer from "./components/Footer";
import './globals.css';

export const metadata = {
  title: 'Reading List',
  description: "Find and read more books you'll love, and keep track of the books you want to read.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,400;0,600;1,700&family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </head>
      <body className='font-pop overflow-x-hidden h-auto'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
