import { Header } from './components/Header'
import { Aside } from './components/Aside'
import { FilterSection } from './components/FilterSection'
import { Books } from './components/BooksList'
import { getBooks } from '@/services/books.service'
import { BooksContextProvider } from '@/context/books.context'

export default async function Home() {
  const books = await getBooks()

  return (
    <main>
      <Header />
      <BooksContextProvider books={books}>
        <div className="px-6 py-12 bg-zinc-800">
          <div className="container mx-auto mb-8">
            <FilterSection />
          </div>
          <section className="container grid grid-cols-12 gap-4 mx-auto">
            <Aside />
            <Books />
          </section>
        </div>
      </BooksContextProvider>
    </main>
  )
}
