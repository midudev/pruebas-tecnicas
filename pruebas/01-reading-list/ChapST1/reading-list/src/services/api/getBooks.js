/*
    * Creamos la function getBooks que recibe como parametro la categoria seleccionada
    * Luego hacemos un fetch a la API_URL
    * Luego obtenemos la data de la respuesta y la desestructuramos para obtener la propiedad library
    * Luego mapeamos la propiedad library para obtener los datos que necesitamos
    * Luego filtramos los libros que estan en la propiedad library con la categoria seleccionada
    * Si la categoria seleccionada es 'Todas' entonces retornamos todos los libros sin filtrar de lo contrario retornamos los libros filtrados
*/

import { ALL_CATEGORIES } from '../../constants'
import { API_URL } from './config'

export async function getBooks ({ category }) {
  const res = await fetch(API_URL)
  const { library } = await res.json()

  const mappedLibrary = library?.map(({ book }) => {
    const { ISBN, title, genre, pages, cover } = book

    return {
      id: ISBN,
      bookTitle: title,
      bookGenre: genre,
      bookPages: pages,
      bookCover: cover
    }
  })

  const filteredBooks = mappedLibrary?.filter(({ bookGenre }) => {
    return bookGenre === category
  })

  return category === ALL_CATEGORIES ? mappedLibrary : filteredBooks
}
