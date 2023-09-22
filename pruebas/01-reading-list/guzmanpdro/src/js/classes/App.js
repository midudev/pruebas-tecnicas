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
  printBooks,
  filterBooks
} from '../functions'

class App {
  initApp (availableBooks, addedBooks) {
    this.genders = availableBooks.map(book => {
      const { genre } = book
      return genre
    })

    this.fillGenders(this.genders)

    $gendersFilter.appendChild($fragment)

    printBooks(filterBooks(availableBooks))

    $booksAvailable.textContent = `Libros disponibles (${availableBooks.length})`
    $addedBooks.textContent = `Lista de lectura (${addedBooks.length})`
    $booksAvailable.classList.add(SECTION_TITLE_ACTION.ACTIVE)
    $booksAvailable.addEventListener('click', () => backToBooksAvailable())
    $addedBooks.textContent = `Lista de lectura (${addedBooks.length})`
    $addedBooks.addEventListener('click', () => renderAddedBooks())
  }

  fillGenders (genders) {
    const listOfGenders = removeDuplicatesGenders(genders)
    listOfGenders.unshift('All')

    listOfGenders.forEach((genre, index) => {
      const $genreClone = $gendersTemplate.content.cloneNode(true)
      const $genre = $genreClone.querySelector('#genre')
      const $genreOption = $genreClone.querySelector('input[name="genreOption"]')

      $genre.textContent = genre
      $genre.setAttribute('for', `genreOption-${index + 1}`)
      $genreOption.id = `genreOption-${index + 1}`
      $genreOption.value = `${genre}`
      $fragment.appendChild($genreClone)
    })
  }
}

export { App }
