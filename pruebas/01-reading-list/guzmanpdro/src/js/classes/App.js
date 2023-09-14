import {
  $gendersFilter,
  $gendersTemplate,
  $booksAvailable,
  $addedBooks,
  $fragment
} from '../selectors'

import { removeDuplicatesGenders, SECTION_TITLE_ACTION } from '../utlis'

import {
  renderAddedBooks,
  backToBooksAvailable,
  printBooks
} from '../functions'

class App {
  initApp (availableBooks, addedBooks) {
    this.genders = availableBooks.map(book => {
      const { genre } = book
      return genre
    })

    this.fillGenders(this.genders)

    $gendersFilter.appendChild($fragment)

    printBooks(availableBooks)

    $booksAvailable.textContent = `Libros disponibles (${availableBooks.length})`
    $addedBooks.textContent = `Lista de lectura (${addedBooks.length})`
    $booksAvailable.classList.add(SECTION_TITLE_ACTION.ACTIVE)
    $booksAvailable.addEventListener('click', () => backToBooksAvailable())
    $addedBooks.textContent = `Lista de lectura (${addedBooks.length})`
    $addedBooks.addEventListener('click', () => renderAddedBooks())
  }

  fillGenders (genders) {
    removeDuplicatesGenders(genders).forEach(genre => {
      const $genreClone = $gendersTemplate.content.cloneNode(true)
      const $genreLink = $genreClone.querySelector('#genre')

      $genreLink.textContent = genre
      $fragment.appendChild($genreClone)
    })
  }
}

export { App }
