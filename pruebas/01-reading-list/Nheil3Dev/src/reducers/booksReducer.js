import { BOOKS_ACTIONS } from '../constants/booksActions'
import { LOCAL_STORAGE_TOKENS } from '../constants/localStorage'
import { modifyLocalStorage } from '../utils/localStorage'

export const BOOKS_INITIAL_STATE = {
	initialBooks: [],
	mainList: [],
	readingList: []
}

export const booksReducer = (state, action) => {
	const { type, payload } = action

	switch (type) {
		case BOOKS_ACTIONS.ADD: {
			if (state.readingList.filter(book => book.ISBN === payload).length > 0)
				return state

			const index = state.mainList.findIndex(book => book.ISBN === payload)

			const newMainList = [...state.mainList]
			newMainList[index].isReading = true

			const newReadingList = [...state.readingList].concat(
				state.mainList[index]
			)

			const newState = {
				...state,
				mainList: newMainList,
				readingList: newReadingList
			}

			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.BOOKS_STATE)

			return newState
		}

		case BOOKS_ACTIONS.REMOVE: {
			const index = state.mainList.findIndex(book => book.ISBN === payload)

			const newMainList = [...state.mainList]
			newMainList[index].isReading = false

			const newReadingList = state.readingList.filter(
				book => book.ISBN !== payload
			)

			const newState = {
				...state,
				mainList: newMainList,
				readingList: newReadingList
			}

			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.BOOKS_STATE)

			return newState
		}

		case BOOKS_ACTIONS.RESET: {
			const newMainList = [...state.mainList].map(book => {
				return {
					...book,
					isReading: false
				}
			})

			const newState = {
				...state,
				mainList: newMainList,
				readingList: []
			}

			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.BOOKS_STATE)

			return newState
		}

		case BOOKS_ACTIONS.UPGRADE: {
			const index = state.readingList.findIndex(book => book.ISBN === payload)

			if (index === 0) return

			const upgradedBook = state.readingList[index]

			const newReadingList = [...state.readingList].filter(
				book => book.ISBN !== payload
			)

			newReadingList.splice(index - 1, 0, upgradedBook)

			const newState = {
				...state,
				readingList: newReadingList
			}

			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.BOOKS_STATE)

			return newState
		}

		case BOOKS_ACTIONS.DOWNGRADE: {
			const index = state.readingList.findIndex(book => book.ISBN === payload)

			if (index === state.readingList.length - 1) return

			const downgrandedBook = state.readingList[index]

			const newReadingList = [...state.readingList].filter(
				book => book.ISBN !== payload
			)

			newReadingList.splice(index + 1, 0, downgrandedBook)

			const newState = {
				...state,
				readingList: newReadingList
			}

			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.BOOKS_STATE)

			return newState
		}

		case BOOKS_ACTIONS.LOAD: {
			const newState = {
				...payload
			}
			return newState
		}

		default:
			throw new Error('Invalid action type')
	}
}
