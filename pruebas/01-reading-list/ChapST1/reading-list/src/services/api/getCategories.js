/*
    * Creamos la function getBooksCategories
    * Luego obtenemos los libros de la API usando la function getBooks
    * Luego mapeamos los libros para obtener las categorias
    * Luego creamos un nuevo Set con las categorias filtradas ya que el Set no permite valores repetidos
    * Luego convertimos el Set en un array con Array.from()
    * Luego retornamos el array con las categorias filtradas
*/

import { ALL_CATEGORIES } from '../../constants'
import { getBooks } from './getBooks'

export async function getBooksCategories () {
  const books = await getBooks({ category: ALL_CATEGORIES, pages: 0 })

  const booksCategories = books.map(({ bookGenre }) => bookGenre)
  const filterCategories = new Set([ALL_CATEGORIES, ...booksCategories])

  return Array.from(filterCategories)
}
