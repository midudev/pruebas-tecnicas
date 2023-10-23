import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function NotFoundComponent() {
  return (
    <main className='w-full h-screen py-12 md:py-24 lg:py-32 bg-slate-50/80'>
      <section className='container px-4 md:px-6'>
        <article className='grid gap-6 items-center'>
          <div className='flex flex-col justify-center space-y-4 text-left mx-auto'>
            <figure className='space-y-2 flex flex-col'>
              <div className='flex justify-center items-center mx-auto'>
                <img src='/not-found.svg' alt='Not found' className='w-64' />
              </div>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500'>
                PAGE NOT FOUND
              </h1>
              <p className='text-zinc-900 md:text-xl dark:text-zinc-100 text-left'>
                <p>We looked everywhere for this page.</p>
                <p>Are you sure the website URL is correct? </p>
                <p>Get in touch with the site owner.</p>
              </p>
            </figure>
            <nav className='w-full max-w-sm space-y-2'>
              <Link
                className='underline underline-offset-2 text-black'
                href='/'
              >
                <Button
                  variant='outline'
                  className='hover:bg-secondary/60 trasition duration-300 border border-slate-400'
                >
                  Go Back
                </Button>
              </Link>
            </nav>
          </div>
        </article>
      </section>
    </main>
  );
}
