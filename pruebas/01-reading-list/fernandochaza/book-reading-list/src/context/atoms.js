import { atom } from 'jotai'

import { darkTheme, lightTheme } from '../theme/themes'

let currentTheme = {}

const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
if (darkThemeMq.matches) {
  currentTheme = darkTheme
} else {
  currentTheme = lightTheme
}

export const books = atom(null)
export const userReadingList = atom([])
export const userCompletedBooks = atom([])
export const themeAtom = atom(currentTheme)
export const categoryFilter = atom('')
export const authorQuery = atom('')
export const titleQuery = atom('')
export const loading = atom(true)
export const displayFeedbackModal = atom(true)
export const formSent = atom(false)
