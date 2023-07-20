'use client'

import { useBookList } from '@/hooks/useBookList'
import { useFilters } from '@/hooks/useFilters'

import { BookList } from './BookList'
import { FilterSection } from './Filter/FilterSection'

import homeStyles from '@/assets/styles/Home.module.css'
import { allGenre } from '@/assets/constants'

function filterBook({
  genre,
  maxNumberPages,
  currentGenre,
  pages
}: {
  currentGenre: string
  genre: string
  maxNumberPages: number
  pages: number
}) {
  const inRange = pages <= maxNumberPages
  const equalGenre = currentGenre === allGenre ? true : currentGenre === genre

  return inRange && equalGenre
}

export function BookDashboard() {
  const { range, currentGenre } = useFilters()
  const { listBooksAvailable, readingList } = useBookList()

  const currentListBooksAvailable = listBooksAvailable.filter(({ genre, pages }) =>
    filterBook({ currentGenre, genre, maxNumberPages: range.currentNumberPages, pages })
  )

  const currentReadingList = readingList.filter(({ genre, pages }) =>
    filterBook({ currentGenre, genre, maxNumberPages: range.maxNumberPages, pages })
  )

  return (
    <>
      <FilterSection />
      <article className={homeStyles.homeMain__bookDashboard}>
        <section className={homeStyles.homeMain__bookListSection}>
          <h2 className={homeStyles.homeMain__bookListSection__title}>Libros disponibles</h2>
          <BookList books={currentListBooksAvailable} listType='available' />
        </section>
        <section className={homeStyles.homeMain__bookListSection}>
          <h2 className={homeStyles.homeMain__bookListSection__title}>Lista de lectura</h2>
          <ul>
            <BookList books={currentReadingList} listType='reading' />
          </ul>
        </section>
      </article>
    </>
  )
}
