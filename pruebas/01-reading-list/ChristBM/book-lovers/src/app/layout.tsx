import '@common/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@websiteComponents/NavBar/NavBar';
import MainCtxProvider from '@common/context/MainCtx/MainCtxProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Book Lovers',
  description: 'An incredible bookstore for everyone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainCtxProvider>
          <header>
            <NavBar />
          </header>

          <main>
            {children}
          </main>
        </MainCtxProvider>
      </body>
    </html>
  );
}
