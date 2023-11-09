import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bazar-online-prueba.vercel.app/'),
  title: 'Bazar Online Prueba Tecnica #2',
  description: 'Prueba tecnica #2 de Bazar Online',
  keywords: [
    'Bazar Online',
    'Marketplace',
    'Online Store',
    'E-commerce',
    'Prueba tecnica',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
  ],
  authors: [{ name: 'lace04', url: 'https://github.com/lace04' }],
  openGraph: {
    title: 'Bazar Online',
    description: 'Bazar Online Prueba. Next.js, Tailwind CSS, TypeScript.',
    url: 'https://bazar-online-prueba.vercel.app/',
    siteName: 'Bazar Online Prueba',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@luisace',
    title: 'Bazar Online',
    description: 'Bazar Online Prueba. Next.js, Tailwind CSS, TypeScript.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav className='w-full'>
          <Header />
        </nav>
        {children}
      </body>
    </html>
  );
}
