import { useEffect, useReducer } from 'react'
import { localStorageChanged } from '../actions/filtersActions'
import { LOCAL_STORAGE_TOKENS } from '../constants/localStorage'
import {
	FILTERS_INITIAL_STATE,
	filtersReducer
} from '../reducers/filtersReducer'
import { readLocalStorage } from '../utils/localStorage'

export function useFilters() {
	// ESTADO + ACCIONES

	const [filters, dispatchFilters] = useReducer(
		filtersReducer,
		FILTERS_INITIAL_STATE
	)

	// EFECTOS

	useEffect(() => {
		const localStorageState = readLocalStorage(
			LOCAL_STORAGE_TOKENS.FILTERS_STATE
		)

		if (localStorageState) {
			dispatchFilters(localStorageChanged(localStorageState))
		}
	}, [])

	useEffect(() => {
		const syncStorage = ev => {
			if (ev.key === LOCAL_STORAGE_TOKENS.FILTERS_STATE) {
				dispatchFilters(localStorageChanged(JSON.parse(ev.newValue)))
			}
		}
		window.addEventListener('storage', syncStorage)

		return () => window.removeEventListener('storage', syncStorage)
	}, [])

	return { filters, dispatchFilters }
}
