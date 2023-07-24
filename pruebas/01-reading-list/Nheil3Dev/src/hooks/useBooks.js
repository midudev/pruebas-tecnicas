import { useEffect, useMemo, useReducer } from 'react'
import data from '../../../books.json'
import { loadState } from '../actions/booksActions'
import { LOCAL_STORAGE_TOKENS } from '../constants/localStorage'
import { BOOKS_INITIAL_STATE, booksReducer } from '../reducers/booksReducer'
import { getAllGenres } from '../utils/genres'
import { readLocalStorage } from '../utils/localStorage'
import { getMaxPages } from '../utils/pages'

export function useBooks() {
	// ESTADO + ACCIONES
	const [books, dispatchBooks] = useReducer(booksReducer, BOOKS_INITIAL_STATE)

	const loadBooks = () => {
		const newBooks = data.library.map(el => {
			return {
				ISBN: el.book.ISBN,
				title: el.book.title,
				pages: el.book.pages,
				genre: el.book.genre,
				cover: el.book.cover,
				year: el.book.year,
				isReading: false
			}
		})

		return newBooks
	}

	const allGenres = useMemo(
		() => getAllGenres(books.mainList),
		[books.mainList]
	)

	const maxPages = useMemo(() => getMaxPages(books.mainList), [books.mainList])

	// EFECTOS
	useEffect(() => {
		const localStorageState = readLocalStorage(LOCAL_STORAGE_TOKENS.BOOKS_STATE)

		const newBooks = loadBooks()

		if (!localStorageState || localStorageState?.readingList?.length === 0) {
			const newState = {
				mainList: newBooks,
				readingList: []
			}
			dispatchBooks(loadState(newState))
		} else {
			const newMainList = newBooks.map(book => {
				if (
					localStorageState.readingList.filter(el => el.ISBN === book.ISBN)
						.length === 1
				) {
					return {
						...book,
						isReading: true
					}
				}
				return book
			})
			const newState = {
				mainList: newMainList,
				readingList: localStorageState.readingList
			}
			dispatchBooks(loadState(newState))
		}
	}, [data])

	useEffect(() => {
		const syncStorage = ev => {
			if (ev.key === LOCAL_STORAGE_TOKENS.BOOKS_STATE) {
				const newState = JSON.parse(ev.newValue)
				dispatchBooks(loadState(newState))
			}
		}
		window.addEventListener('storage', syncStorage)

		return () => window.removeEventListener('storage', syncStorage)
	}, [])

	return {
		...books,
		dispatchBooks,
		allGenres,
		maxPages
	}
}
