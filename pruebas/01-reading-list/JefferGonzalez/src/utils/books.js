/**
 *
 * @param {Array} books
 * @param {String} type
 * @param {String} value
 * @returns Array of books
 */
export const filterBooksByType = (books = [], type = '', value = '') => {
  if (type === 'pages') {
    return books.filter(({ book }) => book.pages <= value)
  } else if (type === 'genre') {
    return books.filter(({ book }) => book.genre === value || value === '')
  } else {
    throw new Error('Invalid type')
  }
}
/**
 *
 * @param {Array} books
 * @returns Array of books
 */
export const addLikeToBook = (books) => {
  return books.map(({ book }) => {
    const data = {
      ...book,
      like: false
    }
    return { book: data }
  })
}

/**
 *
 * @param {Array} books
 * @param {String} ISBN
 * @returns Object of book
 */
export const findBookByISBN = (books, ISBN) => {
  return books.find(({ book }) => book.ISBN === ISBN)
}

/**
 *
 * @param {Array} books
 * @returns Number
 */
export const getMaxPages = (books) => {
  return Math.max(...books.map(({ book }) => book.pages), 0)
}

/**
 *
 * @param {Array} books
 * @returns Set
 */
export const getUniqueGenres = (books) => {
  return new Set([...books.map(({ book }) => book.genre)])
}

/**
 *
 * @param {String} text
 * @returns String
 */
export const getSypnosis = (text) => {
  const MAX_LENGTH = 50
  if (text.length > MAX_LENGTH) {
    return `${text.substring(0, MAX_LENGTH)}...`
  }
  return text
}
