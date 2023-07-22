import { useMemo } from 'react'
import { createPortal } from 'react-dom'
import Layout from '@/components/layout'
import BooksList from '@/components/books-list'
import Modal from '@/components/modal'
import ReadingList from '@/components/reading-list'
import { useBooks } from '@/hooks/use-books'
import { useReadingList } from '@/hooks/use-reading-list'
import { useFilters } from './hooks/use-filters'

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
          <Modal>
            <ReadingList />
          </Modal>,
          document.querySelector('#modal') as HTMLElement
        )}
    </Layout>
  )
}

export default App
