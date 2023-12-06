import { FILTERS_ACTIONS } from '../constants/filtersActions'
import { LOCAL_STORAGE_TOKENS } from '../constants/localStorage'
import { modifyLocalStorage } from '../utils/localStorage'

export const FILTERS_INITIAL_STATE = {
	search: '',
	filterGenre: 'Todos',
	filterMinPages: 0,
	onlyAvailables: false,
	booksPerPage: 8,
	page: 1,
	orderBy: 'default',
	order: 'asc'
}

export const filtersReducer = (state, action) => {
	const { type, payload } = action

	switch (type) {
		case FILTERS_ACTIONS.GENRE: {
			const newState = {
				...state,
				filterGenre: payload,
				page: 1
			}
			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.FILTERS_STATE)
			return newState
		}

		case FILTERS_ACTIONS.MIN_PAGES: {
			const newState = {
				...state,
				filterMinPages: payload,
				page: 1
			}
			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.FILTERS_STATE)
			return newState
		}

		case FILTERS_ACTIONS.ONLY_AVAILABLES: {
			const newState = {
				...state,
				onlyAvailables: !state.onlyAvailables,
				page: 1
			}
			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.FILTERS_STATE)
			return newState
		}

		case FILTERS_ACTIONS.BOOKS_PER_PAGE: {
			const newState = {
				...state,
				booksPerPage: payload,
				page: 1
			}

			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.FILTERS_STATE)

			return newState
		}

		case FILTERS_ACTIONS.PAGE: {
			const newState = {
				...state,
				page: payload
			}

			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.FILTERS_STATE)

			return newState
		}

		case FILTERS_ACTIONS.LOCAL_STORAGE: {
			return {
				...payload
			}
		}

		case FILTERS_ACTIONS.SEARCH: {
			const newState = {
				...state,
				search: payload,
				page: 1
			}

			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.FILTERS_STATE)

			return newState
		}

		case FILTERS_ACTIONS.ORDER_BY: {
			let newState
			if (payload === 'default') {
				newState = {
					...state,
					orderBy: payload,
					order: 'asc',
					page: 1
				}
			} else {
				newState = {
					...state,
					orderBy: payload,
					page: 1
				}
			}

			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.FILTERS_STATE)

			return newState
		}

		case FILTERS_ACTIONS.TOGGLE_ORDER: {
			const newState = {
				...state,
				order: payload,
				page: 1
			}

			modifyLocalStorage(newState, LOCAL_STORAGE_TOKENS.FILTERS_STATE)

			return newState
		}

		default:
			throw new Error('Invalid action type')
	}
}
