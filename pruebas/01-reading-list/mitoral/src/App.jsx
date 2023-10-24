import { BookList } from './components/BookList'
import { Header } from './components/Header'
import { Title } from './components/Title'
import { Footer } from './components/Footer'
import { FiltersProvider } from './context/FiltersContext'
import { ReadingListProvider } from './context/ReadingListContext'

export default function App () {
  return (
    <>
      <Header />
      <Title />
      <ReadingListProvider>
        <FiltersProvider>
          <BookList />
        </FiltersProvider>
      </ReadingListProvider>
      <Footer />
    </>
  )
}
