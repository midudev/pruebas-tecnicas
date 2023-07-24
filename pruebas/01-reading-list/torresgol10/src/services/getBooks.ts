//Actualmente solo devolvera los datos leidos del json de los libros pero extramos a un servicio para que en un futuro se pueda leer de una base de datos o de un servicio externo
import { library } from '../../../books.json'

export const getBooks = () => {
    return library;
}