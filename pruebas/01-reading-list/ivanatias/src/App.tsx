import { useMemo, lazy, Suspense } from 'react'
import { createPortal } from 'react-dom'
import Layout from '@/components/layout'
import BooksList from '@/components/books-list'
import Loading from '@/components/loading'
import { useBooks } from '@/hooks/use-books'
import { useReadingList } from '@/hooks/use-reading-list'
import { useFilters } from './hooks/use-filters'

const ReadingListModal = lazy(() => import('@/components/reading-list-modal'))

function App() {
  const { books } = useBooks()
  const { readingListOpen } = useReadingList()
  const { filterBooks } = useFilters()

  const booksToShow = useMemo(() => filterBooks(books), [books, filterBooks])

  return (
    <Layout>
      <BooksList books={booksToShow} />
      {readingListOpen &&
        createPortal(
          <Suspense fallback={<Loading isFullScreen />}>
            <ReadingListModal />
          </Suspense>,
          document.querySelector('#modal') as HTMLElement
        )}
    </Layout>
  )
}

export default App
