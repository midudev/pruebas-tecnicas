import { UI } from './UI'

import {
  $gendersFilter,
  $gendersTemplate,
  $booksAvailable,
  $addedBooks,
  $fragment
} from '../selectors'

import { removeDuplicatesGenders, SECTION_TITLE_ACTION } from '../utlis'

import {
  filterBooks
} from '../functions'

import { genres } from '../data/books'

const ui = new UI()

class App {
  initApp (availableBooks, addedBooks) {
    this.fillGenders(genres)

    $gendersFilter.appendChild($fragment)

    ui.renderBooks(filterBooks(availableBooks))

    $booksAvailable.textContent = `Libros disponibles (${availableBooks.length})`
    $addedBooks.textContent = `Lista de lectura (${addedBooks.length})`
    $booksAvailable.classList.add(SECTION_TITLE_ACTION.ACTIVE)
    $booksAvailable.addEventListener('click', () => ui.renderAvailableBooks())
    $addedBooks.textContent = `Lista de lectura (${addedBooks.length})`
    $addedBooks.addEventListener('click', () => ui.renderReadingList())
  }

  fillGenders (genders) {
    const listOfGenders = removeDuplicatesGenders(genders)
    listOfGenders.unshift('Todos')

    listOfGenders.forEach((genre, index) => {
      const $genreClone = $gendersTemplate.content.cloneNode(true)
      const $genre = $genreClone.querySelector('#genre')
      const $genreOption = $genreClone.querySelector('input[name="genre"]')

      $genre.textContent = genre
      $genre.setAttribute('for', `genreOption-${index + 1}`)
      $genreOption.id = `genreOption-${index + 1}`
      $genreOption.value = `${genre}`
      $genreOption.addEventListener('change', (event) => ui.filterBooks(event))

      if ($genreOption.value === 'Todos') {
        $genreOption.setAttribute('checked', '')
      }

      $fragment.appendChild($genreClone)
    })
  }
}

export { App }
