import { writable } from 'svelte/store'
import type { PaginationState } from '../components/types'

export const paginationState = writable<PaginationState>({ init: 0, offset: 4 })
