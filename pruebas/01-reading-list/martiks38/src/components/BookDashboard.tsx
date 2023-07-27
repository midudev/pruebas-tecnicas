'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { useBookList } from '@/hooks/useBookList'
import { useFilters } from '@/hooks/useFilters'

import { BookList } from './BookList'
import { FilterSection } from './Filter/FilterSection'

import homeStyles from '@/assets/styles/Layout/Home.module.css'
import bookDashboardStyles from '@/assets/styles/Book/BookDashboard.module.css'
import bookFinderAvailableStyles from '@/assets/styles/Book/BookFinderAvailable.module.css'
import { filterBook } from '@/helpers/filterBook'
import { BookDataList } from '@/assets/values'

const initialViews = {
  tabs: { bookListAvailable: true, readingList: true, filters: true },
  mode: 'desktop'
}

export function BookDashboard() {
  const [filterWord, setFilterWord] = useState('')
  const [seeLists, setSeeLists] = useState<typeof initialViews>(initialViews)
  const [lists, setLists] = useState<{
    listBooksAvailable: BookDataList
    readingList: BookDataList
  }>({
    listBooksAvailable: [],
    readingList: []
  })
  const { range, currentGenre } = useFilters()
  const { listBooksAvailable, readingList } = useBookList()
  const searchId = useId()
  const setTimeoutId = useRef<number | undefined>(undefined)
  const isFirstRender = useRef(true)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      const changeDashboardView = width < 881

      if (seeLists.mode === 'desktop' && changeDashboardView) {
        setSeeLists({
          tabs: { bookListAvailable: true, readingList: false, filters: false },
          mode: 'mobile'
        })
      }

      if (!changeDashboardView) setSeeLists(initialViews)
    }

    if (isFirstRender.current) {
      handleResize()
      isFirstRender.current = false
    }

    const throttle = (callback: () => void, delay: number) => {
      let lastCall = 0
      return function () {
        const now = new Date().getTime()
        if (now - lastCall >= delay) {
          lastCall = now
          callback()
        }
      }
    }

    const throttledHandleResize = throttle(handleResize, 50)

    window.addEventListener('resize', throttledHandleResize)

    return () => window.removeEventListener('resize', throttledHandleResize)
  }, [seeLists])

  const changeList = (type: keyof typeof initialViews.tabs) => {
    const tabs = Object.entries(initialViews.tabs)

    tabs.forEach((tab, ind, entries) => {
      const [key] = tab

      entries[ind][1] = key === type
    })

    setSeeLists((prevViews) => ({
      ...prevViews,
      tabs: Object.fromEntries(tabs) as typeof initialViews.tabs
    }))
  }

  const changeFilterWord = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (setTimeoutId.current) window.clearTimeout(setTimeoutId.current)

    const { value } = ev.currentTarget

    setTimeoutId.current = window.setTimeout(() => setFilterWord(value.trim() || ''), 400)
  }

  useEffect(() => {
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

    setLists({ listBooksAvailable: currentListBooksAvailable, readingList: currentReadingList })
  }, [currentGenre, filterWord, listBooksAvailable, range, readingList])

  return (
    <article className={homeStyles.homeMain__bookDashboard}>
      <menu className={bookDashboardStyles.bookListMenu}>
        <li>
          <button
            className={`${bookDashboardStyles.bookListMenu__item} ${
              seeLists.tabs.bookListAvailable ? bookDashboardStyles.active : ''
            }`}
            onClick={() => changeList('bookListAvailable')}
          >
            Ver libros disponibles
          </button>
        </li>
        <li>
          <button
            className={`${bookDashboardStyles.bookListMenu__item} ${
              seeLists.tabs.readingList ? bookDashboardStyles.active : ''
            }`}
            onClick={() => changeList('readingList')}
          >
            Ver lista de lectura
          </button>
        </li>
        <li>
          <button
            className={`${bookDashboardStyles.bookListMenu__item} ${
              seeLists.tabs.filters ? bookDashboardStyles.active : ''
            }`}
            onClick={() => changeList('filters')}
          >
            Filtros
          </button>
        </li>
      </menu>
      {seeLists.tabs.filters && <FilterSection />}
      {seeLists.tabs.bookListAvailable && (
        <section className={bookDashboardStyles.bookListSection}>
          <h2 className={bookDashboardStyles.bookListSection__title}>
            Libros disponibles&nbsp;
            <span suppressHydrationWarning={true}>
              {lists.listBooksAvailable.length !== 0 ? lists.listBooksAvailable.length : ''}
            </span>
          </h2>
          <form className={bookFinderAvailableStyles.searchContainer}>
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
          </form>
          {lists.listBooksAvailable.length !== 0 ? (
            <BookList books={lists.listBooksAvailable} listType='available' />
          ) : (
            <p className={bookFinderAvailableStyles.searchContainer__message}>
              {filterWord
                ? `No se encontraron libros que coincidan con ${filterWord}`
                : 'No hay libros disponibles'}
            </p>
          )}
        </section>
      )}
      {seeLists.tabs.readingList && (
        <section className={bookDashboardStyles.bookListSection}>
          <h2 className={bookDashboardStyles.bookListSection__title}>
            Lista de lectura&nbsp;
            <span suppressHydrationWarning={true}>
              {lists.readingList.length !== 0 ? lists.readingList.length : ''}
            </span>
          </h2>
          {lists.readingList.length !== 0 ? (
            <BookList books={lists.readingList} listType='reading' />
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
      )}
    </article>
  )
}
