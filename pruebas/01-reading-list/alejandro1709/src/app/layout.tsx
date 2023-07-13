import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import './globals.css';
import Modal from '@/components/Modal';

export const metadata: Metadata = {
  title: 'Reading List',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col md:max-w-screen-md md:mx-auto lg:max-w-screen-lg lg:mx-auto xl:max-w-screen-xl xl:mx-auto'>
        <div className='flex-1 flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 m-4 md:m-6 lg:m-8 xl:m-10'>
          {/* Navbar */}
          <Navbar />
          {/* Main */}
          <main className='flex-1'>{children}</main>
        </div>
        {/* Popup modal */}
        <Modal />
      </body>
    </html>
  );
}
