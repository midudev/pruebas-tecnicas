import { BOOKS_ACTIONS } from '../constants/booksActions'

export const addBook = ISBN => ({ type: BOOKS_ACTIONS.ADD, payload: ISBN })

export const reset = () => ({ type: 'reset' })

export const removeBook = ISBN => ({
	type: 'book_removed',
	payload: ISBN
})

export const upgradePreference = ISBN => ({
	type: 'preference_upgraded',
	payload: ISBN
})

export const downgradePreference = ISBN => ({
	type: 'preference_downgraded',
	payload: ISBN
})

export const loadState = state => ({ type: 'load', payload: state })
