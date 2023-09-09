import { Toaster } from 'sonner'
import { useBooks } from '../hooks/useBooks'

import { Header } from './Header'
import { ListOfBooks } from './ListOfBooks'
import { ListOfReadingList } from './ListOfReadingList'
import { Loading } from './Loading'
import { Error } from './Error'
import { Footer } from './Footer'

export function BooksApp () {
  const { error, loading } = useBooks()

  return (
    <>
      <main className='md:px-5'>
        <Header />
        <h1 className='text-center text-4xl py-3 text-[#171717]'>Biblioteca</h1>

        {error && <Error />}
        {
        loading
          ? <Loading />
          : (
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-2'>
              <ListOfBooks />
              <ListOfReadingList />
            </section>
            )

        }
        <Toaster />
      </main>

      <Footer />
    </>
  )
}
