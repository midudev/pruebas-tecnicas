// eslint-disable-next-line import/no-absolute-path
import arrowUpIcon from '/arrow_up.svg'
import { ReadingList } from './ReadingList'
import { animateCSS, clearHTMl, SECTION_TITLE_ACTION } from '../utlis'

import {
  $booksContainer,
  $booksTemplate,
  $booksAvailable,
  $addedBooks,
  $fragment
} from '../selectors'

import { filterBooks } from '../functions'

class UI {
  constructor () {
    this.readingList = new ReadingList()
    this.isOnBooksAvailable = true
    this.checkedGenre = 'Todos'
    this.booksContainer = document.querySelector('#booksContainer')
  }

  renderBooks (data) {
    const $listBooks = document.createElement('ul')
    $listBooks.classList.add('book-list')
    $listBooks.id = 'listBooks'

    data.forEach(book => {
      const { ISBN, cover, title } = book

      const $bookClone = $booksTemplate.content.cloneNode(true)
      const $bookImage = $bookClone.querySelector('#bookImage')
      const $bookTitle = $bookClone.querySelector('#bookTitle')
      const $bookButton = $bookClone.querySelector('#addBook')

      $bookImage.src = cover
      $bookTitle.textContent = title
      $bookButton.setAttribute('data-isbn', ISBN)
      $bookButton.addEventListener('click', (event) => this.addBook(ISBN, this.isOnBooksAvailable, event))

      this.isOnBooksAvailable ? $bookButton.textContent = 'Agregar' : $bookButton.textContent = 'Eliminar'

      $fragment.appendChild($bookClone)
    })

    clearHTMl($booksContainer)
    $listBooks.appendChild($fragment)
    $booksContainer.appendChild($listBooks)
  }

  addBook (isbn, isOnBooksAvailable, event) {
    let book
    let data

    if (isOnBooksAvailable) {
      book = this.readingList.booksAvailable.find(elem => elem.ISBN === isbn)
      this.readingList.addBook(book)
      data = filterBooks(this.readingList.booksAvailable, this.checkedGenre)
    } else {
      book = this.readingList.addedBooks.find(elem => elem.ISBN === isbn)
      this.readingList.removeBook(book)
      data = filterBooks(this.readingList.addedBooks, this.checkedGenre)
    }

    const elementToAnimate = event.target.parentNode.parentNode
    const animationName = 'bounceOut'
    $booksAvailable.textContent = `Libros disponibles (${this.readingList.booksAvailable.length})`
    $addedBooks.textContent = `Lista de lectura (${this.readingList.addedBooks.length})`
    animateCSS(elementToAnimate, animationName)

    setTimeout(() => {
      this.renderBooks(data, this.checkedGenre)
    }, 750)
  }

  filterBooks (event) {
    const { booksAvailable, addedBooks } = this.readingList
    const list = this.isOnBooksAvailable ? booksAvailable : addedBooks
    this.checkedGenre = event.target.value

    this.renderBooks(filterBooks(list, this.checkedGenre))
  }

  renderReadingList () {
    $booksAvailable.classList.remove(SECTION_TITLE_ACTION.ACTIVE)
    $addedBooks.classList.add(SECTION_TITLE_ACTION.ACTIVE)
    this.isOnBooksAvailable = false
    this.renderBooks(filterBooks(this.readingList.addedBooks, this.checkedGenre))
  }

  renderAvailableBooks () {
    $booksAvailable.classList.add(SECTION_TITLE_ACTION.ACTIVE)
    $addedBooks.classList.remove(SECTION_TITLE_ACTION.ACTIVE)
    this.isOnBooksAvailable = true
    this.renderBooks(filterBooks(this.readingList.booksAvailable, this.checkedGenre))
  }

  renderEmptyLibrary (title, desc) {
    const $emptyLibrary = document.createElement('div')
    $emptyLibrary.classList.add('empty-library')

    const $infoContainer = document.createElement('div')
    $infoContainer.classList.add('info-container')

    const $arrowUpImage = document.createElement('img')
    $arrowUpImage.classList.add('arrow-up-animation')
    $arrowUpImage.src = `${arrowUpIcon}`
    $arrowUpImage.setAttribute('width', '180')
    $arrowUpImage.setAttribute('height', '180')

    const $emptyLibraryTitle = document.createElement('h2')
    $emptyLibraryTitle.classList.add('empty-library__title')
    $emptyLibraryTitle.textContent = title

    const $emptyLibraryDesc = document.createElement('p')
    $emptyLibraryDesc.classList.add('empty-library__text')
    $emptyLibraryDesc.textContent = desc

    $infoContainer.append($emptyLibraryTitle, $emptyLibraryDesc)

    $emptyLibrary.append($arrowUpImage, $infoContainer)

    $booksContainer.appendChild($emptyLibrary)
  }
}

export { UI }
