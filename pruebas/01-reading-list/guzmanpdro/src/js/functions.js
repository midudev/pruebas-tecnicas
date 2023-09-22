import { UI } from './classes/UI'
import { ReadingList } from './classes/ReadingList'
import { $addedBooks, $booksAvailable } from './selectors'
import { SECTION_TITLE_ACTION, animateCSS, clearHTMl } from './utlis'

const readingList = new ReadingList()
const ui = new UI()

function printBooks (data) {
  if (data.length !== 0) {
    if (ui.isOnBooksAvailable) {
      ui.renderBooks(data)
    } else {
      ui.renderBooks(data)
    }
  } else {
    clearHTMl(ui.booksContainer)
    ui.isOnBooksAvailable
      ? ui.renderEmptyLibrary('No hay libros', 'No hay libros disponibles')
      : ui.renderEmptyLibrary('Oh, qué vacío está', 'Agrega algún libro')
  }
}

function clickHandler (isbn, isOnBooksAvailable, event) {
  let book
  let data

  if (isOnBooksAvailable) {
    book = readingList.booksAvailable.find(elem => elem.ISBN === isbn)
    readingList.addBook(book)
    data = filterBooks(readingList.booksAvailable, ui.checkedGenre)
  } else {
    book = readingList.addedBooks.find(elem => elem.ISBN === isbn)
    readingList.removeBook(book)
    data = filterBooks(readingList.addedBooks, ui.checkedGenre)
  }

  const elementToAnimate = event.target.parentNode.parentNode
  const animationName = 'bounceOut'
  $booksAvailable.textContent = `Libros disponibles (${readingList.booksAvailable.length})`
  $addedBooks.textContent = `Lista de lectura (${readingList.addedBooks.length})`
  animateCSS(elementToAnimate, animationName)

  setTimeout(() => {
    printBooks(data, ui.checkedGenre)
  }, 750)
}

function renderAddedBooks () {
  $booksAvailable.classList.remove(SECTION_TITLE_ACTION.ACTIVE)
  $addedBooks.classList.add(SECTION_TITLE_ACTION.ACTIVE)
  ui.isOnBooksAvailable = false
  printBooks(filterBooks(readingList.addedBooks, ui.checkedGenre))
}

function backToBooksAvailable () {
  $booksAvailable.classList.add(SECTION_TITLE_ACTION.ACTIVE)
  $addedBooks.classList.remove(SECTION_TITLE_ACTION.ACTIVE)
  ui.isOnBooksAvailable = true
  printBooks(filterBooks(readingList.booksAvailable, ui.checkedGenre))
}

function filterBooks (list, genre) {
  let filteredBooks = list

  if (genre) {
    if (genre === 'Todos') {
      return filteredBooks
    }
    filteredBooks = list.filter(elem => elem.genre === genre)
  }

  return filteredBooks
}

function onGenreChange (event) {
  const list = ui.isOnBooksAvailable ? readingList.booksAvailable : readingList.addedBooks
  ui.checkedGenre = event.target.value

  printBooks(filterBooks(list, ui.checkedGenre))
}

export {
  printBooks,
  clickHandler,
  renderAddedBooks,
  backToBooksAvailable,
  onGenreChange,
  filterBooks
}
