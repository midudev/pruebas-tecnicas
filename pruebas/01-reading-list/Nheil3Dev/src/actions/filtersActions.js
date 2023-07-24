import { FILTERS_ACTIONS } from '../constants/filtersActions'

export const genreChanged = genre => ({
	type: FILTERS_ACTIONS.GENRE,
	payload: genre
})

export const minPagesChanged = minPages => ({
	type: FILTERS_ACTIONS.MIN_PAGES,
	payload: minPages
})

export const booksPerPageChanged = booksPerPage => ({
	type: FILTERS_ACTIONS.BOOKS_PER_PAGE,
	payload: booksPerPage
})

export const onlyAvailablesChanged = () => ({
	type: FILTERS_ACTIONS.ONLY_AVAILABLES
})

export const pageChanged = page => ({
	type: FILTERS_ACTIONS.PAGE,
	payload: page
})

export const localStorageChanged = newState => ({
	type: FILTERS_ACTIONS.LOCAL_STORAGE,
	payload: newState
})

export const searchChanged = search => ({
	type: FILTERS_ACTIONS.SEARCH,
	payload: search
})

export const orderByChanged = orderBy => ({
	type: FILTERS_ACTIONS.ORDER_BY,
	payload: orderBy
})

export const orderToggled = order => ({
	type: FILTERS_ACTIONS.TOGGLE_ORDER,
	payload: order
})
