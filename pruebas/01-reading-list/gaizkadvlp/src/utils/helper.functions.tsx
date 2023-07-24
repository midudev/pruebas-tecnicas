import { KeyFavorites, TipoGenero } from "../interfaces/enums";
import { Book } from "../interfaces/interfaces";

const MIS_LIBROS_FAVORITOS = KeyFavorites.MIS_LIBROS_FAVORITOS

export const cuentaLibros = (contador: number, contadorGenero?: number, filtro?: string): any => {
  if (contador === 0) return <p>No hay libros disponibles</p>;
  if (contador === 1) return <h4>Hay {contador} libro disponible</h4>;
  return (
    <>
      <h4>Hay {contador} libros disponibles</h4>
      {(filtro !== TipoGenero.TODOS_LOS_GENEROS && contadorGenero !== 0) && 
      <p>{contadorGenero} son del género: {filtro}</p>}
    </>
    );
};

export const saveFavorito = (libro: Book): void => {
  try {
    const misFavoritos = localStorage.getItem(MIS_LIBROS_FAVORITOS)
    const favorites: Book[] = misFavoritos ? JSON.parse(misFavoritos) : []
    const saveFavorites = [...favorites, libro]
    localStorage.setItem(MIS_LIBROS_FAVORITOS, JSON.stringify(saveFavorites))
  } catch (error) {
    console.error('Error al guardar los datos', error)
  }
}

export const removeFavorite = (libro: Book): void => {
  try {
    const misFavoritos = localStorage.getItem(MIS_LIBROS_FAVORITOS)
    if (!misFavoritos) return
    const favorites: Book[] = JSON.parse(misFavoritos)
    const updateFavorites = favorites.filter((element:Book) => element.ISBN !== libro.ISBN)
    localStorage.setItem(MIS_LIBROS_FAVORITOS, JSON.stringify(updateFavorites))
  } catch (error) {
    console.error('Error al actualizar los datos', error)    
  }
}

export const getFavoritos = (): object | null | undefined => {
  try {
    const serializedObj = localStorage.getItem(MIS_LIBROS_FAVORITOS)
    if (serializedObj === null || undefined) return null
    return JSON.parse(serializedObj)
  }
  catch (error) {
    console.error('Error recuperando datos', error)
  }
}
