import { writable } from 'svelte/store'
import { browser } from '$app/environment'

let selectedBookISBNs

if (browser && localStorage.selectedBookISBNs) {
  selectedBookISBNs = localStorage.selectedBookISBNs.split(',')
}

export const books = writable([])
export const selectedBookIDs = writable(selectedBookISBNs || [])

if (browser) {
  selectedBookIDs.subscribe((value) => {
    localStorage.selectedBookISBNs = value
  })
}
