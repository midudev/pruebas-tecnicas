import { getBooksArray } from '../src/components/contexts/GlobalContext';
import data from '../src/files/books'
import { Book, Author } from '../src/types/books';


/* tests sobre la validez de los datos del archivo src/files/Books.tsx */


const ALLBOOKS: Book[] =  getBooksArray(data)


/* Titles (incluye 'otherbooks' del mismo autor) */
describe('TitleValidation', () => {
  test.each(ALLBOOKS.map(book => book.title))
  (
    'Title',
    (toEval) => {
      expect(toEval).toMatch(/[A-Z0-9][A-Za-z0-9:-_áéíúóúÁÉÍÓÚÜüÑñ]{1,50}/m)
    }
  )
  test.each(ALLBOOKS.map(book => book.author.otherBooks).flat())
  (
    'OtherTitles',
    (toEval) => {
      expect(toEval).toMatch(/[A-Z0-9][A-Za-z0-9:-_áéíúóúÁÉÍÓÚÜüÑñ]{1,50}/m)
    }
  )
})

/* Pages */
describe('PagesValidation', () => {
  test.each(ALLBOOKS.map(book => book.pages))
  (
    'Pages',
    (toEval) => {
      expect(toEval).toBeGreaterThanOrEqual(43)
      expect(toEval).toBeLessThanOrEqual(5000)
    }
  )
})

/* Genre */
describe('PagesValidation', () => {
  test.each(ALLBOOKS.map(book => book.genre))
  (
    'Gender',
    (toEval) => {
      expect(toEval).toMatch(/(Ciencia ficción|Terror|Drama|Suspenso|Acción|Zombies|Fantasía|Policial|Histórica|Misterio|Distópica|Psicológica|Romántica|Humor|Aventura|Misterio)/m)
    }
  )
})

/* Cover */
describe('CoverValidation', () => {
  test.each(ALLBOOKS.map(book => book.cover))
  (
    'Image',
    (toEqual) => {
      expect(toEqual).toMatch(/(https:\/\/|http:\/\/).+?(\.jpg|\.jpeg|\.webp|\.png)/m)
    }
  )
})

/* Synopsis */
describe('SynopsisValidation', () => {
  test.each(ALLBOOKS.map(book => book.synopsis))
  (
    'Synopsis',
    (toEval) => {
      toEval.match(/[A-Z0-9][\w\d\s.'"-:áéíóúÁÉÍÓÚÜüÑñ]{25,200}/m)
    }
  )
})

/* Year */
describe('YearValidation', () => {
  test.each(ALLBOOKS.map(book => book.year))
  (
    'Year',
    (toEval) => {
      expect(toEval).toBeGreaterThan(1540)
      expect(toEval).toBeLessThanOrEqual(new Date(Date.now()).getFullYear())
    }
  )
})

/* ISBN */
describe('ISBNValidation', () => {
  test.each(ALLBOOKS.map(book => book.ISBN))
  (
    'ISBN',
    (toEval) => {
      expect(toEval).toMatch(/\d{3}-\d{10}/m)
    }
  )
})

/* Author */
describe('AuthorValidation', () => {
  test.each(ALLBOOKS.map(book => book.author))
  (
    'AuthorValidation',
    (toEval) => {
      expect(toEval.name).toMatch(/^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ.' -]{2,65}$/m)
    }
  )
})