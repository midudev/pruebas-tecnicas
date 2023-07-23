import { KeyFavorites } from "../interfaces/enums";
import { Book } from "../interfaces/interfaces";

const misLilbrosFavoritos = KeyFavorites.MIS_LIBROS_FAVORITOS

export const cuentaLibros = (contador: number): any => {
  if (contador === 0) return <p>No hay libros disponibles</p>;
  if (contador === 1) return <p>Hay {contador} libro disponible</p>;
  return <p>Hay {contador} libros disponibles</p>;
};

export const saveFavorito = (libro: Book): void => {
  try {
    const misFavoritos = localStorage.getItem(misLilbrosFavoritos)
    const favorites: Book[] = misFavoritos ? JSON.parse(misFavoritos) : []
    const saveFavorites = [...favorites, libro]
    localStorage.setItem(misLilbrosFavoritos, JSON.stringify(saveFavorites))
  } catch (error) {
    console.error('Error al guardar los datos', error)
  }
}

export const removeFavorite = (libro: Book): void => {
  try {
    const misFavoritos = localStorage.getItem(misLilbrosFavoritos)
    if (!misFavoritos) return
    const favorites: Book[] = JSON.parse(misFavoritos)
    const updateFavorites = favorites.filter((element:Book) => element.ISBN !== libro.ISBN)
    localStorage.setItem(misLilbrosFavoritos, JSON.stringify(updateFavorites))
  } catch (error) {
    console.error('Error al actualizar los datos', error)    
  }
}

export const getFavoritos = (): object | null | undefined => {
  try {
    const serializedObj = localStorage.getItem(misLilbrosFavoritos)
    if (serializedObj === null || undefined) return null
    console.log("Hay response")
    return JSON.parse(serializedObj)
  }
  catch (error) {
    console.error('Error recuperando datos', error)
  }
}
