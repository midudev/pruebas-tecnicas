'use client'

import { useId, useRef, useState } from 'react'
import { useBookList } from '@/hooks/useBookList'
import { useFilters } from '@/hooks/useFilters'

import { BookList } from './BookList'
import { FilterSection } from './Filter/FilterSection'

import homeStyles from '@/assets/styles/Layout/Home.module.css'
import bookDashboardStyles from '@/assets/styles/Book/BookDashboard.module.css'
import bookFinderAvailableStyles from '@/assets/styles/Book/BookFinderAvailable.module.css'
import { allGenre } from '@/assets/constants'

function filterBook({
  genre,
  maxNumberPages,
  currentGenre,
  pages,
  title,
  word
}: {
  currentGenre: string
  genre: string
  maxNumberPages: number
  pages: number
  title?: string
  word?: string
}) {
  const inRange = pages <= maxNumberPages
  const equalGenre = currentGenre === allGenre ? true : currentGenre === genre

  if (word === undefined || title === undefined) return inRange && equalGenre

  const regex = new RegExp(word, 'i')

  return regex.test(title) && inRange && equalGenre
}

export function BookDashboard() {
  const [filterWord, setFilterWord] = useState('')
  const { range, currentGenre } = useFilters()
  const { listBooksAvailable, readingList } = useBookList()
  const searchId = useId()
  const setTimeoutId = useRef<number | undefined>(undefined)

  const changeFilterWord = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (setTimeoutId.current) window.clearTimeout(setTimeoutId.current)

    const { value } = ev.currentTarget

    setTimeoutId.current = window.setTimeout(() => setFilterWord(value.trim() || ''), 400)
  }

  const currentListBooksAvailable = listBooksAvailable.filter(({ genre, pages, title }) =>
    filterBook({
      currentGenre,
      genre,
      maxNumberPages: range.currentNumberPages,
      pages,
      title,
      word: filterWord
    })
  )

  const currentReadingList = readingList.filter(({ genre, pages }) =>
    filterBook({ currentGenre, genre, maxNumberPages: range.currentNumberPages, pages })
  )

  return (
    <>
      <FilterSection />
      <article className={homeStyles.homeMain__bookDashboard}>
        <section className={bookDashboardStyles.bookListSection}>
          <h2 className={bookDashboardStyles.bookListSection__title}>
            Libros disponibles{' '}
            {currentListBooksAvailable.length !== 0 ? currentListBooksAvailable.length : ''}
          </h2>
          <search className={bookFinderAvailableStyles.searchContainer}>
            <label
              htmlFor={`${searchId}-search`}
              className={bookFinderAvailableStyles.searchContainer__label}
            >
              Buscar libro:
            </label>
            <input
              type='search'
              name={`${searchId}-search`}
              id={`${searchId}-search`}
              className={bookFinderAvailableStyles.searchContainer__input}
              placeholder='La llamada de Cthulhu'
              onChange={changeFilterWord}
            />
          </search>
          {currentListBooksAvailable.length !== 0 ? (
            <BookList books={currentListBooksAvailable} listType='available' />
          ) : (
            <p className={bookFinderAvailableStyles.searchContainer__message}>
              {filterWord
                ? `No se encontraron libros que coincidan con ${filterWord}`
                : 'No hay libros disponibles'}
            </p>
          )}
        </section>
        <section className={bookDashboardStyles.bookListSection}>
          <h2 className={bookDashboardStyles.bookListSection__title}>
            Lista de lectura {currentReadingList.length !== 0 ? currentReadingList.length : ''}
          </h2>
          {currentReadingList.length !== 0 ? (
            <BookList books={currentReadingList} listType='reading' />
          ) : (
            <>
              <p className={bookFinderAvailableStyles.searchContainer__message}>
                No hay libros en la lista.
              </p>
              <p className={bookFinderAvailableStyles.searchContainer__message}>
                A qué esperas para sumergirte en una nueva aventura.
              </p>
            </>
          )}
        </section>
      </article>
    </>
  )
}
